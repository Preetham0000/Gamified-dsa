# ---------- Stage 1: Build Frontend ----------
FROM node:18 AS frontend

WORKDIR /app

# Copy frontend-related files (root index.html + configs + src)
COPY package*.json ./
COPY vite.config.ts tsconfig*.json babel.config.js postcss.config.js tailwind.config.js ./
COPY index.html ./
COPY src/ ./src

# Install deps and build
RUN npm install
RUN npm run build

# ---------- Stage 2: Backend ----------
FROM node:18 AS backend

WORKDIR /app

# Copy backend files
COPY server/ ./server
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy frontend build output to backend public folder
COPY --from=frontend /app/dist ./public

# Expose app port
EXPOSE 5000

# Run server
CMD ["node", "server/index.js"]

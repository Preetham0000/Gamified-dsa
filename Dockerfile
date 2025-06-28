# ---------- Stage 1: Build Frontend ----------
FROM node:18 AS frontend

WORKDIR /app/frontend

# Copy frontend-related files
COPY package*.json ./
COPY vite.config.ts tsconfig*.json babel.config.js postcss.config.js tailwind.config.js ./
COPY src/ ./src
COPY index.html ./

# Install and build frontend
RUN npm install
RUN npm run dev

# ---------- Stage 2: Build Backend ----------
FROM node:18 AS backend

WORKDIR /app

# Copy backend-related files
COPY server/ ./server
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy frontend build output from previous stage
COPY --from=frontend /app/frontend/dist ./src

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["node", "server/index.js"]

 

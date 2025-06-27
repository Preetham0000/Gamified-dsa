# Use an official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# Copy the rest of the server code
COPY . .

RUN npm run build

# Expose the port your server runs on (change if different)
EXPOSE 5000

# Run the app
CMD ["npm", "run", "server"]


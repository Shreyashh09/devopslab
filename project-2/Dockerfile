# Multi-stage build for Angular application
# Stage 1: Build the Angular application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for Angular CLI)
RUN npm ci

# Copy source code
COPY . .

# Build the application for production
RUN npm run build:prod

# Stage 2: Serve the application with Nginx
FROM nginx:alpine AS production

# Copy built application from builder stage
COPY --from=builder /app/dist/angular-docker-app /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

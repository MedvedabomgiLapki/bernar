# Use nginx alpine as base image
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy public folder
COPY public/ /usr/share/nginx/html/public/

# Copy src folder
COPY src/ /usr/share/nginx/html/src/

# Copy nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
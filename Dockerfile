FROM nginx:alpine

# Copy the static website files to the Nginx html directory
COPY ./src /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
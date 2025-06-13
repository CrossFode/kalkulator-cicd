# Use a lightweight Nginx base image
FROM nginx:alpine

# Copy all static files (HTML, CSS, JS) to the default Nginx html directory
COPY index.html style.css script.js /usr/share/nginx/html/

# Optionally copy the 'tests' directory if needed
# COPY tests/ /usr/share/nginx/html/tests/

# Expose port 80
EXPOSE 80

# Default command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

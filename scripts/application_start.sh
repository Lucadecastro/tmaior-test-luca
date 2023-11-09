# Stop the existing container
docker stop tmaior-chat-app-container || true

# Remove the existing container
docker rm tmaior-chat-app-container || true

# Start the new container
docker run -d --name tmaior-chat-app-container -p 8080:80 lucadecastro/tmaior-chat-image:v1

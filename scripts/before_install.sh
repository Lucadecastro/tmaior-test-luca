#!/bin/bash

# Change permissions of the script
chmod +x "$0"

# Stop the Docker container
docker stop tmaior-chat-app-container || true

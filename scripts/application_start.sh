#!/bin/bash

# Change permissions of the script
chmod +x \$0

# Starts docker application
docker run -d --name tmaior-chat-app-container -p 80:80 lucadecastro/tmaior-chat-image:latest

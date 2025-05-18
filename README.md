
## Overview

- Build a Node.js backend
    
- Use Nginx as a reverse proxy with HTTPS
    
- Generate a self-signed SSL certificate
    
- Run everything inside Docker using Docker Compose
## Concepts 

- **Reverse proxy:**  
    A reverse proxy like Nginx receives requests from the client and forwards them to the actual backend server
    
- **Why use Nginx in front of Node.js:**  
    To handle static content, SSL termination and load balancing.
    
- **Docker Compose Networking:**  
    Services can talk to each other by their service name (e.g., `node-app:3000`), no need for `localhost`.
    
- **Nginx Configuration:**  
    Learned how to write a minimal Nginx config to pass requests to a different container.
## Setup 

- Clone the repository: 
```
	git clone git@github.com:AswinGopakumar/docker-nginx-node.git && cd ./docker-nginx-node/
```

- Create a self signed SSL certificate in `./docker-nginx-node/nginx/`
```
mkdir -p self-signed

openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout self-signed/server.key \
  -out self-signed/server.crt \
  -subj "/CN=localhost"
```
- Run the app:
```
	docker compose up
```
- Go to `https://localhost` to see the expected output

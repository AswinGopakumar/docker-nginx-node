
## Overview

- **Node.js App:** A simple web server that listens on port 3000.
- **Nginx:** Acts as a reverse proxy, forwarding HTTP traffic from port 80 to the Node.js app.
- **Docker Compose:** Used to run both services in isolated containers.
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
- Run the app:
	```
	docker compose up
	```

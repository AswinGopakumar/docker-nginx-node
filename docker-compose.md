``` docker-compose
version: '3'
services:
  backend:
    build: ./backend
    container_name: backend

  nginx:
    image: nginx:latest
    container_name: nginx
    ports:
      - "8080:80"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - backend

```
#### 🔸 `backend` service

- **build:** builds the image using the Dockerfile in `./backend`
    
- **container_name:** sets the container’s name as `backend`
    
- By default, it listens on port 3000 (internally)
    

#### 🔸 `nginx` service

- **image:** uses the latest official Nginx image
    
- **ports:** maps container port 80 to your host's port **8080**
    
    - So you access it via `http://localhost:8080`
        
- **volumes:** mounts your custom `default.conf` into the container to override the default Nginx config
    
- **depends_on:** ensures Nginx starts after the backend container is ready
    

> Docker Compose automatically sets up a **network** where containers can talk to each other using service names (`backend`, `nginx`, etc.).


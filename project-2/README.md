# Angular Docker Application

A modern Angular 17 application deployed with Docker, featuring both development and production configurations.

## 🚀 Features

- **Angular 17** with standalone components
- **Docker** containerization for easy deployment
- **Docker Compose** for development and production environments
- **Nginx** for production serving with optimized configuration
- **Hot reload** support for development
- **Multi-stage builds** for optimized production images
- **Responsive design** with modern UI components

## 🏗️ Project Structure

```
project2_devops/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── home/
│   │   │   └── home.component.ts
│   │   └── about/
│   │       └── about.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── Dockerfile
├── Dockerfile.dev
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── nginx.conf
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## 🛠️ Prerequisites

- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)
- **Node.js** (version 18 or higher) - for local development

## 🚀 Quick Start

### Development Mode

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd project2_devops
   ```

2. **Start development environment:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

3. **Access the application:**
   - Open your browser and navigate to `http://localhost:4200`
   - The application will automatically reload when you make changes

### Production Mode

1. **Build and start production environment:**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

2. **Access the application:**
   - Open your browser and navigate to `http://localhost`
   - The application is served by Nginx with optimized settings

## 🐳 Docker Commands

### Development Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Start in background
docker-compose -f docker-compose.dev.yml up -d

# Stop development environment
docker-compose -f docker-compose.dev.yml down

# View logs
docker-compose -f docker-compose.dev.yml logs -f
```

### Production Commands

```bash
# Start production environment
docker-compose -f docker-compose.prod.yml up --build

# Start in background
docker-compose -f docker-compose.prod.yml up -d --build

# Stop production environment
docker-compose -f docker-compose.prod.yml down

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### Individual Docker Commands

```bash
# Build development image
docker build -f Dockerfile.dev -t angular-docker-dev .

# Build production image
docker build -t angular-docker-prod .

# Run development container
docker run -p 4200:4200 -v $(pwd):/app angular-docker-dev

# Run production container
docker run -p 80:80 angular-docker-prod
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV`: Set to `development` or `production`
- `CHOKIDAR_USEPOLLING`: Enable file watching in Docker (development)

### Ports

- **Development**: 4200 (Angular dev server)
- **Production**: 80 (Nginx)

### Volumes

- **Development**: Source code is mounted for hot reload
- **Production**: Static files are copied to Nginx container

## 📦 Build Process

### Development Build
1. Uses `Dockerfile.dev`
2. Installs all dependencies (including dev dependencies)
3. Mounts source code for live development
4. Runs Angular dev server with hot reload

### Production Build
1. Uses multi-stage `Dockerfile`
2. Stage 1: Builds Angular application
3. Stage 2: Serves with Nginx
4. Optimized for production with compression and caching

## 🌐 Nginx Configuration

The production environment uses a custom Nginx configuration with:

- **Gzip compression** for better performance
- **Security headers** for enhanced security
- **Angular routing support** (SPA fallback)
- **Static asset caching** for optimal performance
- **Health check endpoint** at `/health`

## 📱 Application Features

- **Responsive design** that works on all devices
- **Modern UI** with gradient backgrounds and smooth animations
- **Navigation** between Home and About pages
- **Feature showcase** highlighting Docker and Angular capabilities

## 🧪 Testing

```bash
# Run tests (requires local Node.js installation)
npm test

# Run linting
npm run lint

# Build for production locally
npm run build:prod
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Check what's using the port
   lsof -i :4200
   lsof -i :80
   
   # Kill the process or use different ports
   ```

2. **Build failures:**
   ```bash
   # Clean Docker images and rebuild
   docker system prune -a
   docker-compose -f docker-compose.prod.yml up --build
   ```

3. **Permission issues:**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

### Debug Commands

```bash
# Enter running container
docker exec -it <container-name> /bin/sh

# View container logs
docker logs <container-name>

# Check container status
docker ps -a
```

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section
2. Review Docker and Angular logs
3. Open an issue on the repository
4. Contact the development team

---

**Happy coding with Docker and Angular! 🐳✨**

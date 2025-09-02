# Digital Craftsman Portfolio

A modern full-stack portfolio website built with Next.js, TypeScript, and containerized with Docker.

## Features

- Interactive services showcase with smooth animations
- Working contact form with email integration
- Responsive design with glassmorphism effects
- Blog system (in development)
- Fully containerized with Docker

## Tech Stack

- **Frontend**: Next.js 13+ (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Email**: Nodemailer with Gmail
- **Containerization**: Docker & Docker Compose
- **Icons**: Lucide React

## Quick Start

### Prerequisites

- Node.js 18+
- Docker Desktop
- Gmail account with App Password

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd digital-craftsman

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Gmail credentials

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Docker Development

```bash
# Build and run with Docker Compose
docker compose up

# Run in background
docker compose up -d

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild containers
docker compose up --build
```

## Environment Variables

Create `.env.local` with these variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=your-email@gmail.com
NODE_ENV=development
```

### Gmail App Password Setup

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Generate App Password for "Mail"
4. Use the 16-character code in `EMAIL_PASS`

## Docker Commands Reference

### Basic Commands

```bash
# Build image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio

# List running containers
docker ps

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# List images
docker images

# Remove image
docker rmi <image-id>
```

### Docker Compose Commands

```bash
# Start services
docker compose up

# Start in background
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs

# Follow logs
docker compose logs -f

# Rebuild and start
docker compose up --build

# Execute command in running container
docker compose exec app sh

# Check environment variables
docker compose exec app env
```

## Project Structure

```
digital-craftsman/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts      # Contact form API
│   │   │   └── health/route.ts       # Health check API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   └── Container.tsx
│   │   ├── hero/                     # Hero section components
│   │   ├── services/                 # Services section
│   │   └── contact/                  # Contact form
│   ├── hooks/
│   │   └── useContactForm.ts         # Contact form hook
│   └── lib/
│       └── blog-utils.ts             # Blog utilities
├── docker-compose.yml                # Docker Compose config
├── Dockerfile                        # Docker build instructions
├── .dockerignore                     # Docker ignore rules
├── .env.local                        # Environment variables (not in git)
├── .env.example                      # Environment template
├── next.config.js                    # Next.js configuration
└── package.json
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission

## Development Workflow

### Adding New Features

1. **Development**: Work on `localhost:3000` with `npm run dev`
2. **Testing**: Build locally with `npm run build`
3. **Containerization**: Test with `docker compose up`
4. **Commit**: `git add .` and `git commit -m "feat: description"`

### Debugging Docker Issues

```bash
# Check container logs
docker compose logs app

# Access container shell
docker compose exec app sh

# Check environment variables
docker compose exec app env

# Rebuild from scratch
docker compose down
docker compose up --build
```

## Common Issues & Solutions

### Build Failures

```bash
# ESLint errors during build
# Quick fix: Update next.config.js
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}

# Clean build
npm run build
```

### Environment Variable Issues

```bash
# Check .env.local format
# Ensure no spaces in variable names
# Example: EMAIL_USER=test@gmail.com (not EMAIL USER=test@gmail.com)

# Verify variables are loaded
docker compose exec app env | grep EMAIL
```

### Docker Compose Issues

```bash
# Permission errors
sudo chown -R $USER:$USER .

# Port conflicts
docker compose down
lsof -ti:3000 | xargs kill -9

# Clean restart
docker compose down
docker system prune -f
docker compose up --build
```

## Deployment

### Local Production Test

```bash
# Build production image
docker compose -f docker-compose.yml up --build

# Test production build
npm run build && npm start
```

### Future Cloud Deployment

- AWS ECS/Fargate
- Google Cloud Run  
- Azure Container Instances
- DigitalOcean App Platform

## Learning Resources

### Docker Concepts Learned

1. **Containerization**: Packaging app with dependencies
2. **Multi-stage builds**: Optimized production images
3. **Docker Compose**: Multi-container orchestration
4. **Environment management**: Secure config handling
5. **Health checks**: Container monitoring
6. **Resource limits**: CPU/memory constraints

### Next Steps

- [ ] Add database (PostgreSQL)
- [ ] Implement Redis caching
- [ ] Set up CI/CD pipeline
- [ ] Add monitoring/logging
- [ ] Kubernetes deployment

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Ahmad
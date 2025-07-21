# 🚀 Deployment Guide - Solar Markdown Website Builder

This guide covers all deployment options for the Solar Markdown Website Builder application.

## 📋 Prerequisites

- **Node.js 20+**
- **Python 3.11+**
- **Docker** (for containerized deployments)
- **pnpm** (recommended package manager)
- **uv** (Python package manager)

## 🐳 Docker Deployment Options

### E2B Platform Deployment

**E2B** provides sandbox environments perfect for development and testing.

```bash
# Build E2B image
docker build -f e2b.Dockerfile -t solar-markdown-builder:e2b .

# Run E2B container
docker run -p 5173:5173 -p 5000:5000 solar-markdown-builder:e2b
```

**Features:**
- Multi-service container with frontend and backend
- Development-optimized with hot reload
- Integrated logging and debugging tools
- Python environment with uv package manager

### Railway Platform Deployment

**Railway** provides production-ready hosting with nginx and advanced features.

```bash
# Build Railway image
docker build -f railway.Dockerfile -t solar-markdown-builder:railway .

# Run Railway container
docker run -p 8000:8000 -e PRERENDER_TOKEN=your_token solar-markdown-builder:railway
```

**Advanced Features:**
- **Nginx reverse proxy** with optimized configuration
- **Prerender.io integration** for SEO optimization
- **Static asset caching** with optimal headers
- **Multi-stage build** for minimal production image
- **Health checks** and monitoring

**Environment Variables:**
- `PRERENDER_TOKEN` - Token for prerender.io service (optional)
- `API_HOST` - Backend API host (default: localhost)
- `API_PORT` - Backend API port (default: 5000)

## 🔧 Local Development Setup

### Option 1: Manual Setup

**Frontend Setup:**
```bash
cd app
pnpm install
pnpm dev
```

**Backend Setup:**
```bash
cd services
uv sync
uv run uvicorn main:app --reload --host 0.0.0.0 --port 5000
```

### Option 2: Docker Compose

```bash
# Start all services
docker-compose up --build

# Start in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## ☁️ Cloud Platform Deployments

### Railway (Recommended)

1. **Connect Repository:**
   - Link your GitHub repository to Railway
   - Railway will auto-detect the `railway.Dockerfile`

2. **Configure Environment:**
   ```env
   PRERENDER_TOKEN=your_prerender_io_token
   NODE_ENV=production
   PYTHON_ENV=production
   ```

3. **Deploy:**
   - Railway automatically builds and deploys on git push
   - Custom domain and SSL certificates included

### Vercel (Frontend Only)

**For frontend-only deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from app/ directory
cd app
pnpm build
vercel --prod
```

**vercel.json configuration:**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "framework": "vite"
}
```

### Netlify (Frontend Only)

**Deploy settings:**
- **Build command:** `cd app && pnpm build`
- **Publish directory:** `app/dist`
- **Node version:** 20

### Heroku (Full Stack)

**Deploy with Heroku:**

1. **Create Heroku app:**
   ```bash
   heroku create solar-markdown-builder
   ```

2. **Set buildpacks:**
   ```bash
   heroku buildpacks:add heroku/nodejs
   heroku buildpacks:add heroku/python
   ```

3. **Configure environment:**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PYTHON_ENV=production
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

## 🔍 Environment Configuration

### Frontend Environment Variables

Create `app/.env` file:
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_TITLE="Solar Markdown Builder"
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false

# Theme Configuration
VITE_DEFAULT_THEME=light
VITE_ENABLE_THEME_SWITCHING=true
```

### Backend Environment Variables

Create `services/.env` file:
```env
# Server Configuration
API_HOST=0.0.0.0
API_PORT=5000
API_WORKERS=1
LOG_LEVEL=info

# Database Configuration
DATABASE_URL=sqlite:///./solar_builder.db

# Security
SECRET_KEY=your-secret-key-here
CORS_ORIGINS=["http://localhost:5173", "http://localhost:3000"]

# External Services
PRERENDER_TOKEN=your_prerender_io_token
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
```

## 📊 Performance Optimization

### Frontend Optimizations

- **Code Splitting:** Automatic route-based splitting
- **Bundle Analysis:** `pnpm build --analyze`
- **Asset Optimization:** Images, fonts, and static files
- **Tree Shaking:** Unused code elimination

### Backend Optimizations

- **Async Operations:** FastAPI with async/await
- **Connection Pooling:** Database connection optimization
- **Caching:** Redis integration for performance
- **Rate Limiting:** API endpoint protection

## 🔒 Security Considerations

### Production Security Checklist

- [ ] **HTTPS Enforcement:** SSL certificates configured
- [ ] **Environment Variables:** Secrets not in code
- [ ] **CORS Configuration:** Restricted origins
- [ ] **Input Validation:** All inputs sanitized
- [ ] **Rate Limiting:** API endpoint protection
- [ ] **Security Headers:** CSP, HSTS, etc.
- [ ] **Dependency Updates:** Regular security updates

### Security Headers (nginx)

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## 🐛 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
pnpm install

# Python dependencies
uv sync --reinstall
```

**Port Conflicts:**
```bash
# Check running processes
lsof -i :5173
lsof -i :5000

# Kill processes
kill -9 <PID>
```

**Docker Issues:**
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -f e2b.Dockerfile .
```

### Health Checks

**Frontend Health Check:**
```bash
curl http://localhost:5173
```

**Backend Health Check:**
```bash
curl http://localhost:5000/health
curl http://localhost:5000/docs
```

## 📈 Monitoring and Logging

### Application Monitoring

- **Frontend:** Vite dev server logs
- **Backend:** FastAPI uvicorn logs
- **Nginx:** Access and error logs
- **Docker:** Container logs with `docker logs`

### Log Aggregation

```bash
# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

## 🎯 Next Steps

1. **Set up CI/CD pipeline** with GitHub Actions
2. **Configure monitoring** with application metrics
3. **Set up backup strategy** for data persistence
4. **Implement user authentication** if required
5. **Configure CDN** for static assets

---

**Need help?** Check the [README.md](README.md) or create an issue in the repository.

*Last updated: July 21, 2025*
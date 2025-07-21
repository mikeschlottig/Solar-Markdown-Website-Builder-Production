# 🚀 Solar Markdown Website Builder - Production

**Advanced markdown-based website builder with real-time preview capabilities**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.12-green.svg)](https://fastapi.tiangolo.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-purple.svg)](https://vitejs.dev/)

## 📋 Overview

Solar Markdown Website Builder is a comprehensive, production-ready application that enables users to create beautiful websites using markdown with real-time preview capabilities. Built with modern web technologies, it combines the simplicity of markdown with the power of a visual editor.

### ✨ Key Features

- **📝 Markdown-First Approach**: Write content in markdown with live preview
- **🎨 Real-time Visual Editor**: See changes as you type
- **🧩 Component Library**: Extensive collection of pre-built UI components
- **🎯 Drag & Drop Interface**: Intuitive website building experience
- **📱 Responsive Design**: Mobile-first, responsive layouts
- **🎨 Theme System**: Dark/light mode with customizable themes
- **🔄 Live Preview**: Instant feedback on changes
- **📤 Export Capabilities**: Multiple export formats and deployment options
- **🔒 Production Ready**: Optimized for performance and scalability

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics and visualizations
- **D3.js** - Data visualization capabilities
- **React Hook Form + Zod** - Form handling with validation

### Backend
- **Python FastAPI** - High-performance async API framework
- **Pydantic** - Data validation and serialization
- **uvicorn** - ASGI server for production
- **SQLAlchemy** - Database ORM
- **Loguru** - Advanced logging capabilities

### Additional Libraries
- **React Router** - Client-side routing
- **React Query** - Server state management
- **Recharts** - Chart and graph components
- **Lucide React** - Beautiful icon library
- **date-fns** - Date manipulation utilities
- **lodash** - Utility functions
- **mathjs** - Mathematical expression evaluator

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+**
- **Python 3.11+**
- **pnpm** (recommended) or npm
- **uv** (for Python dependencies)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production.git
   cd Solar-Markdown-Website-Builder-Production
   ```

2. **Install frontend dependencies**
   ```bash
   cd app
   pnpm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../services
   uv sync
   ```

4. **Start development servers**
   
   **Frontend (in app/ directory):**
   ```bash
   pnpm dev
   ```
   
   **Backend (in services/ directory):**
   ```bash
   uv run uvicorn main:app --reload --host 0.0.0.0 --port 5000
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/docs

### Production Build

```bash
# Build frontend
cd app
pnpm build

# The built files will be in app/dist/
```

## 🐳 Deployment Options

### E2B Platform
```bash
# Deploy to E2B sandbox environment
docker build -f e2b.Dockerfile -t solar-markdown-builder .
```

### Railway Platform
```bash
# Deploy to Railway with full nginx configuration
docker build -f railway.Dockerfile -t solar-markdown-builder .
```

### Docker Compose (Local)
```bash
# Full local environment with all services
docker-compose up --build
```

## 📁 Project Structure

```
├── app/                          # React Frontend Application
│   ├── src/                     # Source code
│   │   ├── components/          # React components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility libraries
│   │   ├── pages/              # Page components
│   │   └── styles/             # Styling files
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.ts          # Vite configuration
│   └── tailwind.config.js      # Tailwind CSS config
├── services/                    # Python FastAPI Backend
│   ├── api/                    # API routes and endpoints
│   ├── core/                   # Core business logic
│   ├── solar/                  # Solar-specific modules
│   ├── main.py                 # FastAPI application entry
│   └── pyproject.toml          # Python dependencies
├── logging-server/             # Centralized logging service
├── .github/                    # CI/CD workflows
├── e2b.Dockerfile             # E2B deployment configuration
├── railway.Dockerfile         # Railway deployment configuration
├── docker-compose.yml         # Local development environment
└── README.md                  # This file
```

## 🎯 Core Features

### Markdown Editor
- **Syntax Highlighting**: Full markdown syntax support
- **Live Preview**: Real-time rendering of markdown content
- **Split View**: Side-by-side editor and preview
- **Export Options**: HTML, PDF, and other formats

### Component System
- **Pre-built Components**: Headers, cards, buttons, forms
- **Custom Components**: Create and save reusable components
- **Drag & Drop**: Visual component placement
- **Responsive Design**: Mobile-first component library

### Theme Customization
- **Dark/Light Mode**: Automatic theme switching
- **Custom Themes**: Create and apply custom color schemes
- **Typography**: Advanced font and spacing controls
- **CSS Variables**: Dynamic theme customization

## 🔧 Configuration

### Environment Variables

**Frontend (.env in app/ directory):**
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_TITLE="Solar Markdown Builder"
```

**Backend (.env in services/ directory):**
```env
API_HOST=0.0.0.0
API_PORT=5000
DATABASE_URL=sqlite:///./solar_builder.db
LOG_LEVEL=info
```

## 📚 API Documentation

The backend provides a comprehensive REST API with automatic documentation:
- **Swagger UI**: `/docs`
- **ReDoc**: `/redoc`
- **OpenAPI JSON**: `/openapi.json`

### Key Endpoints
- `GET /api/health` - Health check
- `POST /api/markdown/render` - Render markdown to HTML
- `GET /api/templates` - Available templates
- `POST /api/export` - Export website

## 🧪 Testing

```bash
# Frontend tests
cd app
pnpm test

# Backend tests
cd services
uv run pytest
```

## 📈 Performance

- **Bundle Size**: ~149KB (gzipped: ~48KB)
- **Build Time**: ~4.5 seconds
- **Lighthouse Score**: 90+ performance
- **Core Web Vitals**: Optimized for speed

## 🔒 Security

- **Input Validation**: Comprehensive validation with Zod and Pydantic
- **XSS Protection**: Sanitized markdown rendering
- **CORS Configuration**: Secure cross-origin requests
- **Rate Limiting**: API endpoint protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Full documentation](docs/)
- **Issues**: [GitHub Issues](https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production/issues)
- **Discussions**: [GitHub Discussions](https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production/discussions)

## 🙏 Acknowledgments

- Built with ❤️ by the LEVERAGE AI team
- Powered by the Solar application framework
- Special thanks to all contributors and the open-source community

---

**⭐ Star this repository if you find it helpful!**

*Last updated: July 21, 2025*
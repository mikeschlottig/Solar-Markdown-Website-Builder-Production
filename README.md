# Solar Markdown Website Builder - Production

Advanced markdown-based website builder with real-time preview and deployment capabilities.

## 🌟 Features

- **Markdown-First Approach**: Write in markdown, get beautiful websites
- **Real-time Preview**: See changes instantly as you write
- **Advanced Editor**: Syntax highlighting, auto-completion, and live formatting
- **Template System**: Professional themes and layouts
- **Export Options**: Static sites, HTML, or deploy directly
- **Component Integration**: Rich UI components within markdown
- **SEO Optimized**: Built-in SEO tools and meta tag management

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Markdown Engine**: Advanced markdown parser with extensions
- **UI Components**: Radix UI, Shadcn/ui
- **Styling**: Tailwind CSS with custom themes
- **Animation**: Framer Motion
- **3D Support**: Three.js integration
- **Charts**: D3.js, Recharts
- **Forms**: React Hook Form, Zod validation

## 🚀 Quick Start

### Prerequisites
- Node.js 21+ and pnpm
- Python 3.11+ and uv (for backend)

### Installation

```bash
# Clone the repository
git clone https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production.git
cd Solar-Markdown-Website-Builder-Production

# Frontend setup
cd app
pnpm install
pnpm dev  # Starts on http://localhost:5173

# Backend setup (in new terminal)
cd services
uv sync
uv run uvicorn main:app --reload  # Starts on http://localhost:8000
```

## 📁 Project Structure

```
├── app/                    # React Frontend Application
│   ├── src/               # Source code
│   │   ├── components/    # UI components
│   │   ├── editor/        # Markdown editor components
│   │   ├── preview/       # Real-time preview
│   │   ├── themes/        # Website themes
│   │   └── utils/         # Utilities
│   └── package.json       # Frontend dependencies
├── services/              # Python FastAPI Backend
│   ├── api/               # API endpoints
│   ├── markdown/          # Markdown processing
│   └── export/            # Site generation
├── logging-server/        # Centralized logging
└── deployment/            # Deployment configurations
```

## ✨ Key Features

### Markdown Editor
- **Live Syntax Highlighting**: Real-time markdown syntax highlighting
- **Auto-completion**: Smart suggestions for markdown syntax
- **Split View**: Side-by-side editing and preview
- **Toolbar**: Quick access to common markdown elements

### Website Generation
- **Multiple Themes**: Professional, clean, and modern themes
- **Responsive Design**: Mobile-first, responsive websites
- **SEO Optimization**: Automatic meta tags, structured data
- **Performance**: Optimized static site generation

### Advanced Components
- **Charts & Graphs**: Embed interactive visualizations
- **Code Blocks**: Syntax highlighting for 100+ languages
- **Image Management**: Drag-and-drop image handling
- **Tables**: Rich table editing and formatting

## 🎨 Themes

Built-in professional themes:
- **Modern**: Clean, minimalist design
- **Tech**: Developer-focused theme
- **Business**: Professional corporate look
- **Blog**: Optimized for content creation
- **Portfolio**: Showcase your work

## 📤 Export Options

1. **Static Site**: Generate HTML/CSS/JS files
2. **ZIP Download**: Complete website package
3. **Git Integration**: Push directly to GitHub Pages
4. **CDN Deploy**: Deploy to Netlify, Vercel, or Cloudflare

## 🛠️ Development

### Build for Production

```bash
cd app
pnpm build:prod
```

### Run Tests

```bash
pnpm test                # Unit tests
pnpm test:e2e           # End-to-end tests
pnpm lint               # Code linting
```

## 🚀 Deployment

### E2B Platform
```bash
docker build -f e2b.Dockerfile -t solar-markdown-builder .
e2b deploy solar-markdown-builder
```

### Railway
```bash
railway login
railway link
railway up
```

### Docker
```bash
docker-compose up --build
```

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [API Documentation](services/README.md)
- [Theme Development](docs/themes.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**LEVERAGE AI** - Advanced Markdown Website Builder  
**Version:** 1.0.163 - Production Ready
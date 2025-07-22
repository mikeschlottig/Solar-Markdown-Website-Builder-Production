# 🤝 Contributing to Solar Markdown Website Builder

Thank you for your interest in contributing to the Solar Markdown Website Builder! This guide will help you get started with contributing to this open-source project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Deployment](#deployment)

## 📜 Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+**
- **Python 3.11+**
- **Git**
- **pnpm** (recommended) or npm
- **uv** (Python package manager)
- **Docker** (optional, for containerized development)

### Quick Start

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Solar-Markdown-Website-Builder-Production.git
   cd Solar-Markdown-Website-Builder-Production
   ```

2. **Set up development environment**
   ```bash
   # Frontend setup
   cd app
   pnpm install
   pnpm dev
   
   # Backend setup (in new terminal)
   cd services
   uv sync
   uv run uvicorn main:app --reload --host 0.0.0.0 --port 5000
   ```

3. **Verify setup**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/docs

## 🏗️ Development Setup

### Environment Configuration

**Frontend (.env in app/ directory):**
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_TITLE="Solar Markdown Builder - Dev"
VITE_ENABLE_DEBUG=true
```

**Backend (.env in services/ directory):**
```env
API_HOST=0.0.0.0
API_PORT=5000
LOG_LEVEL=debug
DATABASE_URL=sqlite:///./dev_solar_builder.db
```

### Docker Development (Optional)

```bash
# Start all services with Docker Compose
docker-compose up --build

# For development with hot reload
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

## 📁 Project Structure

```
├── app/                          # React Frontend
│   ├── src/                     # Source code
│   │   ├── components/          # React components
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilities and libraries
│   │   ├── auth/               # Authentication components
│   │   └── types/              # TypeScript type definitions
│   ├── public/                 # Static assets
│   └── package.json            # Frontend dependencies
├── services/                    # Python Backend
│   ├── api/                    # FastAPI routes and endpoints
│   ├── core/                   # Core business logic
│   ├── solar/                  # Solar-specific modules
│   └── main.py                 # Application entry point
├── .github/                    # CI/CD workflows
└── docs/                       # Documentation
```

## 🔄 Contribution Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/amazing-new-feature
# or
git checkout -b fix/bug-description
```

### Branch Naming Convention

- **Features:** `feature/description-of-feature`
- **Bug fixes:** `fix/description-of-bug`
- **Documentation:** `docs/what-you-are-documenting`
- **Refactoring:** `refactor/what-you-are-refactoring`

### 2. Make Your Changes

- Follow our [coding standards](#coding-standards)
- Write tests for new functionality
- Update documentation as needed
- Ensure your code passes all tests

### 3. Commit Your Changes

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add real-time markdown preview"
git commit -m "fix: resolve theme switching bug"
git commit -m "docs: update deployment guide"
```

**Commit Types:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 4. Push and Create Pull Request

```bash
git push origin feature/amazing-new-feature
```

Then create a pull request on GitHub with:
- Clear title and description
- Link to any related issues
- Screenshots for UI changes
- Test instructions

## 💻 Coding Standards

### Frontend (React/TypeScript)

- Use **TypeScript** for all new code
- Follow **React Hooks** patterns
- Use **Tailwind CSS** for styling
- Prefer **functional components** over class components
- Use **shadcn/ui** components when possible

**Example component structure:**
```typescript
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ComponentProps {
  title: string
  onAction: () => void
}

export function MyComponent({ title, onAction }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div className="p-4 rounded-lg border">
      <h2 className="text-lg font-semibold">{title}</h2>
      <Button onClick={onAction} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Action'}
      </Button>
    </div>
  )
}
```

### Backend (Python/FastAPI)

- Use **Python 3.11+** features
- Follow **PEP 8** style guide
- Use **type hints** for all functions
- Use **Pydantic** models for data validation
- Follow **async/await** patterns

**Example API endpoint:**
```python
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class MarkdownRequest(BaseModel):
    content: str
    options: dict = {}

@router.post("/render")
async def render_markdown(request: MarkdownRequest) -> dict:
    \"\"\"Render markdown content to HTML.\"\"\"
    try:
        html = await process_markdown(request.content, request.options)
        return {"html": html, "success": True}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
```

### Code Quality Tools

**Frontend:**
```bash
cd app
pnpm lint          # ESLint
pnpm type-check    # TypeScript
pnpm format        # Prettier
```

**Backend:**
```bash
cd services
uv run ruff check  # Linting
uv run mypy .      # Type checking
uv run black .     # Code formatting
```

## 🧪 Testing Guidelines

### Frontend Tests

```bash
cd app
pnpm test          # Run all tests
pnpm test:watch    # Watch mode
pnpm test:coverage # Coverage report
```

**Test structure:**
```typescript
import { render, screen } from '@testing-library/react'
import { MyComponent } from './MyComponent'

describe('MyComponent', () => {
  it('should render title correctly', () => {
    render(<MyComponent title="Test Title" onAction={() => {}} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})
```

### Backend Tests

```bash
cd services
uv run pytest              # Run all tests
uv run pytest --cov=api    # With coverage
uv run pytest -v           # Verbose output
```

**Test structure:**
```python
import pytest
from fastapi.testclient import TestClient
from api.routes import app

client = TestClient(app)

def test_render_markdown():
    response = client.post(
        "/render",
        json={"content": "# Hello World"}
    )
    assert response.status_code == 200
    assert "html" in response.json()
```

### Integration Tests

Run the full test suite:
```bash
# Frontend and backend tests
pnpm test:full

# Docker-based testing
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

## 📚 Documentation

### Code Documentation

- **JSDoc** for TypeScript functions
- **Docstrings** for Python functions
- **README** updates for new features
- **API documentation** for new endpoints

### Adding Documentation

1. Update relevant README sections
2. Add JSDoc/docstring comments
3. Update API documentation
4. Add examples where helpful

## 🚀 Deployment

### Testing Deployments

Before submitting, test your changes with:

```bash
# Build and test locally
cd app && pnpm build
cd services && uv run uvicorn main:app

# Test Docker builds
docker build -f e2b.Dockerfile -t test-e2b .
docker build -f railway.Dockerfile -t test-railway .
```

### Deployment Process

1. **Development** → Push to feature branch
2. **Testing** → Create PR to `develop`
3. **Staging** → Merge to `develop` (auto-deploy to staging)
4. **Production** → Merge to `main` (auto-deploy to production)

## 🐛 Reporting Issues

When reporting issues, please include:

- **Environment** (OS, Node.js version, Python version)
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (for UI issues)
- **Console logs** (if applicable)

## ❓ Getting Help

- **Discord:** [Solar Community](https://discord.gg/solar)
- **Issues:** [GitHub Issues](https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production/issues)
- **Discussions:** [GitHub Discussions](https://github.com/mikeschlottig/Solar-Markdown-Website-Builder-Production/discussions)

## 🏆 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **Release notes** for major features

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Solar Markdown Website Builder! 🌟**

*Your contributions help make web development more accessible and enjoyable for everyone.*
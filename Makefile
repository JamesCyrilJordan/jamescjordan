# Makefile for [PROJECT_NAME]
# Run tasks for frontend and backend

.PHONY: help
help: ## Show this help message
	@echo "Available targets:"
	@echo ""
	@echo "Development:"
	@echo "  make dev-frontend    - Run frontend dev server"
	@echo "  make dev-backend     - Run backend dev server"
	@echo ""
	@echo "Testing:"
	@echo "  make test            - Run tests for frontend and backend"
	@echo "  make test-frontend   - Run frontend tests"
	@echo "  make test-backend    - Run backend tests"
	@echo ""
	@echo "Linting:"
	@echo "  make lint            - Lint frontend and backend"
	@echo "  make lint-frontend   - Lint frontend"
	@echo "  make lint-backend    - Lint backend"
	@echo ""
	@echo "Building:"
	@echo "  make build           - Build frontend and backend"
	@echo "  make build-frontend  - Build frontend"
	@echo ""
	@echo "Installation:"
	@echo "  make install         - Install dependencies for frontend and backend"
	@echo "  make install-frontend - Install frontend dependencies"
	@echo "  make install-backend  - Install backend dependencies"

# Development targets
.PHONY: dev-frontend dev-backend
dev-frontend: ## Run frontend dev server
	@echo "🚀 Starting frontend dev server..."
	@cd frontend && npm run dev

dev-backend: ## Run backend dev server
	@echo "🚀 Starting backend dev server..."
	@cd backend && npm run dev

# Testing targets
.PHONY: test test-frontend test-backend
test: test-frontend test-backend ## Run tests for both frontend and backend

test-frontend: ## Run frontend tests
	@echo "🧪 Running frontend tests..."
	@cd frontend && npm test

test-backend: ## Run backend tests
	@echo "🧪 Running backend tests..."
	@cd backend && if grep -q '"test"' package.json; then \
		npm test; \
	else \
		echo "⚠️  No test script found in backend/package.json"; \
	fi

# Linting targets
.PHONY: lint lint-frontend lint-backend
lint: lint-frontend lint-backend ## Lint both frontend and backend

lint-frontend: ## Lint frontend
	@echo "🔍 Linting frontend..."
	@cd frontend && if grep -q '"lint"' package.json; then \
		npm run lint; \
	else \
		echo "⚠️  No lint script found in frontend/package.json"; \
	fi

lint-backend: ## Lint backend
	@echo "🔍 Linting backend..."
	@cd backend && if grep -q '"lint"' package.json; then \
		npm run lint; \
	else \
		echo "⚠️  No lint script found in backend/package.json"; \
	fi

# Building targets
.PHONY: build build-frontend
build: build-frontend ## Build frontend and backend

build-frontend: ## Build frontend
	@echo "📦 Building frontend..."
	@cd frontend && npm run build

# Installation targets
.PHONY: install install-frontend install-backend
install: install-frontend install-backend ## Install dependencies for both frontend and backend

install-frontend: ## Install frontend dependencies
	@echo "📥 Installing frontend dependencies..."
	@cd frontend && npm install

install-backend: ## Install backend dependencies
	@echo "📥 Installing backend dependencies..."
	@cd backend && npm install

# Clean targets
.PHONY: clean clean-frontend clean-backend
clean: clean-frontend clean-backend ## Clean build artifacts and dependencies

clean-frontend: ## Clean frontend build artifacts
	@echo "🧹 Cleaning frontend..."
	@cd frontend && rm -rf node_modules dist build .vite coverage

clean-backend: ## Clean backend build artifacts
	@echo "🧹 Cleaning backend..."
	@cd backend && rm -rf node_modules dist build coverage
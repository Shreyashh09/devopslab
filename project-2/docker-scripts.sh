#!/bin/bash

# Angular Docker Application Management Script
# This script provides common Docker operations for the Angular application

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    print_success "Docker is running"
}

# Function to check if Docker Compose is available
check_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose and try again."
        exit 1
    fi
    print_success "Docker Compose is available"
}

# Function to start development environment
start_dev() {
    print_status "Starting development environment..."
    docker-compose -f docker-compose.dev.yml up --build
}

# Function to start development environment in background
start_dev_detached() {
    print_status "Starting development environment in background..."
    docker-compose -f docker-compose.dev.yml up --build -d
    print_success "Development environment started. Access at http://localhost:4200"
}

# Function to start production environment
start_prod() {
    print_status "Starting production environment..."
    docker-compose -f docker-compose.prod.yml up --build
}

# Function to start production environment in background
start_prod_detached() {
    print_status "Starting production environment in background..."
    docker-compose -f docker-compose.prod.yml up --build -d
    print_success "Production environment started. Access at http://localhost"
}

# Function to stop development environment
stop_dev() {
    print_status "Stopping development environment..."
    docker-compose -f docker-compose.dev.yml down
    print_success "Development environment stopped"
}

# Function to stop production environment
stop_prod() {
    print_status "Stopping production environment..."
    docker-compose -f docker-compose.prod.yml down
    print_success "Production environment stopped"
}

# Function to stop all environments
stop_all() {
    print_status "Stopping all environments..."
    docker-compose -f docker-compose.dev.yml down
    docker-compose -f docker-compose.prod.yml down
    print_success "All environments stopped"
}

# Function to view logs
view_logs() {
    local env=${1:-dev}
    if [ "$env" = "prod" ]; then
        print_status "Viewing production logs..."
        docker-compose -f docker-compose.prod.yml logs -f
    else
        print_status "Viewing development logs..."
        docker-compose -f docker-compose.dev.yml logs -f
    fi
}

# Function to clean up Docker resources
cleanup() {
    print_warning "This will remove all containers, images, and volumes. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_status "Cleaning up Docker resources..."
        docker system prune -a --volumes -f
        print_success "Cleanup completed"
    else
        print_status "Cleanup cancelled"
    fi
}

# Function to show status
show_status() {
    print_status "Docker containers status:"
    docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    
    echo ""
    print_status "Docker images:"
    docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
}

# Function to rebuild images
rebuild() {
    local env=${1:-all}
    if [ "$env" = "dev" ]; then
        print_status "Rebuilding development image..."
        docker-compose -f docker-compose.dev.yml build --no-cache
        print_success "Development image rebuilt"
    elif [ "$env" = "prod" ]; then
        print_status "Rebuilding production image..."
        docker-compose -f docker-compose.prod.yml build --no-cache
        print_success "Production image rebuilt"
    else
        print_status "Rebuilding all images..."
        docker-compose -f docker-compose.dev.yml build --no-cache
        docker-compose -f docker-compose.prod.yml build --no-cache
        print_success "All images rebuilt"
    fi
}

# Function to show help
show_help() {
    echo "Angular Docker Application Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  dev              Start development environment"
    echo "  dev-d            Start development environment in background"
    echo "  prod             Start production environment"
    echo "  prod-d           Start production environment in background"
    echo "  stop-dev         Stop development environment"
    echo "  stop-prod        Stop production environment"
    echo "  stop-all         Stop all environments"
    echo "  logs [env]       View logs (env: dev or prod, default: dev)"
    echo "  status           Show Docker containers and images status"
    echo "  rebuild [env]    Rebuild images (env: dev, prod, or all, default: all)"
    echo "  cleanup          Clean up Docker resources"
    echo "  help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 dev           # Start development environment"
    echo "  $0 prod-d        # Start production environment in background"
    echo "  $0 logs prod     # View production logs"
    echo "  $0 rebuild dev   # Rebuild development image"
}

# Main script logic
main() {
    # Check prerequisites
    check_docker
    check_docker_compose
    
    case "${1:-help}" in
        "dev")
            start_dev
            ;;
        "dev-d")
            start_dev_detached
            ;;
        "prod")
            start_prod
            ;;
        "prod-d")
            start_prod_detached
            ;;
        "stop-dev")
            stop_dev
            ;;
        "stop-prod")
            stop_prod
            ;;
        "stop-all")
            stop_all
            ;;
        "logs")
            view_logs "$2"
            ;;
        "status")
            show_status
            ;;
        "rebuild")
            rebuild "$2"
            ;;
        "cleanup")
            cleanup
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# Run main function with all arguments
main "$@"

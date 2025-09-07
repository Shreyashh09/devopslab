import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="nav-title">Angular Docker App</h1>
        <div class="nav-links">
          <a routerLink="/" class="nav-link">Home</a>
          <a routerLink="/about" class="nav-link">About</a>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    
    <footer class="footer">
      <p>&copy; 2024 Angular Docker Application</p>
    </footer>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }
    
    .nav-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
    }
    
    .nav-link:hover {
      opacity: 0.8;
    }
    
    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      min-height: calc(100vh - 200px);
    }
    
    .footer {
      background: #f8f9fa;
      text-align: center;
      padding: 2rem;
      color: #6c757d;
      border-top: 1px solid #dee2e6;
    }
  `]
})
export class AppComponent {
  title = 'angular-docker-app';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1 class="hero-title">Welcome to Angular Docker App</h1>
        <p class="hero-subtitle">A modern Angular application deployed with Docker</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
      
      <div class="features-section">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Fast Development</h3>
            <p>Built with Angular 17 and modern tooling for rapid development</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🐳</div>
            <h3>Docker Ready</h3>
            <p>Containerized for easy deployment and scaling</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Modern UI that works on all devices</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
    }
    
    .hero-section {
      padding: 4rem 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 1rem;
      margin-bottom: 3rem;
    }
    
    .hero-title {
      font-size: 3rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: #7f8c8d;
      margin-bottom: 2rem;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .btn-secondary {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }
    
    .features-section {
      padding: 2rem 0;
    }
    
    .section-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 2rem;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .feature-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      color: #7f8c8d;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}

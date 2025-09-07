import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-header">
        <h1 class="about-title">About This Project</h1>
        <p class="about-subtitle">Learn more about our Angular Docker application</p>
      </div>
      
      <div class="about-content">
        <div class="about-section">
          <h2>Project Overview</h2>
          <p>
            This is a modern Angular 17 application designed to demonstrate best practices 
            for containerizing and deploying Angular applications using Docker. The project 
            showcases a complete development workflow from local development to production deployment.
          </p>
        </div>
        
        <div class="about-section">
          <h2>Technology Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h3>Frontend</h3>
              <ul>
                <li>Angular 17</li>
                <li>TypeScript</li>
                <li>CSS3 with modern features</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <div class="tech-item">
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Multi-stage builds</li>
                <li>Nginx for production</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2>Features</h2>
          <ul class="features-list">
            <li>🚀 Modern Angular 17 standalone components</li>
            <li>🐳 Docker containerization for easy deployment</li>
            <li>📱 Responsive and mobile-friendly design</li>
            <li>⚡ Fast development with hot reload</li>
            <li>🔧 Production-ready build configuration</li>
            <li>📦 Optimized bundle sizes</li>
          </ul>
        </div>
        
        <div class="about-section">
          <h2>Getting Started</h2>
          <div class="code-block">
            <h4>Development Mode:</h4>
            <pre><code>docker-compose -f docker-compose.dev.yml up</code></pre>
            
            <h4>Production Mode:</h4>
            <pre><code>docker-compose -f docker-compose.prod.yml up</code></pre>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .about-header {
      text-align: center;
      padding: 2rem 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 1rem;
      margin-bottom: 2rem;
    }
    
    .about-title {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .about-subtitle {
      font-size: 1.25rem;
      color: #7f8c8d;
    }
    
    .about-content {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .about-section {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #ecf0f1;
    }
    
    .about-section:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
    .about-section h2 {
      color: #2c3e50;
      font-size: 1.75rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    .about-section p {
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 1rem;
    }
    
    .tech-item {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-left: 4px solid #667eea;
    }
    
    .tech-item h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .tech-item ul {
      list-style: none;
      padding: 0;
    }
    
    .tech-item li {
      color: #34495e;
      padding: 0.25rem 0;
      border-bottom: 1px solid #e9ecef;
    }
    
    .tech-item li:last-child {
      border-bottom: none;
    }
    
    .features-list {
      list-style: none;
      padding: 0;
    }
    
    .features-list li {
      color: #34495e;
      padding: 0.5rem 0;
      font-size: 1.1rem;
    }
    
    .code-block {
      background: #2c3e50;
      color: #ecf0f1;
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
    }
    
    .code-block h4 {
      color: #3498db;
      margin-bottom: 0.5rem;
    }
    
    .code-block pre {
      background: #34495e;
      padding: 1rem;
      border-radius: 0.25rem;
      overflow-x: auto;
    }
    
    .code-block code {
      color: #f39c12;
      font-family: 'Courier New', monospace;
    }
    
    @media (max-width: 768px) {
      .about-title {
        font-size: 2rem;
      }
      
      .tech-grid {
        grid-template-columns: 1fr;
      }
      
      .about-content {
        padding: 1rem;
      }
    }
  `]
})
export class AboutComponent {}

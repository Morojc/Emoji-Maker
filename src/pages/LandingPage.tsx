import React, { useState, useEffect, useRef } from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const history = useHistory();
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleTryForFree = () => {
    setIsAnimating(true);
    setTimeout(() => {
      history.push('/signup');
    }, 1500);
  };

  useEffect(() => {
    if (isAnimating && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];
      const particleCount = 100;

      const colorPalette = [
        'rgba(100, 255, 218, 0.4)',  // Accent color (more transparent)
        'rgba(129, 161, 193, 0.3)',  // Light blue (more transparent)
        'rgba(143, 188, 187, 0.3)',  // Teal (more transparent)
        'rgba(235, 203, 139, 0.2)',  // Soft yellow (more transparent)
        'rgba(191, 97, 106, 0.2)'    // Soft red (more transparent)
      ];

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 1;
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        }

        draw() {
          if (ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      function animate() {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
        requestAnimationFrame(animate);
      }

      animate();
    }
  }, [isAnimating]);

  return (
    <IonPage className="landing-page">
      <IonContent fullscreen>
        <div className="content-container">
          <header>
            <div className="logo">
              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24" fill="#ffc107" opacity="0.2" />
                <circle cx="25" cy="25" r="19" fill="#ffc107" opacity="0.4" />
                <circle cx="25" cy="25" r="5" fill="#ffffff" />
                <circle cx="25" cy="25" r="2.5" fill="#ffc107" />
                <g id="orbits">
                  <circle cx="25" cy="25" r="15" fill="none" stroke="#ffc107" strokeWidth="0.5" />
                  <circle cx="25" cy="25" r="11" fill="none" stroke="#ffc107" strokeWidth="0.5" />
                </g>
                <g id="dots">
                  <circle cx="40" cy="25" r="1" fill="#ffc107" />
                  <circle cx="36" cy="36" r="1" fill="#ffc107" />
                  <circle cx="25" cy="40" r="1" fill="#ffc107" />
                  <circle cx="14" cy="36" r="1" fill="#ffc107" />
                  <circle cx="10" cy="25" r="1" fill="#ffc107" />
                </g>
              </svg>
              <span className="logo-text">Nexus</span>
              <span className="logo-ai">AI</span>
            </div>
          </header>
          <main>
            <div className="top-content">
              <div className="trial-text">FREE 30 DAYS TRIAL</div>
              <h1 className="main-heading">
                <span className="word">Dream</span>{' '}
                <span className="word">It,</span>{' '}
                <span className="word">AI</span>
                <span className="word highlight">Builds It</span>
              </h1>
              <p className="description">
                Transform ideas into reality with our cutting-edge AI solutions.
              </p>
            </div>
            <div className="button-container">
              <IonButton className="try-button" expand="block" onClick={handleTryForFree}>
                <span className="button-text">Try for free</span>
                <span className="button-icon">→</span>
              </IonButton>
              <IonButton className="how-it-works-button" expand="block" fill="outline">
                How it works
              </IonButton>
            </div>
          </main>
          <footer>
            <p className="trust-text">
              Trusted by innovators at the world's leading tech companies
            </p>
          </footer>
        </div>
        {isAnimating && (
          <div className="swarm-intelligence-animation" style={{ opacity: 0.4 }}>
            <canvas ref={canvasRef}></canvas>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;

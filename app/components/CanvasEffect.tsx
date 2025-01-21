'use client'

import { useEffect, useRef } from "react";

const CanvasEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const targetPosition = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const colors = ["#ff6347", "#4682b4", "#32cd32", "#ffd700"];

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      velocityX: number;
      velocityY: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.velocityX = (Math.random() - 0.5) * 3;
        this.velocityY = (Math.random() - 0.5) * 3;
      }

      update() {
        if (!canvas) return;
        const target = targetPosition.current;
        if (target) {
          // Calculate direction toward the target position
          const dx = target.x - this.x;
          const dy = target.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const speed = 0.5;

          // Move toward the target
          this.velocityX += (dx / distance) * speed;
          this.velocityY += (dy / distance) * speed;

          // Limit velocity to prevent excessive speed
          this.velocityX *= 0.95;
          this.velocityY *= 0.95;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;

        // Bounce particles off edges
        if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      if (!canvas) return;
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseOver = (e: Event) => {
      // Update target position to the hovered element's center
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      targetPosition.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    const handleMouseOut = () => {
      // Reset target position when the mouse leaves the element
      targetPosition.current = null;
    };

    // Attach mouse events to all hoverable elements
    const hoverableElements = document.querySelectorAll("[data-hover-target]");
    hoverableElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });

    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      // Cleanup event listeners
      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasEffect;

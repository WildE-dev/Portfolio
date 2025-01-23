"use client";

import { useEffect, useRef } from "react";

const BlobGuy: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gravity = 0.5;
  const drag = 0.95;
  const friction = 0.6; // To reduce energy after bouncing
  const mouse = { x: 0, y: 0, isDown: false };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let windowWidth = canvas.width = window.innerWidth;
    let windowHeight = canvas.height = window.innerHeight;

    const elementsToInteractWith: HTMLElement[] = [];
    const colors = ["#ff7f50", "#00bfff", "#32cd32", "#ffa500"];
    const blobColor = colors[Math.floor(Math.random() * colors.length)];

    const stiffness = 0.3; // Spring stiffness
    const damping = 0.2; // Damping to stabilize movement
    const nodes: Node[] = [];
    const nodeCount = 20; // Number of points for the blob shape
    const blobRadius = 100;

    const jumpTime = 5;
    let jumpTimer = 0;

    let lastTime = 0;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      dists: number[];

      constructor(angle: number) {
        this.x = Math.cos(angle) * blobRadius + windowWidth / 2;
        this.y = Math.sin(angle) * blobRadius + windowHeight / 2;
        this.vx = 0;
        this.vy = 0;
        this.dists = [];
      }

      update() {
        let fx = 0;
        let fy = 0;

        for (let i = 0; i < nodeCount; i++) {
          // Apply spring forces towards origin
          const dx = nodes[i].x - this.x;
          const dy = nodes[i].y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          const force = stiffness * (distance - this.dists[i]);

          if (distance == 0 || isNaN(distance)) {
            distance = 0.000001;
          }

          fx += (dx / distance) * force;
          fy += (dy / distance) * force;
        }

        fx /= nodeCount;
        fy /= nodeCount;

        // Apply forces with damping
        this.vx += fx - fx * damping;
        this.vy += gravity + fy - fy * damping;

        this.vx *= drag;
        this.vy *= drag;

        const mx = this.x - mouse.x;
        const my = this.y - mouse.y;

        if (jumpTimer > jumpTime) {
          //this.vx -= Math.min(mx * 0.05, 25);
          //this.vy -= Math.min(my * 0.1, 25);
        }

        // Repel from mouse when pressed
        if (mouse.isDown) {
          const mouseDistance = Math.sqrt(mx * mx + my * my);
          if (mouseDistance < 150) {
            this.vx -= (mx / mouseDistance) * 5;
            this.vy -= (my / mouseDistance) * 5;
          }
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Apply friction and prevent moving off canvas
        if (this.x > windowWidth) {
          this.x = windowWidth;
          this.vx *= -friction;
          this.vy *= friction;
        }
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -friction;
          this.vy *= friction;
        }
        if (this.y > windowHeight) {
          this.y = windowHeight;
          this.vy *= -friction;
          this.vx *= friction;
        }
        if (this.y < 0) {
          this.y = 0;
          this.vy *= -friction;
          this.vx *= friction;
        }
      }
    }

    // Initialize the blob with nodeCount nodes
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      nodes.push(new Node(angle));
    }

    for (let i = 0; i < nodeCount; i++) {
      const node1 = nodes[i];
      let dists: number[] = [];
      for (let j = 0; j < nodeCount; j++) {
        const node2 = nodes[j];
        const xDiff = node1.x - node2.x;
        const yDiff = node1.y - node2.y;
        const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        dists.push(dist);
      }
      node1.dists = dists;
    }

    function drawBlob() {
      if (!ctx) return;

      ctx.fillStyle = blobColor;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);

      let centerX = 0;
      let centerY = 0;

      for (let i = 0; i < nodes.length; i++) {
        // Get the current and next node
        const currentNode = nodes[i];
        const nextNode = nodes[(i + 1) % nodes.length]; // Wrap around to the first node

        centerX += currentNode.x;
        centerY += currentNode.y;

        // Calculate control point as midpoint between current and next node
        const controlX = (currentNode.x + nextNode.x) / 2;
        const controlY = (currentNode.y + nextNode.y) / 2;

        // Draw a quadratic curve to the control point
        ctx.quadraticCurveTo(currentNode.x, currentNode.y, controlX, controlY);
      }

      centerX /= nodeCount;
      centerY /= nodeCount;

      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#000000";
      ctx.beginPath();

      ctx.moveTo((nodes[0].x + centerX) / 2, (nodes[0].y + centerY) / 2);
      ctx.lineTo((nodes[5].x + centerX) / 2, (nodes[5].y + centerY) / 2);
      ctx.lineTo((nodes[10].x + centerX) / 2, (nodes[10].y + centerY) / 2);

      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.arc((nodes[13].x + centerX) / 2, (nodes[14].y + centerY) / 2, 15, 0, Math.PI * 2);
      ctx.arc((nodes[17].x + centerX) / 2, (nodes[16].y + centerY) / 2, 15, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
      
    function animate(timestamp: DOMHighResTimeStamp) {
      if (!ctx) return;

      const dt = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      jumpTimer += dt;

      ctx.clearRect(0, 0, windowWidth, windowHeight);

      nodes.forEach((node) => {
        node.update();
      });

      if (jumpTimer > jumpTime) {
        jumpTimer = 0;
      }

      drawBlob();

      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      windowWidth = canvas.width = window.innerWidth;
      windowHeight = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      mouse.isDown = true;
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      mouse.isDown = false;
    };

    const findInteractiveElements = () => {
      elementsToInteractWith.length = 0; // Clear existing elements
      const interactiveElements = document.querySelectorAll("[data-blob-target]");
      interactiveElements.forEach((el) => elementsToInteractWith.push(el as HTMLElement));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    findInteractiveElements();

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ pointerEvents: "none", position: "fixed", top: 0, left: 0, zIndex: 9999 }} />;
};

export default BlobGuy;

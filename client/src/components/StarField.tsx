/*
 * STELLAR BLACK — StarField Component
 * Animated canvas-based star field with mouse parallax
 * Deep space aesthetic: tiny white/blue stars on #050810 background
 */
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleOffset: number;
  color: string;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      starsRef.current = Array.from({ length: count }, () => {
        const colors = ["#ffffff", "#e8f0ff", "#C8A96E", "#4F8EF7", "#ffffff", "#ffffff"];
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.2,
          opacity: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.3 + 0.05,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      };
    };

    let time = 0;
    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(time * star.speed * 3 + star.twinkleOffset);
        const opacity = star.opacity * (0.6 + 0.4 * twinkle);
        const parallaxX = mouseRef.current.x * star.speed * 0.5;
        const parallaxY = mouseRef.current.y * star.speed * 0.5;

        ctx.beginPath();
        ctx.arc(
          star.x + parallaxX,
          star.y + parallaxY,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(
            star.x + parallaxX,
            star.y + parallaxY,
            star.size * 3,
            0,
            Math.PI * 2
          );
          const gradient = ctx.createRadialGradient(
            star.x + parallaxX, star.y + parallaxY, 0,
            star.x + parallaxX, star.y + parallaxY, star.size * 3
          );
          gradient.addColorStop(0, star.color + "40");
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.globalAlpha = opacity * 0.5;
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.9 }}
    />
  );
}

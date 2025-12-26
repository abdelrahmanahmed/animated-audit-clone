import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseY: number;
  speed: number;
  radius: number;
  color: string;
  opacity: number;
  phase: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const colors = [
      "rgba(0, 212, 212, ", // Cyan
      "rgba(0, 188, 212, ", // Teal
      "rgba(147, 51, 234, ", // Purple
      "rgba(219, 39, 119, ", // Pink/Magenta
      "rgba(59, 130, 246, ", // Blue
    ];

    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 3000);

      for (let i = 0; i < particleCount; i++) {
        const baseY = canvas.height * 0.4 + Math.random() * canvas.height * 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: baseY,
          baseY: baseY,
          speed: 0.2 + Math.random() * 0.5,
          radius: 0.5 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.3 + Math.random() * 0.7,
          phase: Math.random() * Math.PI * 2,
        });
      }

      particlesRef.current = particles;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background overlay
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(15, 23, 42, 0)");
      gradient.addColorStop(0.3, "rgba(15, 23, 42, 0)");
      gradient.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.005;

      particlesRef.current.forEach((particle) => {
        // Wave motion
        const waveOffset = Math.sin(
          timeRef.current * 2 + particle.phase + particle.x * 0.002
        ) * 40;
        
        const waveOffset2 = Math.cos(
          timeRef.current * 1.5 + particle.phase * 0.5 + particle.x * 0.003
        ) * 25;

        particle.y = particle.baseY + waveOffset + waveOffset2;

        // Horizontal drift
        particle.x += particle.speed * 0.3;
        if (particle.x > canvas.width + 10) {
          particle.x = -10;
          particle.baseY = canvas.height * 0.4 + Math.random() * canvas.height * 0.5;
        }

        // Draw particle with glow
        const glowSize = particle.radius * 4;
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        );
        glow.addColorStop(0, particle.color + particle.opacity + ")");
        glow.addColorStop(0.4, particle.color + particle.opacity * 0.3 + ")");
        glow.addColorStop(1, particle.color + "0)");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.opacity + ")";
        ctx.fill();
      });

      // Draw flowing light beams
      drawLightBeams(ctx, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const drawLightBeams = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) => {
      const time = timeRef.current;

      // Cyan beam
      ctx.beginPath();
      ctx.moveTo(0, height * 0.5);
      for (let x = 0; x <= width; x += 5) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.003 + time * 2) * 50 +
          Math.cos(x * 0.005 + time * 1.5) * 30;
        ctx.lineTo(x, y);
      }
      const cyanGradient = ctx.createLinearGradient(0, height * 0.4, 0, height * 0.6);
      cyanGradient.addColorStop(0, "rgba(0, 212, 212, 0)");
      cyanGradient.addColorStop(0.5, "rgba(0, 212, 212, 0.15)");
      cyanGradient.addColorStop(1, "rgba(0, 212, 212, 0)");
      ctx.strokeStyle = cyanGradient;
      ctx.lineWidth = 60;
      ctx.stroke();

      // Purple/magenta beam
      ctx.beginPath();
      ctx.moveTo(0, height * 0.45);
      for (let x = 0; x <= width; x += 5) {
        const y =
          height * 0.45 +
          Math.sin(x * 0.004 + time * 1.8 + 1) * 40 +
          Math.cos(x * 0.006 + time * 1.2) * 35;
        ctx.lineTo(x, y);
      }
      const purpleGradient = ctx.createLinearGradient(0, height * 0.35, 0, height * 0.55);
      purpleGradient.addColorStop(0, "rgba(147, 51, 234, 0)");
      purpleGradient.addColorStop(0.5, "rgba(147, 51, 234, 0.1)");
      purpleGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
      ctx.strokeStyle = purpleGradient;
      ctx.lineWidth = 50;
      ctx.stroke();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "transparent" }}
      />
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
    </>
  );
};

export default AnimatedBackground;

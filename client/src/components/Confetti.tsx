import { useEffect, useState } from "react";

/**
 * Componente de confete dourado animado.
 * Gera partículas que caem da parte superior da tela por alguns segundos.
 */
interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  shape: "circle" | "square" | "star";
}

const colors = [
  "oklch(0.75 0.18 55)",
  "oklch(0.70 0.15 40)",
  "oklch(0.80 0.12 60)",
  "oklch(0.65 0.14 30)",
  "oklch(0.85 0.10 65)",
];

const shapes: Particle["shape"][] = ["circle", "square", "star"];

export default function Confetti({ count = 60, active = true }: { count?: number; active?: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(active);

  useEffect(() => {
    if (!active) return;

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 3,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, [active, count]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        >
          {p.shape === "circle" && (
            <div
              className="w-full h-full rounded-full"
              style={{ background: p.color }}
            />
          )}
          {p.shape === "square" && (
            <div
              className="w-full h-full"
              style={{ background: p.color, transform: "rotate(15deg)" }}
            />
          )}
          {p.shape === "star" && (
            <div
              className="w-full h-full"
              style={{
                background: p.color,
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

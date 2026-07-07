import { useReveal } from "@/hooks/useReveal";

interface PolaroidPhotoProps {
  src: string;
  caption?: string;
  rotation?: number;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-40 sm:w-48",
  md: "w-52 sm:w-64",
  lg: "w-64 sm:w-80",
};

/**
 * Card de foto estilo polaroid com moldura branca,
 * sombra suave, rotação leve e legenda manuscrita.
 * Revela-se suavemente ao entrar na viewport.
 */
export default function PolaroidPhoto({
  src,
  caption,
  rotation = 0,
  delay = 0,
  size = "md",
}: PolaroidPhotoProps) {
  const [ref, visible] = useReveal<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`photo-card ${sizeClasses[size]} bg-white p-3 pb-12 shadow-lg rounded-sm relative cursor-pointer`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: visible ? 1 : 0,
        transition: `opacity 700ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform 700ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        transformOrigin: "center center",
        ...(visible ? {} : { transform: `rotate(${rotation}deg) translateY(40px)` }),
      }}
    >
      <div className="overflow-hidden rounded-sm bg-muted aspect-[3/4]">
        <img
          src={src}
          alt={caption || "Foto do Henrique"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {caption && (
        <p
          className="absolute bottom-3 left-0 right-0 text-center text-sm text-foreground/70 font-body"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

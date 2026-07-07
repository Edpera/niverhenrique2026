interface WaveSeparatorProps {
  color?: string;
  flip?: boolean;
}

/**
 * Separador de seção com curva orgânica em SVG.
 * Cria transições fluidas entre seções da página.
 */
export default function WaveSeparator({ color = "oklch(0.96 0.03 65)", flip = false }: WaveSeparatorProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16"
      >
        <path
          d="M0,40 C200,80 400,0 600,30 C800,60 1000,10 1200,40 L1200,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

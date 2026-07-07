import { useEffect, useState } from "react";
import Confetti from "@/components/Confetti";
import PolaroidPhoto from "@/components/PolaroidPhoto";
import WaveSeparator from "@/components/WaveSeparator";
import { useCountUp } from "@/hooks/useCountUp";
import { useReveal } from "@/hooks/useReveal";

// URLs das fotos enviadas (armazenamento webdev)
const photos = {
  // Foto principal atual
  henriqueAtual: "/manus-storage/FotoHenrique_b095c848.jpeg",
  // Infância
  praia: "/manus-storage/DSC00847_23a4300a.webp",
  praia2: "/manus-storage/DSC00848_492731e4.webp",
  bebe1: "/manus-storage/DSC00011_f1c7fac3.webp",
  bebe2: "/manus-storage/DSC00012_7ed1e943.webp",
  bebe3: "/manus-storage/DSC00009_40445619.webp",
  pequeno1: "/manus-storage/PIC_0003_075704ef.webp",
  pequeno2: "/manus-storage/PIC_0068_d383fc6d.webp",
  // Crescimento
  cresc1: "/manus-storage/DSC00075_45151550.JPG",
  cresc2: "/manus-storage/DSC00076_393b1c22.JPG",
  cresc3: "/manus-storage/DSC00118_a188e25a.JPG",
  cresc4: "/manus-storage/DSC00117_052914f3.JPG",
  cresc5: "/manus-storage/DSC00115_f06ec9a0.JPG",
  // Adolescência
  adol1: "/manus-storage/DSC00135_f905119a.webp",
  adol2: "/manus-storage/DSC00133_53f204c8.webp",
  adol3: "/manus-storage/DSC00139_8a6739a1.webp",
  adol4: "/manus-storage/DSC00132_8959c1fa.webp",
  // Jovem
  jovem1: "/manus-storage/DSC00164_6407b2a5.webp",
  jovem2: "/manus-storage/DSC00170_ace6c2ab.webp",
  jovem3: "/manus-storage/DSC00169_ce6b2b9d.webp",
  // Momento especial
  especial: "/manus-storage/14052012117_86e5e78c.webp",
  // Novas fotos - Infância/crescimento
  nova1: "/manus-storage/Fotos20102011104_a0e9fd09.webp",
  nova2: "/manus-storage/Fotos20102011105_0585e170.webp",
  nova3: "/manus-storage/Fotos20102011111_6cfbdf0e.webp",
  nova4: "/manus-storage/Fotos20102011109_94536552.webp",
  nova5: "/manus-storage/DSC00487_adf940a4.webp",
  nova6: "/manus-storage/DSC00488_174b0600.webp",
  nova7: "/manus-storage/DSC00846_34b90be9.webp",
  nova8: "/manus-storage/DSC00936_ce629d84.webp",
  nova9: "/manus-storage/Fotos20102011215_0ee6c923.webp",
  // Novas fotos - Adolescência/jovem
  nova10: "/manus-storage/DSCN1096_45b25561.webp",
  nova11: "/manus-storage/DSCN1097_a9d58a7c.webp",
  nova12: "/manus-storage/DSCN0673_5d492aee.webp",
  nova13: "/manus-storage/DSCN0516_32b89143.webp",
  nova14: "/manus-storage/DSCN0504_f6a0aa56.webp",
  nova15: "/manus-storage/DSCN0610_95eb7edb.webp",
  nova16: "/manus-storage/DSCN0609_7f328e12.webp",
  nova17: "/manus-storage/DSCN0604_6e4634a2.webp",
  nova18: "/manus-storage/DSCN0603_c6a3ae2d.webp",
  nova19: "/manus-storage/DSCN0605_1f32c7c5.webp",
  nova20: "/manus-storage/DSCN0606_248cd5fd.webp",
  nova21: "/manus-storage/DSCN0607_d7e9ca50.webp",
  nova22: "/manus-storage/DSCN0608_5fd64e38.webp",
  nova23: "/manus-storage/DSCN0391_ded85b5b.webp",
  nova24: "/manus-storage/DSCN1438_c271d131.webp",
};

// Imagens geradas
const heroBg = "/manus-storage/hero_sunset_bg_7388e34d.png";
const monogram = "/manus-storage/monogram_h22_c24e5f28.png";
const avatarArt = "/manus-storage/birthday_avatar_art_b4d02b51.png";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [ageRef, age] = useCountUp(22, 2500);
  const [letterRef, letterVisible] = useReveal<HTMLDivElement>(0.2);
  const [galleryRef, galleryVisible] = useReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div className="min-h-screen bg-warm-cream overflow-x-hidden">
      <Confetti active={showConfetti} count={80} />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.18 0.02 45 / 0.3) 0%, oklch(0.18 0.02 45 / 0.1) 50%, oklch(0.98 0.015 70 / 0.9) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        {/* Monograma no topo */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-float">
          <img src={monogram} alt="Monograma H22" className="w-20 h-20 sm:w-28 sm:h-28 object-contain" />
        </div>

        {/* Título principal */}
        <div className="text-center mt-20">
          <p
            className="text-white/90 text-lg sm:text-xl font-body tracking-widest uppercase mb-4"
            style={{ textShadow: "0 2px 20px oklch(0.18 0.02 45 / 0.5)" }}
          >
            Parabéns
          </p>

          <h1
            className="font-display font-black text-6xl sm:text-8xl lg:text-9xl text-white mb-2"
            style={{ textShadow: "0 4px 30px oklch(0.18 0.02 45 / 0.4)" }}
          >
            Henrique
          </h1>

          {/* Número 22 com contagem progressiva */}
          <div ref={ageRef} className="my-6 sm:my-8">
            <div className="inline-flex items-baseline gap-2">
              <span
                className="font-display font-black text-7xl sm:text-9xl lg:text-[12rem] leading-none animate-shimmer"
              >
                {age}
              </span>
              <span className="font-display text-3xl sm:text-5xl text-white/80 font-light">
                anos
              </span>
            </div>
          </div>

          <p
            className="text-white/90 text-xl sm:text-2xl font-body font-light max-w-2xl mx-auto"
            style={{ textShadow: "0 2px 15px oklch(0.18 0.02 45 / 0.5)" }}
          >
            22 anos de luz, amor e orgulho.
          </p>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-body tracking-wider uppercase">
            Role para celebrar
          </span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO: MENSAGEM DA MÃE ===== */}
      <section className="relative py-20 sm:py-32 px-4 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <div
            ref={letterRef}
            className={`reveal ${letterVisible ? "visible" : ""} bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-14 shadow-xl border border-primary/10`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-gradient-amber font-bold">
                Uma carta do coração
              </h2>
            </div>

            <div className="space-y-5 text-foreground/80 font-body text-lg sm:text-xl leading-relaxed">
              <p>
                Nosso amado Henrique,
              </p>
              <p>
                Hoje você completa <strong className="text-primary">22 anos</strong> e nossos corações transbordam de gratidão por cada dia que tivemos o privilégio de te ver crescer. Desde os primeiros passos até a pessoa extraordinária que você se tornou, cada momento foi uma bênção que guardamos como um tesouro.
              </p>
              <p>
                Você é <strong className="text-primary">amoroso</strong> — sempre com um abraço pronto e um sorriso que ilumina qualquer ambiente. Você é <strong className="text-primary">querido</strong> — por todos que têm a sorte de te conhecer, pela doçura que carrega na alma. Você é <strong className="text-primary">inteligente</strong> — com uma mente brilhante que nos surpreende a cada dia. Você é <strong className="text-primary">fantástico</strong> — com um talento que vai além do imaginável. Você é <strong className="text-primary">carinhoso</strong> — com um jeito único de demonstrar afeto. Você é <strong className="text-primary">especial</strong> — uma raridade neste mundo. Você é <strong className="text-primary">maravilhoso</strong> — em cada gesto, em cada detalhe. E você é <strong className="text-primary">iluminado</strong> — com uma luz interior que guia e inspira a todos ao seu redor.
              </p>
              <p>
                Que essa nova volta ao sol te traga realizações, sonhos concretizados e a certeza de que você é amado profundamente. Não importa para onde a vida te leve, nosso amor vai com você — sempre.
              </p>
              <p className="font-display italic text-2xl text-gradient-sunset pt-4">
                Com todo o nosso amor, hoje e para sempre.
              </p>
              <p className="text-right text-foreground/60 text-base font-body pt-2">
                — Papai Edmilson e Mamãe Gisele
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator color="oklch(0.96 0.03 65)" />

      {/* ===== SEÇÃO: LINHA DO TEMPO - INFÂNCIA ===== */}
      <section className="relative py-20 sm:py-28 px-4 bg-sunset-radial">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-body font-semibold tracking-wide uppercase mb-4">
              Capítulo 1
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-amber font-bold mb-3">
              Onde tudo começou
            </h2>
            <p className="text-foreground/60 text-lg font-body max-w-xl mx-auto">
              Os primeiros sorrisos, as primeiras descobertas, o começo de tudo.
            </p>
          </div>

          {/* Galeria orgânica de fotos de infância */}
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            <PolaroidPhoto src={photos.bebe1} caption="Primeiros dias" rotation={-4} delay={0} size="md" />
            <PolaroidPhoto src={photos.bebe2} caption="Cheio de vida" rotation={3} delay={100} size="md" />
            <PolaroidPhoto src={photos.bebe3} caption="Olhos curiosos" rotation={-2} delay={200} size="sm" />
            <PolaroidPhoto src={photos.pequeno1} caption="Aventuras" rotation={5} delay={300} size="md" />
            <PolaroidPhoto src={photos.pequeno2} caption="Cavalgando sonhos" rotation={-3} delay={400} size="lg" />
            <PolaroidPhoto src={photos.praia} caption="Dias de sol" rotation={2} delay={500} size="md" />
            <PolaroidPhoto src={photos.praia2} caption="Pé na areia" rotation={-5} delay={600} size="sm" />
            <PolaroidPhoto src={photos.nova1} caption="Recordações" rotation={3} delay={700} size="md" />
            <PolaroidPhoto src={photos.nova2} caption="Família" rotation={-4} delay={800} size="sm" />
            <PolaroidPhoto src={photos.nova3} caption="Momentos doces" rotation={2} delay={900} size="md" />
            <PolaroidPhoto src={photos.nova4} caption="Alegria" rotation={-3} delay={1000} size="md" />
          </div>
        </div>
      </section>

      <WaveSeparator color="oklch(0.93 0.04 60)" flip />

      {/* ===== SEÇÃO: CRESCIMENTO ===== */}
      <section className="relative py-20 sm:py-28 px-4" style={{ background: "oklch(0.93 0.04 60)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-body font-semibold tracking-wide uppercase mb-4">
              Capítulo 2
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-sunset font-bold mb-3">
              Crescendo com alegria
            </h2>
            <p className="text-foreground/60 text-lg font-body max-w-xl mx-auto">
              Cada fase trouxe sua magia, cada momento um novo motivo pra sorrir.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            <PolaroidPhoto src={photos.cresc5} caption="Vindo te abraçar" rotation={-3} delay={0} size="lg" />
            <PolaroidPhoto src={photos.cresc1} caption="Bagunça feliz" rotation={4} delay={100} size="md" />
            <PolaroidPhoto src={photos.cresc2} caption="Expressões" rotation={-2} delay={200} size="md" />
            <PolaroidPhoto src={photos.cresc3} caption="Crescendo" rotation={3} delay={300} size="sm" />
            <PolaroidPhoto src={photos.cresc4} caption="Momentos" rotation={-4} delay={400} size="md" />
            <PolaroidPhoto src={photos.nova5} caption="Descobertas" rotation={2} delay={500} size="md" />
            <PolaroidPhoto src={photos.nova6} caption="Infância" rotation={-3} delay={600} size="sm" />
            <PolaroidPhoto src={photos.nova7} caption="Aventuras" rotation={4} delay={700} size="md" />
            <PolaroidPhoto src={photos.nova8} caption="Explorando" rotation={-2} delay={800} size="md" />
            <PolaroidPhoto src={photos.nova9} caption="Feliz" rotation={3} delay={900} size="sm" />
          </div>
        </div>
      </section>

      <WaveSeparator color="oklch(0.95 0.05 55)" />

      {/* ===== SEÇÃO: ADOLESCÊNCIA ===== */}
      <section className="relative py-20 sm:py-28 px-4 bg-sunset-radial">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-body font-semibold tracking-wide uppercase mb-4">
              Capítulo 3
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-amber font-bold mb-3">
              Descobrindo o mundo
            </h2>
            <p className="text-foreground/60 text-lg font-body max-w-xl mx-auto">
              A inteligência florescendo, a personalidade se desenhando.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            <PolaroidPhoto src={photos.adol4} caption="Grandes momentos" rotation={-3} delay={0} size="lg" />
            <PolaroidPhoto src={photos.adol1} caption="Alegria pura" rotation={4} delay={100} size="md" />
            <PolaroidPhoto src={photos.adol2} caption="Sorriso" rotation={-2} delay={200} size="sm" />
            <PolaroidPhoto src={photos.adol3} caption="Atenção" rotation={3} delay={300} size="md" />
            <PolaroidPhoto src={photos.nova10} caption="Crescendo" rotation={-4} delay={400} size="lg" />
            <PolaroidPhoto src={photos.nova11} caption="Jovem" rotation={2} delay={500} size="md" />
            <PolaroidPhoto src={photos.nova12} caption="Momentos" rotation={-3} delay={600} size="sm" />
            <PolaroidPhoto src={photos.nova13} caption="Sorriso" rotation={4} delay={700} size="md" />
            <PolaroidPhoto src={photos.nova14} caption="Vida" rotation={-2} delay={800} size="md" />
          </div>
        </div>
      </section>

      <WaveSeparator color="oklch(0.93 0.04 60)" flip />

      {/* ===== SEÇÃO: JOVEM ADULTO ===== */}
      <section className="relative py-20 sm:py-28 px-4" style={{ background: "oklch(0.93 0.04 60)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-body font-semibold tracking-wide uppercase mb-4">
              Capítulo 4
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-sunset font-bold mb-3">
              O jovem que você é
            </h2>
            <p className="text-foreground/60 text-lg font-body max-w-xl mx-auto">
              Amoroso, querido, inteligente, fantástico, carinhoso, especial, maravilhoso e iluminado — tudo o que sempre soubemos que você seria.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8">
            <PolaroidPhoto src={photos.jovem1} caption="Hoje" rotation={-3} delay={0} size="lg" />
            <PolaroidPhoto src={photos.jovem2} caption="Confiança" rotation={4} delay={100} size="md" />
            <PolaroidPhoto src={photos.jovem3} caption="Brilhando" rotation={-2} delay={200} size="sm" />
            <PolaroidPhoto src={photos.especial} caption="Momentos eternos" rotation={3} delay={300} size="md" />
            <PolaroidPhoto src={photos.nova15} caption="Especial" rotation={-4} delay={400} size="lg" />
            <PolaroidPhoto src={photos.nova16} caption="Único" rotation={2} delay={500} size="sm" />
            <PolaroidPhoto src={photos.nova17} caption="Carinho" rotation={-3} delay={600} size="md" />
            <PolaroidPhoto src={photos.nova18} caption="Luz" rotation={4} delay={700} size="md" />
            <PolaroidPhoto src={photos.nova19} caption="Fantástico" rotation={-2} delay={800} size="sm" />
            <PolaroidPhoto src={photos.nova20} caption="Maravilhoso" rotation={3} delay={900} size="md" />
            <PolaroidPhoto src={photos.nova21} caption="Iluminado" rotation={-4} delay={1000} size="md" />
            <PolaroidPhoto src={photos.nova22} caption="Querido" rotation={2} delay={1100} size="sm" />
            <PolaroidPhoto src={photos.nova23} caption="Sempre" rotation={-3} delay={1200} size="md" />
            <PolaroidPhoto src={photos.nova24} caption="Para sempre" rotation={4} delay={1300} size="lg" />
          </div>
        </div>
      </section>

      <WaveSeparator color="oklch(0.96 0.03 65)" />

      {/* ===== SEÇÃO: FOTO ATUAL + AVATAR ARTÍSTICO ===== */}
      <section className="relative py-20 sm:py-32 px-4 bg-warm-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-6xl text-gradient-amber font-bold mb-3">
              Você, hoje
            </h2>
            <p className="text-foreground/60 text-lg font-body max-w-xl mx-auto">
              22 anos de uma história que só está começando.
            </p>
          </div>

          <div ref={galleryRef} className={`flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 ${galleryVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            {/* Foto atual */}
            <div className="photo-card relative w-64 sm:w-80 bg-white p-4 pb-16 shadow-2xl rounded-sm" style={{ transform: "rotate(-2deg)" }}>
              <div className="overflow-hidden rounded-sm aspect-[3/4]">
                <img src={photos.henriqueAtual} alt="Henrique hoje" className="w-full h-full object-cover" />
              </div>
              <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-foreground/70 font-body">
                22 anos
              </p>
            </div>

            {/* Avatar artístico gerado */}
            <div className="photo-card relative w-64 sm:w-80 rounded-3xl overflow-hidden shadow-2xl animate-pulse-glow" style={{ transform: "rotate(2deg)" }}>
              <img src={avatarArt} alt="Avatar artístico do Henrique" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO: QUALIDADES ===== */}
      <section className="relative py-20 sm:py-28 px-4 bg-sunset-radial">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-5xl text-gradient-sunset font-bold mb-12">
            Tudo o que você é
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Amoroso */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Amoroso</h3>
              <p className="text-foreground/60 font-body text-sm">Seu coração é o seu maior presente. Você ama de um jeito que transforma quem está perto.</p>
            </div>

            {/* Querido */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Querido</h3>
              <p className="text-foreground/60 font-body text-sm">A doçura da sua alma conquista todos. Você é amado por onde passa.</p>
            </div>

            {/* Inteligente */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Inteligente</h3>
              <p className="text-foreground/60 font-body text-sm">Sua mente brilha com uma luz própria. Cada dia você nos surpreende mais.</p>
            </div>

            {/* Fantástico */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Fantástico</h3>
              <p className="text-foreground/60 font-body text-sm">Você tem um talento que vai além do imaginável. Tudo o que faz é extraordinário.</p>
            </div>

            {/* Carinhoso */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Carinhoso</h3>
              <p className="text-foreground/60 font-body text-sm">Seu jeito único de demonstrar afeto aquece a alma de quem te recebe.</p>
            </div>

            {/* Especial */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Especial</h3>
              <p className="text-foreground/60 font-body text-sm">Você é uma raridade neste mundo. Não existe outro igual a você.</p>
            </div>

            {/* Maravilhoso */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Maravilhoso</h3>
              <p className="text-foreground/60 font-body text-sm">Em cada gesto, em cada detalhe, você é simplesmente maravilhoso.</p>
            </div>

            {/* Iluminado */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10 transition-transform duration-200 hover:scale-105">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM5.99 19.42c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06z" /></svg>
              </div>
              <h3 className="font-display text-xl text-gradient-amber font-bold mb-2">Iluminado</h3>
              <p className="text-foreground/60 font-body text-sm">Sua luz interior guia e inspira a todos ao seu redor. Você é luz pura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO FINAL: CELEBRAÇÃO ===== */}
      <section
        className="relative py-24 sm:py-36 px-4 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.18 0.02 45 / 0.5) 0%, oklch(0.18 0.02 45 / 0.7) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-6xl text-white font-bold mb-6" style={{ textShadow: "0 4px 20px oklch(0.18 0.02 45 / 0.5)" }}>
            Feliz Aniversário
          </h2>
          <p className="text-white/90 text-2xl sm:text-3xl font-display italic mb-8" style={{ textShadow: "0 2px 15px oklch(0.18 0.02 45 / 0.5)" }}>
            "Cada foto aqui é um abraço que o tempo não apaga."
          </p>

          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-body font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200 active:scale-95"
            style={{ textShadow: "0 2px 10px oklch(0.18 0.02 45 / 0.3)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Celebrar de novo
          </button>

          <p className="text-white/60 text-sm font-body mt-12 tracking-wider">
            Com amor, do seu pai Edmilson e da sua mãe Gisele — hoje e para sempre.
          </p>
        </div>
      </section>
    </div>
  );
}

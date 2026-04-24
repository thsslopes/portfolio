// Padrões extraídos do Figma: portfolio-2026
//
// PhotoCard: cards de foto estilo "pasta" empilhados com rotação leve
//   — baseado nos cards "Thailand" da seção "work i'm proud of"
//   — recebe array de até 4 imagens; exibe em camadas rotacionadas
//
// ProjectCard: card de projeto com imagem, tags, título e descrição
//   — baseado nos cards da seção de trabalhos

// ─── PhotoCard ────────────────────────────────────────────────────────────────

const ROTATIONS = ['rotate-0', 'rotate-[2.1deg]', 'rotate-[3.1deg]', 'rotate-[2.4deg]']

function PhotoLayer({ src, rotation, zIndex }) {
  return (
    <div
      className={`absolute bg-white border border-[#e1e1e1] rounded-[17px] p-[10px] shadow-sm ${rotation}`}
      style={{ zIndex }}
    >
      <div className="w-[86px] h-[99px] rounded-xl overflow-hidden bg-[#e1e1e1]">
        {src && <img src={src} alt="" className="w-full h-full object-cover" />}
      </div>
    </div>
  )
}

export function PhotoCard({ images = [], label, className = '' }) {
  return (
    <div className={`relative w-[347px] h-[301px] flex flex-col items-center justify-end pb-6 ${className}`}>
      <div className="relative w-[260px] h-[200px]">
        {images.slice(0, 4).map((src, i) => (
          <PhotoLayer
            key={i}
            src={src}
            rotation={ROTATIONS[i] ?? ROTATIONS[0]}
            zIndex={i + 1}
          />
        ))}
      </div>
      {label && (
        <p className="mt-4 text-[#f8f6f0]/60 text-sm font-medium font-['Outfit',sans-serif] text-center">
          {label}
        </p>
      )}
    </div>
  )
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  href = '#',
  className = '',
}) {
  return (
    <a
      href={href}
      className={`group flex flex-col gap-4 rounded-3xl bg-white/5 border border-white/10 overflow-hidden
        hover:bg-white/8 hover:border-white/20 transition-all duration-300 cursor-none ${className}`}
    >
      {/* imagem / mockup */}
      <div className="w-full aspect-[4/3] bg-white/5 overflow-hidden">
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <div className="w-full h-full" />
        }
      </div>

      {/* conteúdo */}
      <div className="px-6 pb-6 flex flex-col gap-3">
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-[#f8f6f0]/70
                font-['Outfit',sans-serif]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* título */}
        <h3 className="text-[#f8f6f0] text-xl font-semibold font-['Outfit',sans-serif] leading-snug">
          {title}
        </h3>

        {/* descrição */}
        {description && (
          <p className="text-[#f8f6f0]/60 text-sm font-medium font-['Outfit',sans-serif] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </a>
  )
}

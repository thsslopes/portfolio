// Padrões extraídos do Figma: portfolio-2026
// - primary: pill amarelo (#fde047) — "View Resume"
// - accent:  pill azul (#3b82f6) com glow — badge "strategy"
// - ghost:   pill com borda, texto claro — ações secundárias

const variants = {
  primary: [
    'bg-[#fde047] text-[#161618]',
    'rounded-full font-medium',
    'hover:brightness-95 active:scale-95',
  ],
  accent: [
    'bg-[#3b82f6] text-white',
    'rounded-full font-medium border-4 border-[rgba(96,165,250,0.3)]',
    'shadow-[0px_10px_40px_0px_rgba(59,130,246,0.3)]',
    '-rotate-3',
    'hover:rotate-0 hover:shadow-[0px_10px_50px_0px_rgba(59,130,246,0.5)] active:scale-95',
  ],
  ghost: [
    'bg-transparent text-[#f8f6f0]',
    'rounded-full font-medium border border-[#f8f6f0]/30',
    'hover:bg-white/10 active:scale-95',
  ],
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center transition-all duration-200 cursor-none select-none font-[\'Outfit\',sans-serif]'
  const variantClasses = (variants[variant] ?? variants.primary).join(' ')
  const sizeClasses = sizes[size] ?? sizes.md

  return (
    <button
      className={`${base} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

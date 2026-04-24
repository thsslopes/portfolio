// Padrões extraídos do Figma: portfolio-2026
// Design system: fundo escuro (#161618), bordas sutis, fonte Outfit
// - text:     input de linha única
// - textarea: área de texto multilinha
// - dark:     variante com fundo escuro (tema do portfólio)
// - light:    variante clara (tema alternativo)

const baseClasses = [
  'w-full font-[\'Outfit\',sans-serif] font-medium text-base',
  'rounded-2xl px-5 py-3',
  'outline-none transition-all duration-200',
  'placeholder:opacity-40',
]

const themes = {
  dark: [
    'bg-white/5 text-[#f8f6f0] border border-white/10',
    'focus:border-[#3b82f6]/60 focus:bg-white/8',
    'placeholder:text-[#f8f6f0]',
  ],
  light: [
    'bg-white text-[#1c1c21] border border-[#e2e2e5]',
    'focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20',
    'placeholder:text-[#1c1c21]',
  ],
}

export function Input({
  theme = 'dark',
  label,
  className = '',
  ...props
}) {
  const themeClasses = (themes[theme] ?? themes.dark).join(' ')
  const allClasses = [...baseClasses, themeClasses].join(' ')

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className={`text-sm font-medium ${theme === 'dark' ? 'text-[#f8f6f0]/60' : 'text-[#1c1c21]/60'}`}>
          {label}
        </label>
      )}
      <input className={`${allClasses} ${className}`} {...props} />
    </div>
  )
}

export function Textarea({
  theme = 'dark',
  label,
  rows = 4,
  className = '',
  ...props
}) {
  const themeClasses = (themes[theme] ?? themes.dark).join(' ')
  const allClasses = [...baseClasses, themeClasses, 'resize-none'].join(' ')

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className={`text-sm font-medium ${theme === 'dark' ? 'text-[#f8f6f0]/60' : 'text-[#1c1c21]/60'}`}>
          {label}
        </label>
      )}
      <textarea rows={rows} className={`${allClasses} ${className}`} {...props} />
    </div>
  )
}

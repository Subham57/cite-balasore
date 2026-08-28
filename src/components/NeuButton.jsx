export default function NeuButton({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  className = '',
  as: Tag = 'button',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-neu-sm px-6 py-3 transition-all duration-200 active:shadow-neu-pressed focus-visible:outline-none select-none'

  const variants = {
    default: 'bg-base text-ink shadow-neu-flat hover:shadow-neu-hover',
    primary:
      'bg-brand-gradient text-white shadow-neu-flat hover:brightness-110',
    teal: 'bg-teal-gradient text-white shadow-neu-flat hover:brightness-110',
    ghost: 'bg-base text-ink shadow-neu-pressed hover:shadow-neu-pressed-lg',
  }

  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default function NeuCard({ children, className = '', as: Tag = 'div', pressed = false, ...rest }) {
  return (
    <Tag
      className={`bg-base rounded-neu ${pressed ? 'shadow-neu-pressed' : 'shadow-neu-flat'} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

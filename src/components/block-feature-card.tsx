import "./block-feature-card.css"

type BlockFeatureCardProps = {
  title?: string
  text?: string
  children?: React.ReactNode
}

const BlockFeatureCard = ({ title, text, children }: BlockFeatureCardProps) => {
  return (
    <div className="block-feature-card">
      <div className="block-feature-card-inner">
        {title && <h3 className="block-feature-card-title">{title}</h3>}
        {text && <p className="block-feature-card-text">{text}</p>}
        {children}
      </div>
    </div>
  )
}

export default BlockFeatureCard

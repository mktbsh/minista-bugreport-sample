import "./block-feature-grid.css"

type BlockFeatureGridProps = {
  children: React.ReactNode
}

const BlockFeatureGrid = ({ children }: BlockFeatureGridProps) => {
  return <div className="block-feature-grid">{children}</div>
}

export default BlockFeatureGrid

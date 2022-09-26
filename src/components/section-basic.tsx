import "./section-basic.css"

type SectionBasicProps = {
  id?: string
  heading?: string
  children: React.ReactNode
}

const SectionBasic = ({ id, heading, children }: SectionBasicProps) => {
  return (
    <section className="section-basic" id={id}>
      <div className="section-basic-inner">
        {heading && <h2 className="section-basic-heading">{heading}</h2>}
        {children}
      </div>
    </section>
  )
}

export default SectionBasic

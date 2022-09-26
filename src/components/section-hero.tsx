import "./section-hero.css"

type SectionHeroProps = {
  id?: string
}

const SectionHero = ({ id }: SectionHeroProps) => {
  return (
    <section className="section-hero" id={id}>
      <div className="section-hero-inner">
        <div className="section-hero-card">
          <div className="section-hero-card-content">
            <h1 className="section-hero-title">
              Let's make a static site with minista!
            </h1>
            <p className="section-hero-description">
              ministaは、Next.js風のモダンで使い勝手の良い開発体験を静的サイト制作とSaaSのテンプレート制作に提供します。
            </p>
            <p className="section-hero-links">
              <a href="https://minista.qranoko.jp/docs/">Read the Docs</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHero

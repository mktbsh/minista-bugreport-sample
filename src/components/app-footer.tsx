import "./app-footer.css"
import pjt from "../../project.json"

const AppFooter = () => {
  const site = pjt.site
  const copyright = site.copyright
  const startYear = copyright.startYear
  const nowYear = new Date().getFullYear()
  const rangeYear =
    startYear === nowYear
      ? String(nowYear)
      : `${String(startYear)} - ${String(nowYear)}`
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <p className="app-footer-copyright">
          {"©️ "}
          {copyright.url ? (
            <a href={copyright.url}>{copyright.name}</a>
          ) : (
            <span>{copyright.name}</span>
          )}
          {` ${rangeYear}`}
        </p>
      </div>
    </footer>
  )
}

export default AppFooter

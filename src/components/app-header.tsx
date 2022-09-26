import "./app-header.css"
import pjt from "../../project.json"

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <a href="/">
          <img
            src="/assets/images/logo.svg"
            alt="minista"
            className="app-header-logo"
            width={400}
            height={84}
          />
        </a>
        <nav className="app-header-nav">
          <ul>
            {pjt.site.menu.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader

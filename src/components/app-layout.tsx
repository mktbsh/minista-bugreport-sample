import "./app-layout.css"
import AppHeader from "./app-header"
import AppMain from "./app-main"
import AppFooter from "./app-footer"

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  )
}

export default AppLayout

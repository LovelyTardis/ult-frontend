import SideNavigator from "../components/side-navigator/SideNavigator.astro";

const Layout = ({children, mainHeader}) => {
  return (
    <body>
    <div class="separator-block">
      <div class="main">
        {mainHeader && <h2>{mainHeader}</h2>}
        {children}
      </div>
      <div class="nav">
        <SideNavigator />
      </div>
    </div>
  </body>
  )
}

export default Layout;

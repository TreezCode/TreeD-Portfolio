import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
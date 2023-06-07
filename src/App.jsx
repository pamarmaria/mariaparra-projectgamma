import { Link, Route, Routes } from 'react-router-dom'
import "./styles/globalStyle.scss"
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'

function App() {

  return (
    <>
    <header className="topbar">
        <Link to="/" className="topbar__logo">
            <img src="../svg/logo-portfolio.svg" alt="Logo"/>
        </Link>
        <div className="topbar__menu">
            <div className="menu__dropdown">
                <Link to="/portfolio" className="menu__item--link">Portfolio</Link>
                <Link to="/about" className="menu__item--link">About</Link>
                <button className="dropbtn">Menu</button>
            </div>
        </div>
      </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
    <footer className="footer">
        <div className="social-icons">
          <a href="">Instagram</a>
          <a href="">Behance</a>
          <a href="">Dribble</a>
        </div>
        <div className="contact-email">hola@mariaparra.com</div>
    </footer>
    </>
  )
}

export default App

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
              <Link to="/portfolio" className="menu__item--link">Portfolio</Link>
              <Link to="/about" className="menu__item--link">About</Link>
              <button className="menu__item--btn"><p>Menu</p></button>
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
        <div className="social__icons">
          <a href="https://www.instagram.com/" target='_blank'>
            <p>Instagram</p>
            <img src="../svg/instagram.svg" alt="" />
          </a>
          <a href="https://www.behance.net/" target='_blank'>
            <p>Behance</p>
            <img src="../svg/behance.svg" alt="" />
          </a>
          <a href="https://dribbble.com/" target='_blank'>
            <p>Dribble</p>
            <img src="../svg/dribbble.svg" alt="" />
          </a>
        </div>
        <a href='mailto:hola@mariaparra.com'>hola@mariaparra.com</a>
    </footer>
    </>
  )
}

export default App

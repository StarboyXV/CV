import { useState } from 'react'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-top">
          <div className="brand">
            <h1>Thapelo Moletsane</h1>
            <p className="job-title">Software Engineer | Mobile & ERP Developer</p>
          </div>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(open => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>

        <p className="summary">
          Results-driven Software Engineer with experience developing ERP mobile applications and supporting backend services using .NET, C#, and Xamarin/.NET MAUI. Skilled in building scalable features, optimizing database interactions, and contributing to end-to-end solution delivery. Adept at working in Agile environments and collaborating with cross-functional teams to deliver reliable, user-focused software.
        </p>
      </div>
    </header>
  )
}

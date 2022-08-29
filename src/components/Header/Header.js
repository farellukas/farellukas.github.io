import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      <header>
        <a href="/" className="header-link">
          HOME
        </a>
        <a href="/projects" className="header-link">
          PROJECTS
        </a>
        <a href="/contact" className="header-link">
          CONTACT
        </a>
      </header>
    </div>
  )
}

export default Header
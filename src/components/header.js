import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <nav class='main-navigation'>
        <Link to="/" className='site-title'>
          Jake Adams
        </Link>
    </nav>
  </header>
)

export default Header

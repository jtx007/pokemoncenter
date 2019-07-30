import React from 'react'
import layoutStyles from './layout.module.css'
import { Link } from "gatsby"



export default ({ children }) => (
    <nav>
        <Link className={layoutStyles.logoLink} to="/"><img src="https://fontmeme.com/permalink/190730/14e2ec117a477a811d88a66e4ecfe65a.png" alt="pokemon-font" border="0"/></Link>
        <ul className={layoutStyles.navLinks}>
            <Link className={layoutStyles.navLink} to="/">Home</Link>
            <Link className={layoutStyles.navLink} to="/pokemon">Pokemon</Link>
            <Link className={layoutStyles.navLink} to="/about">About</Link>
        </ul>
        {children}
    </nav>

)

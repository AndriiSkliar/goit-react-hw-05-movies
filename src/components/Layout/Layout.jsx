import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <nav className={css.nav}>
        <NavLink className={css.navLink} to="/"><span className={css.navLinkSpan}>Home</span></NavLink>
        <NavLink className={css.navLink} to="/movies"><span className={css.navLinkSpan}>Movies</span></NavLink>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

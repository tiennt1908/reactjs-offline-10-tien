import React from 'react';
import './header.css';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';

export default function Header() {

  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <HeaderLogo></HeaderLogo>
          <HeaderSearch></HeaderSearch>
          <HeaderMenu></HeaderMenu>
        </div>
      </div>
    </header>

  )

}

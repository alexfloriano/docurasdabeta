
import React, { useState } from "react";

import { Link } from 'gatsby';
import logo from '../assets/images/logo.jpeg';


const Header = ({ produtos }) => {
  console.log("Header",produtos)
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setisMenuOpen(false)
  }




  const burgerClass = isMenuOpen ? 'is-active' : '';

  return (

    <nav className="navbar" >
      <div className="container" >
        <div className="navbar-brand" >
          <Link className="navbar-item is-size-4" to="/">
            <img src={logo} alt="logotipo" ></img>
          </Link>
          <button
            className={`navbar-burger ${burgerClass}`}
            type="button"
            aria-label="menu"
            onClick={handleMenu}
          >
            <span arial-hidden="true" />
            <span arial-hidden="true" />
            <span arial-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            <Link
              className="navbar-item is-size-5"
              to="/"
              onClick={closeMenu}
            >Home
              </Link>
            <Link
              className="navbar-item is-size-5"
              to="/produtos"
              onClick={closeMenu}
            >Produtos
              </Link>
            <Link
              className="navbar-item is-size-5"
              to="/produtosgourmet"
              onClick={closeMenu}
            >Linha Gourmet
              </Link>
            <Link
              className="navbar-item is-size-5"
              to="/quemsomos"
              onClick={closeMenu}
            >Quem Somos
              </Link>
            <Link
              className="navbar-item is-size-5"
              to="/contato"
              onClick={closeMenu}
            >Contato
              </Link>
            <Link
              className="navbar-item is-size-5"
              to="/fecharpedido"
              onClick={closeMenu}
              produtos={produtos}
            >Fechar Pedido
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Header;

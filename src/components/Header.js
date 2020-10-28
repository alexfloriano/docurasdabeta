import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import logo from '../assets/images/logo.jpeg';
import Footer from '../components/Footer/Footer';

class Header extends Component {
  state = {
    isMenuOpen: false,
  }
    handleMenu =() =>{
      this.setState(previousState  => ({ 
        isMenuOpen: !previousState.isMenuOpen,
      }));
    }

    closeMenu =( ) => {
      this.setState({ isMenuOpen: false});
    }

  render =() =>{
    const {siteTitle} = this.props;
    const { isMenuOpen} =this.state;
    const burgerClass = isMenuOpen ?'is-active':'';

    return ( 
      
      <nav className="navbar" >
      <div className="container" >
        <div className="navbar-brand" >
          <Link className="navbar-item is-size-4" to="/">  

            <img src= {logo}></img>
           
          </Link>  

          <button
         
            className={`navbar-burger ${burgerClass}`}
            type="button"
            aria-label="menu"
            onClick={this.handleMenu}
          >
            <span arial-hidden="true"/>
            <span arial-hidden="true"/>
            <span arial-hidden="true"/>
            
          </button>
         </div>
       <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            
          <Link
           
              className="navbar-item is-size-5"
              to="/"
              onClick={this.closeMenu}
             >
              Home
              </Link>
              <Link
              className="navbar-item is-size-5"              
              to="/projects"
              onClick={this.closeMenu}
             
              >
              Produtos              
              </Link>
              <Link
              className="navbar-item is-size-5"
              to="/projects"
              onClick={this.closeMenu}
              >
              Linha Gourmet              
              </Link> 
              <Link
              className="navbar-item is-size-5"
              to="/blog"
              onClick={this.closeMenu}
              >
              Quem Somos            
              </Link>
              <Link
              className="navbar-item is-size-5"
              to="/stack"
              onClick={this.closeMenu}
              >                
              Contato                                 
                      
              </Link>

           </div>
         </div> 
      </div>
    </nav>

    );
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

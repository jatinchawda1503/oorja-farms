import React from 'react'
import '../../components/Navbar/Navbar.css';
import {Link} from 'react-router-dom';

 
const Navbar = () => {
    return (
        <>
        <div className="container">
          <nav id="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <header ClassName="header-style-2">
        <div ClassName="header-2-inner">
          <div ClassName="widget widget-control-header widget-search-header">
            <Link ClassName="btn-open-search-form js-open-search-form-header" to="#">
              <span ClassName="lnr lnr-magnifier"></span>
            </Link>
          </div>
          <nav>
            <ul ClassName="menu hidden-xs">
              <li>
                <Link to="/">Home</Link>
              </li>
              
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Link ClassName="brand-logo" to="#">
              <img ClassName="img-responsive" src="images/logo.png" alt="" />
            </Link>
            <ul ClassName="menu hidden-xs">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              
            </ul>
          </nav>
          <aside ClassName="right">
             
            <div ClassName="widget widget-control-header hidden-lg hidden-md hidden-sm">
              <Link ClassName="navbar-toggle js-offcanvas-has-events" type="button" to="#menu">
                <span ClassName="icon-bar"></span>
                <span ClassName="icon-bar"></span>
                <span ClassName="icon-bar"></span>
              </Link>
            </div>
          </aside>
        </div>
      </header>


      </div>
        </>
    )
}

export default Navbar

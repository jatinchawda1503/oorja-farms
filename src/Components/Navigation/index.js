import React, { Component } from 'react';
import '../Navigation/Navbar.css';
import {Link} from 'react-router-dom';
import LOGO from '../../images/logo.png';
import { FaWhatsapp,FaFacebookF,FaInstagram } from 'react-icons/fa';

class Navbar extends Component {
  render () {
    return (
        <div>
                <header id="main-header" className="header-v2 hidden-sm hidden-xs">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 inner">
                                    <div className="col-xl-2 col-lg-2 col-md-5">
                                        <div className="main-menu">
                                            <div id="menu-popup" className="menu-popup">
                                                <Link to="#"></Link>
                                                <div className="burger-menu" ><span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-2 text-center">
                                        <div className="logo">
                                                <Link className="logo-default" to="#" title="logo"><img alt="logo-theme" src={LOGO} className="img-responsive" /></Link>
                                                <Link className="logo-white" to="#" title="logo"><img alt="logo-theme" src={LOGO} className="img-responsive" /></Link>
                                        </div>
                                    </div>                
                                    <div className="col-xl-4 col-lg-4 col-md-5">
                                        <div className="header-right">
                                            <Link to="#"><FaWhatsapp color={'#43d854'} title={'Whatsaspp'} height="30px" width="30px"/></Link>
                                            <Link to="#"><FaFacebookF color={'#3b5998'} title={'Facebook'} height="30px" width="30px"/></Link>
                                            <Link to="#"><FaInstagram color={'#c32aa3'} title={'Instagram'} height="30px" width="30px"/></Link>
                                        </div>                   
                                    </div>
                            </div>
                        </div>
                    </div>
                </header>





                <header id="header_mobile" className="header-mobile-default header-page hidden-lg hidden-md">
                    <div className="header-top">
                        <div className="container">
                            <div className="logo text-center">
                                <Link to="#" title="logo"><img alt="logo-theme" src={LOGO} className="img-responsive"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="inner">                
                                <div className="header-main">
                                    <div className="main-left">
                                        <button data-toggle="offcanvas" className="btn btn-offcanvas btn-toggle-canvas offcanvas" type="button">
                                        <i className="ion ion-android-menu"></i>
                                        </button>  
                                    </div>
                                    <div className="main-right">
                                        <div  className="search-popup search_modal search">
                                            <Link to="#" className="tp_btn_search" data-toggle="modal" data-target="#Searchmobile">
                                                <i className="pe-7s-search"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
            </header>



            {/* <!-- Menu popup --> */}
                <div id="content_menu_popup" className="content-menu-popup hidden-sm hidden-xs"> 
                    <div className="menu-popup-body">
                        <ul className="navbar-menu">
                            <li className="items">
                                <Link to="/"><span>Home</span></Link>
                            </li>
                            <li className="items">
                                <Link to="/about-us"><span>About Us</span></Link>
                            </li>
                            <li className="items">
                                <Link to="/shop"><span>Shop</span></Link>
                            </li>
                          
                            <li className="items">
                                <Link to="/contact-us"><span>Contact Us</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>  
                {/*  Menu offcanvas */}

                <div id="pbr-off-canvas" className="pbr-off-canvas sidebar-offcanvas hidden-lg hidden-md"> 
                    <div className="pbr-off-canvas-body">
                        <div className="offcanvas-head">
                            <button type="button" className="btn btn-close btn-toggle-canvas" data-toggle="offcanvas">
                                <i className="pe-7s-close-circle"></i> 
                            </button>
                            <span>Menu</span>
                        </div>  
                        <nav className="navbar navbar-offcanvas navbar-static">
                            <ul className="nav navbar-nav">
                                <li className="level1 active hassub">
                                <Link to="/"><span>Home</span></Link>
                                </li>
                                <li className="level1 hassub">
                                <Link to="/about-us"><span>About Us</span></Link>
                                </li>
                                <li className="level1 hassub">
                                    <Link to="/shop"><span>Shop</span></Link>
                                </li>
                                <li className="level1 hassub">
                                <Link to="/contact-us"><span>Contact Us</span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>  
        </div>
    )
}

}

export default Navbar

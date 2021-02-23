import React, { Component } from 'react';
import '../HomeSlider/HomeSlider.css'
//import SlideItems from './SlideItems';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { $ } from "react-jquery-plugin";


import Product1 from '../../images/product/1.png';
import Product2 from '../../images/product/2.png';
import Product3 from '../../images/product/3.png';
import Product4 from '../../images/product/4.png';
import ReactOwlCarousel from 'react-owl-carousel';


//import dynamics from 'dynamics.js/lib/dynamics.js';
//import classie from '../../external/js/classie.js';
// import {appendScript} from './../../exportScripts';

//import {CircleSlideshow} from '../../external/js/Handleslider';
// import '../../external/js/Handleslider';

 //var CircleSlideshow;
class HomeSlider extends Component {
    // componentDidMount () {
        
    //     appendScript("../../external/js/classie.js");
    //     appendScript("../../external/js/dynamics.js");
    //     appendScript("../../external/js/Handleslider.js");
    // }
   render(){

    

    return (
        <div>
			<div id="slideshow" className="slideshow">
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Macadamia Skin Oil <span className="slide__price">$39</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product1} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product1} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Macadamia Skin Oil</h2>
								<p className="slide__description">Hydration for very dry skin</p>
								<div>
									<span className="slide__price slide__price--large">$39</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>					
                        </div>
				</div>
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Grapeseed Skin Oil <span className="slide__price">$19</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product2} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product2} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Grapeseed Skin Oil</h2>
								<p className="slide__description">Moisture control for all skin types</p>
								<div>
									<span className="slide__price slide__price--large">$19</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Jojoba Skin Oil <span className="slide__price">$35</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product3} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product3} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Jojoba Skin Oil</h2>
								<p className="slide__description">Protection for sensitive skin</p>
								<div>
									<span className="slide__price slide__price--large">$35</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Amaranth Skin Oil <span className="slide__price">$29</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product4} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product4} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Amaranth Skin Oil</h2>
								<p className="slide__description">Rich hydration for mature skin</p>
								<div>
									<span className="slide__price slide__price--large">$29</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Argan Skin Oil <span className="slide__price">$59</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product2} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product4} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Argan Skin Oil</h2>
								<p className="slide__description">Moisture for problematic &amp; dry skin</p>
								<div>
									<span className="slide__price slide__price--large">$59</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
					<h2 className="slide__title slide__title--preview">Avocado Skin Oil <span className="slide__price">$39</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={Product4} alt="Some image" />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content">
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={Product2} alt="Some image" />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">Avocado Skin Oil</h2>
								<p className="slide__description">Deep repair for stressed skin</p>
								<div>
									<span className="slide__price slide__price--large">$39</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className="action action--close" aria-label="Close"><i className="fa fa-close"></i></button>
			</div>
            
           

        </div>


    )
}

}



export default HomeSlider

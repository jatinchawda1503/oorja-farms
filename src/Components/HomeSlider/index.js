import React, { Component } from 'react';
import '../HomeSlider/HomeSlider.css'
import SlideItems from './SlideItems';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { $ } from "react-jquery-plugin";


import Product1 from '../../images/product/1.png';
import Product2 from '../../images/product/2.png';
import Product3 from '../../images/product/3.png';
import Product4 from '../../images/product/4.png';
import ReactOwlCarousel from 'react-owl-carousel';



import  '../../external/js/Handleslider';
import {Helmet} from "react-helmet";


class HomeSlider extends Component {
   
   render(){
    return (
        <div>
			<div id="slideshow" className="slideshow">

                <SlideItems 
                title = "Macadamia Skin Oil"
                price = {300}
                image = {Product1}
                url= "/product/sample1"
                s_desc="Hydration for very dry skin"
                />
                <SlideItems 
                title = "Grapeseed Skin Oil"
                price = {400}
                image = {Product2}
                url= "/product/sample2"
                s_desc="Moisture control for all skin types"
                />

                <SlideItems 
                title = "Jojoba Skin Oil"
                price = {200}
                image = {Product3}
                url= "/product/sample3"
                s_desc="Protection for sensitive skin"
                />
				

                <SlideItems 
                title = "Amaranth Skin Oil"
                price = {250}
                image = {Product4}
                url= "/product/sample4"
                s_desc="Rich hydration for mature skin"
                />
				<button className="action action--close" aria-label="Close"><i className="fa fa-close"></i></button>
			</div>
            <Helmet>


            </Helmet>

        </div>


    )
}

}



export default HomeSlider

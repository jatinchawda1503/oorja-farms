import React from 'react'

const SlideItems = ({title,price,image,url,s_desc,buy}) => {

	
	
    return (
        <div className="slide">
                <div className="deco deco--title">{title}</div>
					<h2 className="slide__title slide__title--preview">{title}<span className="slide__price">{price}</span></h2>
					<div className="slide__item">
						<div className="slide__inner">
							<img className="slide__img slide__img--small" src={image} alt={title}  />
							<button className="action action--open" aria-label="View details"><i className="fa fa-plus"></i></button>
						</div>
					</div>
					<div className="slide__content" style={{transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'}}>
						<div className="slide__content-scroller">
							<img className="slide__img slide__img--large" src={image} alt={title} />
							<div className="slide__details">
								<h2 className="slide__title slide__title--main">{title}</h2>
								<p className="slide__description">{s_desc}</p>
								<div>
									<span className="slide__price slide__price--large">{price}</span>
									<button className="button button--buy">Add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
    )
}

export default SlideItems

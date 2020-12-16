import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = [
    <div className="item" data-value="0">
        <img className="object-contain object-right w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608156601/gv2xkc15nuabjfhdqbbp.jpg" />
    </div>,
    <div className="item" data-value="1">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608072892/UI/srxvt9par1ftuexiroxq.jpg" />
    </div>,
    <div className="item" data-value="2">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608072927/UI/q2mhhgzknp9a2e38hiwb.jpg" />
    </div>,
];

const Carrucel = () => {
    
    return (
        <>
               <AliceCarousel
                    autoPlay
                    // autoPlayStrategy="default"
                    autoPlayInterval={5000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={true}
                    disableButtonsControls
                    items={items}
                    
                />
        </>
    )
}

export default Carrucel

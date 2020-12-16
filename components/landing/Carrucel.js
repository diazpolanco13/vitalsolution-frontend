import React from 'react'
import AliceCarousel from 'react-alice-carousel';

const items = [
    <div className="item" data-value="0">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608072900/UI/nwwbyjtza0ernfffww9c.jpg" />
    </div>,
    <div className="item" data-value="1">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608072892/UI/srxvt9par1ftuexiroxq.jpg" />
    </div>,
    <div className="item" data-value="1">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://res.cloudinary.com/apidev/image/upload/v1608072927/UI/q2mhhgzknp9a2e38hiwb.jpg" />
    </div>,
];

const Carrucel = () => {
    
    return (
        <>
               <AliceCarousel
                    autoPlay
                    // autoPlayStrategy="default"
                    autoPlayInterval={500}
                    animationDuration={1000}
                    animationType="slide"
                    infinite
                    touchTracking={true}
                    disableButtonsControls
                    items={items}
                    
                />
             {/* <div className="flex flex-col items-center justify-center w-full mx-auto">
            </div> */}
        </>
    )
}

export default Carrucel

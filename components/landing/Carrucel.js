import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <div className="item" data-value="0">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/bannner1.jpg?alt=media&token=f3e2e2da-5822-43e1-9b31-156051487376" />
    </div>,
    <div className="item" data-value="1">
        <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/banner%203.jpg?alt=media&token=76fdb4f6-4631-4426-99fd-510de3e29bef" />
    </div>,
    // <div className="item" data-value="2">
    //     <img className="object-cover object-center w-full rounded h-96" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/bannervital.jpg?alt=media&token=98dfe3f7-7bfd-4e4f-b651-6bb6de6e6f92" />
    // </div>
];

const Carrucel = () => {
    
    return (
        <>
             <div className="flex flex-col items-center justify-center w-full mx-auto">
               <AliceCarousel
                    autoPlay
                    autoPlayStrategy="default"
                    autoPlayInterval={5000}
                    animationDuration={1000}
                    animationType="slide"
                    infinite
                    touchTracking={true}
                    disableButtonsControls
                    items={items}
                    responsive={responsive}
                />
            </div>
        </>
    )
}

export default Carrucel

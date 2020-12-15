import React from "react";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Carrucel = () => {


  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mx-auto">
      <Carousel
            plugins={[
            'infinite',
            {
            resolve: autoplayPlugin,
            options: {
                interval: 2000,
            }
            },
        ]}   
        animationSpeed={1000}
        >
        <div>
        <img
            className="z-0 object-cover object-center w-full rounded h-96"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/bannner1.jpg?alt=media&token=f3e2e2da-5822-43e1-9b31-156051487376"
                      />
          </div>
                
          <div>
            <img
            className="object-cover object-center w-full rounded h-96"
            alt="hero"
            src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/banner%203.jpg?alt=media&token=76fdb4f6-4631-4426-99fd-510de3e29bef"
          />
         </div>
        </Carousel>
      </div>
    </>
  );
};

export default Carrucel;

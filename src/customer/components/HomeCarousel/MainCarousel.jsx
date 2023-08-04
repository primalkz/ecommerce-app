import React from 'react'
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCarousel = () => {


    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };
    
    const items = mainCarouselData.map((item) => <img className='cursor-pointer w-full' role='presentation' src={item.image} alt=""/>)
    //const items = mainCarouselData.map((item) => <img role='presentation' src={item.image} alt=""/>)
    return (
        <AliceCarousel
        responsive={responsive}
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        animationType="fadeout"
        infinite
        controlsStrategy="alternate"

    />
    )
}


export default MainCarousel;
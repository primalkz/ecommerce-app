import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from "react";



const HomeSectionCarousel = ({data,sectionName}) => {

    const [activeIndex,setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1.5 },
        720: { items: 3 },
        1024: { items: 4 },
        1280: { items: 4.5},
        1368: { items: 5.5 }
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item);

    const items =  data.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
    return (
        <div className='border rounded-lg bg-white mx-2 my-0 px-6 py-2 '>
            
            <h2 className='text-start text-2xl font-extrabold py-5 text-gray-800 '>
                {sectionName}
            </h2>

            <div className='relative p-3'>
                <AliceCarousel
                    responsive={responsive}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    controlsStrategy="alternate"
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && 
                    <Button variant="contained" className="z-50"
                        onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: "8rem",
                        right: "0rem",
                        transform: "translate(50%) rotate(90deg)",
                        bgcolor: "white",
                        '&:hover': {
                            backgroundColor: 'rgb(229 231 235)',
                          },
                    }} aria-label='next'>
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />

                    </Button>}


            {activeIndex !== 0 &&
                <Button variant="contained" className="z-50" 
                    onClick={slidePrev}
                sx={{
                    position: 'absolute'
                    , top: "8rem"
                    , left: "0rem"
                    , transform: "translate(-50%) rotate(90deg)"
                    , bgcolor: "white",
                    '&:hover': {
                        backgroundColor: 'rgb(229 231 235)',
                      },
                }} aria-label='next'>
                    
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />

                </Button>}
            </div>

        </div>
    )
}

export default HomeSectionCarousel;
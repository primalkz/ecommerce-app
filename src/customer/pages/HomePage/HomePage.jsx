import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { computer_parts } from '../../../Data/computer_parts';

const HomePage = () => {
    return (
        <div>
            <div>
            <MainCarousel/>
            </div>
            <div className='space-y-10 py-20 flex flex-col justify-center px-10 lg:px-10'>
                <HomeSectionCarousel data={computer_parts} sectionName={"Trending Parts"}/>
                <HomeSectionCarousel data={computer_parts} sectionName={"Prebuilt Desktops"}/>
                <HomeSectionCarousel data={computer_parts} sectionName={"Ryzen CPUs"}/>
                <HomeSectionCarousel data={computer_parts} sectionName={"Intel CPUs"}/>
                <HomeSectionCarousel data={computer_parts} sectionName={"Computer Peripherals"}/>
                
            </div>
        </div>

    )
}

export default HomePage;

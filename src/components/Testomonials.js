import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderImg from "../img/SliderImg.png";


const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px'
}
const slideImages = [
  {
    desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."'
  },
  {
    desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."'
  },
  {
    desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."'
  },
];

const Testomonials = () => {
    return (
      <div className="slide-container testimonialContainer py-[55px] md:py-[150px]">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='flex flex-col coverCenter'>
                <p className="mt-5 text-white text-center font-noto-sans-thai text-[13px] md:text-[24px] font-normal leading-[20px] md:leading-[40px] mx-[50px]">{slideImage.desc}</p>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Testomonials;
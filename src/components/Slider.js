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
  height: '700px'
}
const slideImages = [
  {
    url: SliderImg,
    caption: 'Toffee cake',
    desc:'เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่'
  },
  {
    url: SliderImg,
    caption: 'Toffee cake',
    desc:'เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่'
  },
  {
    url: SliderImg,
    caption: 'Toffee cake',
    desc:'เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่'
  },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='flex flex-col coverCenter' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span className='text-white text-center text-shadow-4px font-Avenir text-[81px] font-bold leading-[68px] tracking-[2.43%] uppercase' style={spanStyle}>{slideImage.caption}</span>
                <p className="max-w-[632px] mt-5 text-white text-center text-shadow font-noto-sans-thai text-2xl font-normal leading-[28px]">{slideImage.desc}</p>
                <button className='w-[208px] h-[56px] mt-[40px] bg-[#E41E25] rounded-full text-2xl leading-[28px] text-white font-noto-sans-thai'>เกี่ยวกับเรา</button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider;
import React from "react";
import { Link } from "react-router-dom";

import HomeSlider from "../components/HomeSlider";
import Slider from "../components/Slider";
import chooseYourMeal1 from "../img/choose-your-meal1.png";
import unpackYourBox1 from "../img/unpack-your-box-1.png";
import cookCreateEnjoy1 from "../img/cook-create-enjoy-1.png";
import curveBorder from "../img/curveBorder.png";
import blogImg1 from "../img/global.jpg";
import blogImg2 from "../img/ceocmw.jpg";
import blogImg3 from "../img/cmwfood.jpg";
import Delicious from "../img/Delicious.png";
import Healthy from "../img/Healthy.png";
import Homemade from "../img/Homemade.png";
import homeImg from "../img/homeImg.png";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import snackBox from "../img/snackBox.png";
import blogimg1 from "../img/blogimg1.png";
import blogimg2 from "../img/blogimg2.png";
import homeGallery1 from "../img/homeGallery1.png";
import homeGallery2 from "../img/homeGallery2.png";
import homeGallery3 from "../img/homeGallery3.png";
import homeGallery4 from "../img/homeGallery4.png";
import homeGallery5 from "../img/homeGallery5.png";

const incentives = [
  {
    name: "DELICIOUS",
    imageSrc: Delicious,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
  {
    name: "HEALTHY",
    imageSrc: Healthy,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
  {
    name: "HOMEMADE",
    imageSrc: Homemade,
    description:
      "เธคยังไงศิลปากร  พาสปอร์ตบัตเตอร์ ตัวเองแคนูศิรินทร์วานิลา ซองแฟร์ฟลุตสคริปต์ รูบิกเดบิตซูชิครัวซองแบตเจ๊ฮวงจุ้ย",
  },
];

const products = [
  {
    id: 1,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product1,
  },
  {
    id: 2,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product2,
  },
  {
    id: 3,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product3,
  },
  {
    id: 4,
    name: "ท๊อฟฟี่ เค้ก",
    color: "toffee Cake",
    price: "฿130",
    href: "#",
    imageSrc: product4,
  },
  // More products...
];

const Posts = [
  {
    id: 1,
    name: "ความหวานของขนม",
    desc: "บัสเปปเปอร์มินต์เอนทรานซ์ แฟลช เยอบีราเจ๊าะแจ๊ะชะโนดแหม็บ ไลน์แมนชั่นพาสตาสต็อก ฮัลโลวีนไฮเอนด์โบว์ลิ่งปิกอัพแมชชีน แรงใจ อัลตรา สี่แยกก๊วน ไอเดียเซาท์แบต บึมเทรนด์มอยส์เจอไรเซอร์ดีกรีบรา",
    href: "#",
    date: "18 March",
    imageSrc: blogimg1,
  },
  {
    id: 2,
    name: "ความหวานของขนม",
    desc: "บัสเปปเปอร์มินต์เอนทรานซ์ แฟลช เยอบีราเจ๊าะแจ๊ะชะโนดแหม็บ ไลน์แมนชั่นพาสตาสต็อก ฮัลโลวีนไฮเอนด์โบว์ลิ่งปิกอัพแมชชีน แรงใจ อัลตรา สี่แยกก๊วน ไอเดียเซาท์แบต บึมเทรนด์มอยส์เจอไรเซอร์ดีกรีบรา",
    href: "#",
    date: "18 March",
    imageSrc: blogimg2,
  },
];
function Home() {
  return (
    <main>
      <section className="homeSlider z-0">
        <Slider />
      </section>

      <section className="bg-white mt-[70px] md:mt-[190px]">
        <div className="mx-auto max-w-7xl sm:px-2  lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[#795E32] font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
                ABOUT US
              </h2>
              <p className="mt-4 text-[#795E32] font-noto-sans-thai text-2xl font-normal leading-[28px]">
                เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
                เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
                บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 place-items-center">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-auto w-[160px] mx-auto"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                    <h3 className="text-[#614B28] font-Avenir text-[28px] md:text-[33px] font-bold">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-[#614B28] font-noto-sans-thai text-[14px] sm:text-[18px] leading-[28px] font-normal">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[80px] md:mt-[190px]">
        <img src={homeImg} className="md:h-auto h-[200px]" alt="" />
      </section>

      <section className="bg-white pt-[40px] md:pt-[190px]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#795E32] font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
              BEST SELLER
            </h2>
            <p className="mt-4 text-[#795E32] font-noto-sans-thai text-[18px] sm:text-2xl font-normal leading-[28px]">
              เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
              เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
              บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4  md:grid-cols-2 md:gap-y-5 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-noto-sans-thai text-[#795E32]">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-lg text-[#795E32] capitalize">
                  {product.color}
                </p>
                <p className="mt-1 text-2xl font-Avenir font-medium text-[#E6A141]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" grid sm:grid-cols-2 min-h-[600px] mt-[70px] md:mt-[190px]">
        <div>
          <img src={snackBox} className="h-full object-cover" alt="" />
        </div>
        <div className="bg-[#293485]  xl:pl-[110px] lg:pl-[80px] pl-[30px] md:py-0 py-[30px]">
          <div className="flex flex-col justify-center h-full">
            <span className="text-white font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px] uppercase">
              SNACK BOX
            </span>
            <p className="max-w-[500px] mt-7 md:mt-5 text-white font-noto-sans-thai text-2xl font-normal leading-[32px] md:leading-[28px]">
              ซิงลีกสุนทรีย์แพนดา รีเสิร์ชอุปการคุณผู้นำแคชเชียร์
              โรแมนติคเซลส์ราเม็งสเกตช์เดโม อริยสงฆ์แครอทล เทคโนแครตเอ๋อมลภาวะ
              แจ็กพ็อต
            </p>
            <button className="w-[208px] h-[56px] mt-6 md:mt-[20px] bg-[#E41E25] rounded-full text-2xl leading-[28px] text-white font-noto-sans-thai">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white  mx-auto mt-[70px] md:mt-[190px]">
        <div className="mx-auto px-4 sm:px-6 max-w-[960px] lg:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#795E32] font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
              BAKERY ARTICLES
            </h2>
            <p className="mt-4 text-[#795E32] font-noto-sans-thai text-[18px] sm:text-2xl font-normal leading-[28px]">
              เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
              เสกสรรค์เซฟตี้เต๊ะราเม็ง
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {Posts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-[30px] font-bold font-noto-sans-thai text-[#795E32] ">
                      <a href={post.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {post.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-base leading-[28px] font-noto-sans-thai text-[#795E32]">
                      {post.desc}
                    </p>
                    <button className="text-[#E6A141] font-bold mt-5">
                      Read More
                    </button>
                  </div>
                  <p className="text-sm font-medium text-[#E6A141]">
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-[60px] mt-[70px] md:mt-[190px]">
        <div className="sm:flex gap-3 sm:px-0 px-4">
          <div className="flex gap-3">
          <div>
            <img
              className="objec-cover rounded-[20px]"
              src={homeGallery1}
              alt=""
            />
            <a href="#">
              <img
                className="objec-cover rounded-[20px] mt-3"
                src={homeGallery2}
                alt=""
              />
            </a>
          </div>
          <div>
            <img
              className="objec-cover rounded-[20px]"
              src={homeGallery3}
              alt=""
            />
            <img
              className="objec-cover rounded-[20px] mt-3"
              src={homeGallery4}
              alt=""
            />
          </div>
          </div>
          <div className="sm:mt-0 mt-4">
            <img
              className="objec-cover rounded-[20px]"
              src={homeGallery5}
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

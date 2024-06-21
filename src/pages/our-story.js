import React from "react";
import ourStoryBgImg from "../img/ourStoryBgImg.png";

import Delicious from "../img/Delicious.png";
import Healthy from "../img/Healthy.png";
import Homemade from "../img/Homemade.png";
import AboutHomebaker from "../img/aboutHomebaker.png";
import ImageFirst from "../img/ImageFirst.png";
import ImageSecond from "../img/ImageSecond.png";
import AwardFirst from "../img/AwardFirst.png";
import Awardsecond from "../img/Awardsecond.png";
import Testomonials from "../components/Testomonials";

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

function OurStory() {
  return (
    <main>
      <section
        className="min-h-[50vh] relative flex items-center coverCenter"
        style={{ background: `url('${ourStoryBgImg}')` }}
      >
        <div className="container mx-auto max-w-[700px] px-6 flex flex-col justify-center text-center min-h-[400px] md:min-h-[600px]">
          <h1 className="text-white text-shadow-lg font-Avenir text-[54px] md:text-[81px] font-bold leading-[68px] tracking-[2.43px] uppercase relative">
            Our story
          </h1>

          <p className="text-white text-shadow-sm font-noto-sans-thai text-2xl font-normal leading-[28px] mt-5">
            เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          </p>
        </div>
      </section>
      <section className="bg-white mt-[70px] md:mt-[120px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[#795E32] font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
                ABOUT US
              </h2>
              <p className="mt-4 text-[#795E32] font-noto-sans-thai text-[20px] sm:text-2xl font-normal leading-[28px]">
                เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
                เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
                บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 place-items-center">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-auto w-[210px] mx-auto"
                      src={incentive.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                    <h3 className="text-[#614B28] font-Avenir text-[33px] font-bold">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-[#614B28] font-noto-sans-thai text-[18px] leading-[28px] font-normal">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mt-[90px] lg:mt-[180px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4 md:flex justify-center items-center">
          <div className="sm:w-1/2">
            <img src={AboutHomebaker} alt="" />
          </div>
          <div className="sm:w-1/2 md:pl-[50px] md:px-0 px-[15px] md:mt-0 mt-5">
            <h3 className="text-[36px] md:text-[48px] text-[#795E32] font-bold leading-[52px] sm:leading-[68px]">
              About <br /> Homebakery
            </h3>
            <p className="mt-6 text-[#795E32] font-noto-sans-thai text-xl font-normal">
              ซิงลีกสุนทรีย์แพนดา รีเสิร์ชอุปการคุณผู้นำแคชเชียร์โรแมน
              ติคเซลส์ราเม็งสเกตช์เดโม อริยสงฆ์แครอทล เทคโนแครตเอ๋อมลภาวะ
              แจ็กพ็อต
            </p>
            <p className="mt-6 text-[#795E32] font-noto-sans-thai text-xl font-normal">
              ซิงลีกสุนทรีย์แพนดา รีเสิร์ชอุปการคุณผู้นำแคชเชียร์โรแมน
              ติคเซลส์ราเม็งสเกตช์เดโม อริยสงฆ์แครอทล เทคโนแครตเอ๋อมลภาวะ
              แจ็กพ็อต
            </p>
            <button className="mt-[50px] text-[16px] font-normal bg-[#E41E25] text-white px-6 py-[5px] rounded-full">
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white mt-[80px] md:mt-[180px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4 text-center">
          <h4 className="text-[#E6A141] font-normal text-[34px] font-caveat">
            home bakery
          </h4>
          <h3 className="text-[36px] md:text-[48px] text-[#795E32] font-bold leading-[52px] sm:leading-[68px]">
            WHERE TO FIND?
          </h3>
          <p className="mt-3 text-[#614B28] text-[20px] font-noto-sans-thai font-normal sm:px-0 px-4">
            เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
            เสกสรรค์เซฟตี้เต๊ะราเม็ง <br /> ครัวซองต์ร็อคมอบตัว
            บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
          </p>
          <div className="flex justify-center mt-[70px]">
            <img src={ImageSecond} className="mr-[50px] sm:mr-[100px]" alt="" />
            <img src={ImageFirst} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-white mt-[100px] md:mt-[180px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4 text-center">
          <h4 className="text-[#E6A141] font-normal text-[28px] font-caveat">
            home bakery
          </h4>
          <h3 className="text-[36px] md:text-[48px] text-[#795E32]  font-bold leading-[68px]">
            OUR AWARDS
          </h3>
          <p className="mt-3 text-[#614B28] text-[20px] font-noto-sans-thai font-normal sm:px-0 px-4">
            เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
            เสกสรรค์เซฟตี้เต๊ะราเม็ง <br />
            ตัวตนราเม็ง เสกสรรค์เซฟตี้เต๊ะราเม็ง
          </p>
          <div className="sm:flex justify-center mt-[70px] sm:px-0 px-4">
            <div className="sm:w-1/2 rounded-lg">
              <img src={AwardFirst} alt="" />
              <div className="bg-[#293485] px-5 sm:px-[48px] py-[23px] rounded-b-xl text-left">
                <h4 className="text-white text-[30px] leading-[68px] font-noto-sans-thai font-bold">
                  ร้านเบเกอรี่ต้นแบบ
                </h4>
                <p className="text-white font-noraml text-base font-noto-sans-thai">
                  บัสเปปเปอร์มินต์เอนทรานซ์ แฟลช เยอบีราเจ๊าะแจ๊ะชะโนดแหม็บ
                  ไลน์แมนชั่นฮัลโลวีนไฮเอนด์โบว์ลิ่งปิกอัพแมชชีน
                </p>
                <button className="mt-3 text-white font-bold text-base">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 rounded-lg sm:pt-0 pt-5 sm:ml-[20px]">
              <img src={Awardsecond} className="rounded-xl" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mt-[70px] md:mt-[110px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4 text-center">
          <h4 className="text-[#E6A141] font-normal text-[28px]">
            home bakery
          </h4>
          <h3 className="text-[36px] md:text-[48px] text-[#795E32] font-bold leading-[48px] sm:leading-[68px]">
            Voice to Customers
          </h3>
          <p className="mt-3 text-[#614B28] text-[20px] font-noto-sans-thai font-normal sm:px-0 px-4">
            เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
            เสกสรรค์เซฟตี้เต๊ะราเม็ง
            <br />
            ตัวตนราเม็ง เสกสรรค์เซฟตี้เต๊ะราเม็ง
          </p>
        </div>
      </section>
      <section className="bg-[#293485] mt-[110px]">
        <div className="mx-auto max-w-7xl px-[15px] md:px-[50px]">
          <Testomonials />
        </div>
      </section>
    </main>
  );
}

export default OurStory;

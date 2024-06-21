import React from "react";
import youtube from "../img/youtube.png";
import fb_messenger from "../img/fb_messenger.png";
import Facebook from "../img/Facebook.png";
import line from "../img/line.png";

const ContactUs = () => {
  return (
    <main>
      <section>
        <div className="w-full h-[555px]">
          <iframe
            title="Google Map"
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Home%20Bakery%20295%20%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2%20%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87%E0%B8%94%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%95%20%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%94%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%95%20%E0%B8%81%E0%B8%97%E0%B8%A1.%2010300%20Kota%20Kinabalu+(Home%20Bakery)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto md:flex justify-around my-[70px] lg:my-[140px] md:px-0 px-4">
        <div>
          <p className="text-[#795E32] text-[36px] md:text-[48px] leading-[68px] font-avenir-bold tracking-[1.44px]">
            CONTACT US
          </p>
          <p className="text-[#E6A141] text-lg font-Avenir mt-[20px] md:mt-[100px]">
            Send Message
          </p>
          <div className="flex gap-x-7 mt-3 items-center">
            <img src={line} className="h-[30px] md:h-[50px] w-auto" alt="" />
            <img src={Facebook} className="h-[30px] md:h-[50px] w-auto" alt="" />
            <img src={fb_messenger} className="h-[30px] md:h-[50px] w-auto" alt="" />
            <img src={youtube} className="h-[24px] md:h-[50px] w-auto" alt="" />
          </div>
        </div>

        <div className="rightMain flex flex-col gap-y-7 md:mt-0 mt-3">
          <div className="max-w-[250px]">
            <p className="text-[#E6A141] text-lg font-avenir-bold">
              Home Bakery{" "}
            </p>
            <p className="text-[#795E32] text-lg font-noto-sans-thai">
              295 ถนนนครราชสีมา แขวงดุสิต เขตดุสิต กทม. 10300
            </p>
          </div>
          <div className="max-w-[250px]">
            <p className="text-[#E6A141] text-lg font-avenir-bold">Tel</p>
            <p className="text-[#795E32] text-lg font-noto-sans-thai">
              {" "}
              02-244-5458, 02-244-5459
            </p>
          </div>
          <div className="max-w-[250px]">
            <p className="text-[#E6A141] text-lg font-avenir-bold">Email</p>
            <p className="text-[#795E32] text-lg font-noto-sans-thai">
              {" "}
              homebakery.sdu@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default ContactUs;

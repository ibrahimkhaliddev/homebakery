import React from "react";
import snackBox from "../img/snackBox.png";
import snackBox1 from "../img/snackBox1.png";
import snackBox2 from "../img/snackBox2.png";
import snackBox3 from "../img/snackBox3.png";
import snackBox4 from "../img/snackBox4.png";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import timeline_icon_1 from "../img/timeline_icon_1.svg";
import timeline_icon_2 from "../img/timeline_icon_2.svg";
import timeline_icon_3 from "../img/timeline_icon_3.svg";
import timeline_icon_4 from "../img/timeline_icon_4.svg";

const snackboxes = [
  {
    name: "ประหยัดขึ้น",
    imageSrc: snackBox1,
    description: "ขนมเริ่มต้นเพียง 29 บาท เลือกชุดเบรคได้เอง",
  },
  {
    name: "สดใหม่ทุกวัน",
    imageSrc: snackBox2,
    description: "ขนมชิ้นใหญ่ อบใหม่ทุกวัน ทุกครั้งที่จัดสั่ง",
  },
  {
    name: "ไม่ใส่วัตถุกันเสีย",
    imageSrc: snackBox3,
    description: "ขนมทุกชิ้น 0% Transfat ปลอดภัยจากวัตถุกันเสีย",
  },
  {
    name: "บรรจุแยกชิ้น",
    imageSrc: snackBox4,
    description: "ใส่ใจในการบรรจุขนม ปลอดภัย สะอาด",
  },
];

const products = [
  {
    id: 1,
    name: "ขนมทานเล่นชุดเล็ก",
    color: "mini Snack box",
    price: "฿29",
    href: "#",
    imageSrc: product1,
  },
  {
    id: 2,
    name: "ขนมทานเล่นชุดกลาง",
    color: "middle Snack box",
    price: "฿39",
    href: "#",
    imageSrc: product2,
  },
  {
    id: 3,
    name: "ขนมทานเล่นชุดใหญ่",
    color: "large Snack box",
    price: "฿49",
    href: "#",
    imageSrc: product3,
  },
  {
    id: 4,
    name: "ขนมทานเล่นพรีเมียม",
    color: "VIP Snack box",
    price: "฿59",
    href: "#",
    imageSrc: product4,
  },
  // More products...
];

function SnackBox() {
  return (
    <main>
      <section className=" grid sm:grid-cols-2 min-h-[600px]">
        <div>
          <img src={snackBox} className="h-full object-cover" alt="" />
        </div>
        <div className="bg-[#293485]  xl:pl-[110px] lg:pl-[80px] pl-[30px]">
          <div className="flex flex-col justify-center h-full">
            <span className="text-white font-Avenir text-[48px] font-bold leading-[68px] tracking-[1.44px] uppercase">
              SNACK BOX
            </span>
            <p className="max-w-[430px] mt-5 text-white font-noto-sans-thai text-lg font-normal leading-[30px]">
              ซิงลีกสุนทรีย์แพนดา รีเสิร์ชอุปการคุณผู้นำแคชเชียร์
              โรแมนติคเซลส์ราเม็งสเกตช์เดโม อริยสงฆ์แครอทล เทคโนแครตเอ๋อมลภาวะ
              แจ็กพ็อต
            </p>
            <button className="w-[200px] h-[50px] mt-[20px] bg-[#E41E25] rounded-full text-base leading-[28px] text-white font-noto-sans-thai">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white mt-[110px]">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl mx-auto text-center">
              <h4 className="text-[#E6A141] font-normal font-caveat text-[28px]">
                home bakery
              </h4>
              <h2 className="text-[#795E32] font-Avenir uppercase text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
                Snack Box
              </h2>
              <p className="mt-4 text-[#795E32] font-noto-sans-thai text-[20px] md:text-2xl font-normal leading-[28px]">
                เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
                เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
                บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 place-items-center">
              {snackboxes.map((snackBox) => (
                <div key={snackBox.name} className="block">
                  <div className="sm:flex-shrink-0">
                    <img
                      className="h-auto w-[160px] mx-auto"
                      src={snackBox.imageSrc}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 text-center">
                    <h3 className="text-[#614B28] font-noto-sans-thai text-[28px] sm:text-[30px] font-bold">
                      {snackBox.name}
                    </h3>
                    <p className="mt-2 text-[#614B28] font-noto-sans-thai text-[18px] leading-[28px] font-normal px-6">
                      {snackBox.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-[70px] md:mt-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-[#E6A141] font-normal font-caveat text-[28px]">
              home bakery
            </h4>
            <h2 className="text-[#795E32] font-Avenir text-[36px] md:text-[48px] font-bold leading-[68px] tracking-[1.44px]">
              BEST SELLER
            </h2>
            <p className="mt-4 text-[#795E32] font-noto-sans-thai text-2xl font-normal leading-[28px]">
              เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
              เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
              บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-y-0 md:grid-cols-2 md:gap-y-5 lg:gap-x-8">
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

      <section>
        <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-8 mt-[70px] sm:mt-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-[#E6A141] font-normal font-caveat text-[28px]">
              our product
            </h4>
            <h2 className="text-[#795E32] font-noto-sans-thai text-[28px] sm:text-[38px] font-bold leading-[40px] sm:leading-[68px] tracking-[1.44px]">
              ขั้นตอนการสั่งซื้อขนมทานเล่น ( Snack Box )
            </h2>
            <p className="mt-4 text-[#795E32] font-noto-sans-thai text-[20px] sm:text-2xl font-normal leading-[28px]">
              เยลลี่ซีเรียส สุนทรีย์ซีเนียร์เรซินโปรเจกต์คัตเอาต์ ตัวตนราเม็ง
              เสกสรรค์เซฟตี้เต๊ะราเม็ง ครัวซองต์ร็อคมอบตัว
              บึมเพียวปูอัดแครกเกอร์เจล ความหมายละอ่อน
            </p>
          </div>
        </div>
        <div class="container mx-auto sm:px-4 mt-[60px]">
          <div class="relative wrap overflow-hidden">
            <div class="border-2-2 absolute border-opacity-20 border-[#E6A141] h-full border left-1/2"></div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-[#E6A141] sm:w-12 sm:h-12 w-9 h-9 justify-center w-12 h-12 rounded-full">
                <img src={timeline_icon_1} className="sm:w-auto w-[15px]" alt="" />
              </div>
              <div class="order-1  w-5/12 lg:px-6 px-2 sm:py-2 timeline_main timeline3 pl-[0px] lg:pl-28">
                <h3 class="mb-1 font-semibold font-noto-sans-thai text-[#795E32] text-[20px] sm:text-[30px]">
                  สั่งสินค้าล่วงหน้า
                </h3>
                <p class="text-[#795E32] text-[14px] sm:text-[20px] leading-[28px] font-noto-sans-thai max-w-[268px]">
                  กรุณาสั่งสินค้าล่วงหน้า 2 วัน ก่อนเวลา 17.00 น.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-[#E6A141] justify-center sm:w-12 sm:h-12 w-9 h-9 rounded-full">
                <img src={timeline_icon_2} className="sm:w-auto w-[15px]" alt="" />
              </div>
              <div class="order-1  w-5/12 lg:px-6 px-2 sm:py-2 sm:text-right timeline_main timeline2 pr-[0px] lg:pr-28">
                <h3 class="mb-1 font-semibold font-noto-sans-thai text-[#795E32] text-[20px] sm:text-[30px]">
                  ราคายังไม่รวมภาษี
                </h3>
                <p class="text-[#795E32] text-[14px] sm:text-[20px] leading-[28px] font-noto-sans-thai">
                  กรุณามัดจำสินค้า 50% ณ วันสั่งซื้อสินค้า
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-[#E6A141] sm:w-12 sm:h-12 w-9 h-9 justify-center w-12 h-12 rounded-full">
                <img src={timeline_icon_3} className="sm:w-auto w-[15px]" alt="" />
              </div>
              <div class="order-1  w-5/12 lg:px-6 px-2 sm:py-2 timeline_main timeline3 pl-[0px] lg:pl-28">
                <h3 class="mb-1 font-semibold font-noto-sans-thai text-[#795E32] text-[20px] sm:text-[30px]">
                  การเปลี่ยนแปลง ยกเลิก
                </h3>
                <p class="text-[#795E32] text-[14px] sm:text-[20px] leading-[28px] font-noto-sans-thai max-w-[268px]">
                  กรุณาแจ้งล่วงหน้าอย่างน้อย 1 วัน ก่อนเวลา 09.00 น.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-[#E6A141] sm:w-12 sm:h-12 w-9 h-9 justify-center w-12 h-12 rounded-full">
                <img src={timeline_icon_4} className="sm:w-auto w-[15px]" alt="" />
              </div>
              <div class="order-1  w-5/12 lg:px-6 px-2 sm:py-2 sm:text-right timeline_main timeline2 pr-[0px] lg:pr-28">
                <h3 class="mb-1 font-semibold font-noto-sans-thai text-[#795E32] text-[20px] sm:text-[30px]">
                  มีบริการจัดส่ง
                </h3>
                <p class="text-[#795E32] text-[14px] sm:text-[20px] leading-[28px] font-noto-sans-thai ">
                  บริการจัดส่งถึงที่ ค่าบริการคิดตามระยะทาง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[850px] mx-auto contact-us-form-sec py-[90px] md:py-[190px] md:px-0 px-4">
        <h2 className="text-[#795E32] text-[28px] lg:text-4xl font-noto-sans-thai font-bold uppercase">
          ติดต่อสั่งซื้อชุดเบรค ( Snack Box )
        </h2>
        <form action="#" method="POST" className="mt-[50px]">
          <div className="flex flex-col gap-y-5">
            <div className="">
              <label
                htmlFor="first-name"
                className="block w-full font-bold text-md"
              >
                First & Last Name (required)
              </label>
              <div className="mt-1 w-full">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="first-name"
                  className="form-input w-full"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block w-[200px] font-bold text-md"
              >
                Email *
              </label>
              <div className="mt-1 w-full">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="form-input w-full"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="phone"
                className="block w-[200px] font-bold text-md"
              >
                Phone *
              </label>
              <div className="mt-1 w-full">
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="form-input w-full"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="message"
                className="block w-[200px] font-bold text-md"
              >
                Message
              </label>
              <div className="mt-1 w-full">
                <textarea
                  name="message"
                  rows={8}
                  id="message"
                  className="form-textarea w-full"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="enduser"
                className="block w-[200px] font-bold text-md"
              ></label>
              <div className="mt-1 w-full text-right">
                <button
                  type="submit"
                  class=" bg-[#D73A32] rounded-full py-6 px-10 text-[18px] leading-[14px] font-noto-sans-thai text-white"
                >
                  ติดต่อและสั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SnackBox;

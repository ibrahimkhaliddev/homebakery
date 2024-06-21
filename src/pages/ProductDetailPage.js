import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import productDetail1 from "../img/productDetail1.png";
import productDetail2 from "../img/productDetail2.png";
import productDetail3 from "../img/productDetail3.png";
import ImageSlider from "../components/ImageSlider";

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

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
      date: "July 16, 2023",
      datetime: "2021-07-16",
      author: "John Doe",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};


// const laveenaRelatedPro = [
//   {
//     id: 1,
//     name: "Belgium Flourless Chocolate Cake",
//     price: "149.00",
//     href: "#",
//     imageSrc: BelgiumChocolateCake,
//     imageAlt: "Hand stitched, orange leather long wallet.",
//   },
//   {
//     id: 1,
//     name: "Pudding Chocolate Cake",
//     price: "500.00",
//     href: "#",
//     imageSrc: PuddingChocolateCake,
//     imageAlt: "Hand stitched, orange leather long wallet.",
//   },
//   {
//     id: 1,
//     name: "Chocolate Mousse Cake",
//     price: "500.00",
//     href: "#",
//     imageSrc: ChocolateMousseCake,
//     imageAlt: "Hand stitched, orange leather long wallet.",
//   },
//   {
//     id: 1,
//     name: "ORIGINAL MILO",
//     price: "500.00",
//     href: "#",
//     imageSrc: ORIGINALMILO,
//     imageAlt: "Hand stitched, orange leather long wallet.",
//   },
// ];

const product = {
  name: "ท๊อฟฟี่เค้ก",
  category:'toffee Cake',
  price: "129",
  saleprice: "129",
  href: "#",
  desc: "ชัตเตอร์เซลส์แมนสเตอริโอเมจิค เลดี้ เวิร์ค เทรลเล่อร์โค้กโปรเจ็ค โกลด์ แป๋วละตินคีตราชันดั๊มพ์ เทคคาแร็คเตอร์คอนโด",
  images: [
    {
      id: 1,
      imageSrc: productDetail1,
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: productDetail3,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: productDetail3,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 2,
      imageSrc: productDetail2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  Flavor: [
    { name: "Vanilla", inStock: true },
    { name: "Chocolate", inStock: true },
    { name: "Coconut", inStock: true },
    { name: "Coffee", inStock: true },
  ],
  sizes: [
    { name: "1 Pound", inStock: true },
    { name: "2 Pound", inStock: true },
    { name: "3 Pound", inStock: true },
  ],
};

const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailPage() {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
  

      <main className="mx-auto mt--8 lg:mt-16 px-4 pb-10 sm:px-6 sm:pb-10 lg:mx-[100px] lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 flex flex-col productDetailMain">
          <div className="lg:col-span-5 lg:col-start-8 mt-10 lg:mt-0 productDetail order-2">
            <div className="pt-10">
              <h1 className="text-[48px] leading-[48px] font-bold text-[#795E32] font-noto-sans-thai">
                {product.name}
              </h1>
              <p className="text-[20px] font-bold capitalize text-[#795E32] mt-1">
                {product.category}
              </p>
              <p className="text-[20px] font-bold text-[#E6A141] mt-1 flex gap-x-2 items-center">
                <span className="text-[32px]">{product.saleprice}</span>
                <del className="del text-[16px] text-[#C4C4C4]">{product.price}</del>

                
              </p>
              <p className="text-[16px] font-normal font-noto-sans-thai text-[#212121] mt-5">
                {product.desc}
              </p>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 order-1 productImage mr-10">
            <h2 className="sr-only">Images</h2>
            <ImageSlider />
          </div>

          <div className="mt-8 lg:col-span-5 productVariations order-3">
            <div>
              {/* Size picker */}
              

            
              <div className="flex justify-between items-center mt-8 gap-x-3">
                <div className="custom-number-input w-32">
                  <div className="flex flex-row w-full rounded-lg relative h-[50px] border border-[#C4C4C4]">
                    <button
                      onClick={decrement}
                      className="text-gray-600 hover:text-gray-700 h-full w-20 rounded-l-lg cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                      name="custom-input-number"
                      value={value}
                    />
                    <button
                      onClick={increment}
                      className="bg-white text-gray-600 hover:text-gray-700 h-full w-20 rounded-r-lg cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent  transition-all duration-200 bg-[#E6A141] py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-16">
          <div className="mx-auto lg:mx-[100px] lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="">
                <Tab.List className="-mb-px justify-center flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "border-black text-[#E6A141]"
                          : "border-transparent",
                        "whitespace-nowrap font-semibold font-noto-sans-thai text-2xl border-b-2 py-6"
                      )
                    }
                  >
                    รายละเอียดเพิ่มเติม
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "border-black text-[#E6A141]"
                          : "border-transparent",
                        "whitespace-nowrap font-semibold font-noto-sans-thai text-2xl border-b-2 py-6"
                      )
                    }
                  >
                    ข้อมูลเพิ่มเติม
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel>
                  <div className="mt-11">
                    <div className="">
                      <p className="font-medium text-lg leading-[32px] font-noto-sans-thai">
                        เนื้อหาจำลองแบบเรียบๆ
                        ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
                        มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
                        16
                        เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
                        อยู่ยงคงกระพันมาไม่ใช่แค่
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="mb-5">
                  
                  <div className="sm:flex px-3 py-2">
                    <p className="sm:w-[30%] text-[15px] text-[#383838] font-medium">
                      Flavor
                    </p>
                    <p className="sm:w-[70%] text-[15px] font-noraml text-[#383838]">
                      Vanilla, Chocolate, Coconut, Coffee, Orange, Pandan
                    </p>
                  </div>
                  <div className="bg-[#F8F9FB] sm:flex px-3 py-2">
                    <p className="sm:w-[30%] text-[15px] text-[#383838] font-medium">
                      Size
                    </p>
                    <p className="sm:w-[70%] text-[15px] font-noraml text-[#383838]">
                      1 Pound, 2 Pound, 3 Pound
                    </p>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        <section className="bg-white sm:pt-[130px] pb-[190px]">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
            <div className="">
              <h2 className="text-[#795E32] font-Avenir text-[48px] font-bold leading-[68px] tracking-[1.44px]">
                RELATED PRODUCTS
              </h2>
            </div>

            <div className="mt-[60px] grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
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

        {/* 
        <section className="bg-white hidden">
          <div className="mx-auto  py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="">
              <h2 className="text-center text-[48px] font-normal leading-[53px]">
                Related products
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 md:grid-cols-2 md:gap-y-0 lg:gap-x-4 lg:mt-16">
              {laveenaRelatedPro.map((product) => (
                <div
                  key={product.id}
                  className="group relative sm:w-auto w-[250px] mx-auto"
                >
                  <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-64">
                    <img
                      src={product.imageSrc}
                      className="h-[230px] w-[230px] rounded-[20px] object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-[21px] font-semibold text-[#3c0603]">
                    <a href={product.href}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#d5828b]">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import productImg1 from "../img/productImg1.png";
import productImg2 from "../img/productImg2.png";
import productImg3 from "../img/productImg3.png";
import productImg4 from "../img/productImg4.png";
import productImg5 from "../img/productImg5.png";
import productImg6 from "../img/productImg6.png";
import productImg7 from "../img/productImg7.png";
import productImg8 from "../img/productImg8.png";
import productFilterImg from "../img/productFilterImg.png";

import IconRight from "../img/icon-right.png";

function HomeBakeryShop() {
  const products = [
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg1,
    },
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg2,
    },
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg6,
    },
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg3,
    },

    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg7,
    },
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg8,
    },{
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg1,
    },{
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg5,
    },{
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg8,
    },{
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg3,
    },
    {
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg4,
    },{
      name: "ท๊อฟฟี่ เค้ก",
      price: "฿130",
      href: "#",
      imageSrc: productImg2,
    },
  ];

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
  const subCategories = [
    { name: "Bakery", href: "#", noProduct: "3" },
    { name: "Cake", href: "#", noProduct: "13" },
    { name: "Meal", href: "#", noProduct: "4" },
    { name: "Drinks", href: "#", noProduct: "2" },
    { name: "Snackbox", href: "#", noProduct: "1" },
  ];

  const flavor = [
    { name: "Toffee", href: "#", noProduct: "3" },
    { name: "Chocolate", href: "#", noProduct: "13" },
    { name: "Vanilla", href: "#", noProduct: "4" },
    { name: "Fruit", href: "#", noProduct: "2" },
  ];

  const size = [
    { name: "Small", href: "#", noProduct: "3" },
    { name: "Medium", href: "#", noProduct: "13" },
    { name: "Large", href: "#", noProduct: "4" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="bg-white py-5 lg:py-16">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl sm:px-4  ">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div>
                  <div className=" pb-10 hidden lg:block pt-20">
                    <h3 className="text-2xl text-[#795E32] font-normal leading-[27px]">
                      Filter by price
                    </h3>
                    <input
                      type="range"
                      class="w-full h-1 mb-6 bg-[#795E32] rangeInput rounded-lg appearance-none cursor-pointer range-sm"
                    />
                    <div className="mt-5 flex justify-between items-center">
                      <p className="text-base font-noto-sans-thai font-normal text-[#795E32]">
                        ราคา 39 - 399
                      </p>
                      <button className="text-[12px] font-medium bg-[#E6A141] leading-[30px] font-noto-sans-thai rounded-md px-6 py-1 text-white">
                        คัดกรองราคา
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <img src={productFilterImg} className="w-full" alt="" />
                      <p className="text-2xl leading-[40px] font-bold text-[#795E32] absolute top-8 left-12">
                        10% off 10% off
                      </p>
                    </div>
                  </div>

                  <div className=" pb-10 pt-10 hidden lg:block">
                    <label
                      htmlFor="Search"
                      className="block text-base font-medium text-[#795e328c]"
                    >
                      Search
                    </label>
                    <div className="relative mt-1 rounded-lg shadow-sm bg-[#ECECEC]">
                      <input
                        type="text"
                        name="Search"
                        id="Search"
                        className="block w-full text-base rounded-lg bg-[#ECECEC] h-[40px] px-5 border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Search products…"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <img src={IconRight} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-10  border-[#E1E8ED] hidden lg:block">
                    <form className="">
                      <h3 className="text-[#795E32] text-2xl mb-2">Categories</h3>
                      <ul
                        role="list"
                        className="space-y-2  pb-6 text-base font-medium text-[#8A8989]"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a
                              className="text-[#8A8989] text-base font-normal"
                              href={category.href}
                            >
                              {category.name}
                            </a>
                           
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>

                  <div className="pt-10  border-[#E1E8ED] hidden lg:block">
                    <form className="">
                      <h3 className="text-[#795E32] text-2xl mb-2">Flavours</h3>
                      <ul
                        role="list"
                        className="space-y-2  pb-6 text-base font-medium text-[#8A8989]"
                      >
                        {flavor.map((categoryFilter) => (
                          <li key={categoryFilter.name}>
                            <a
                              className="text-[#8A8989] text-base font-normal"
                              href={categoryFilter.href}
                            >
                              {categoryFilter.name}
                            </a>
                           
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>

                  <div className="pt-10  border-[#E1E8ED] hidden lg:block">
                    <form className="">
                      <h3 className="text-[#795E32] text-2xl mb-2">Size</h3>
                      <ul
                        role="list"
                        className="space-y-2  pb-6 text-base font-medium text-[#8A8989]"
                      >
                        {size.map((sizeFilger) => (
                          <li key={sizeFilger.name}>
                            <a
                              className="text-[#8A8989] text-base font-normal"
                              href={sizeFilger.href}
                            >
                              {sizeFilger.name}
                            </a>
                            
                          </li>
                        ))}
                      </ul>
                    </form>
                  </div>
                </div>

                {/* Product gridd */}
                <div className="lg:col-span-3">
                  {/* Replace with your content */}
                  <div className="flex sm:items-baseline flex-col sm:flex-row items-center justify-between mb-10">
                    <h3 className="text-[#E6A141] font-medium font-noto-sans-thai text-base">
                    แสดงสินค้า 1-12 จาก 12 ผลลัพธ์
                    </h3>
                    <div className="flex items-center">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div className=" bg-[#795E32] rounded-full sm:px-[10px]  lg:px-5 px-4 py-1 mt-1">
                          <Menu.Button className="group inline-flex justify-center text-base font-medium text-white font-noto-sans-thai  uppercase">
                          เรียงลำดับ
                            <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-white group-hover:text-white"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {sortOptions.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <a
                                      href={option.href}
                                      className={classNames(
                                        option.current
                                          ? "font-medium text-[#68825B]"
                                          : "text-[#68825B]",
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {option.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                      >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 grid grid-cols-1 place-items-center sm:place-items-start gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-8 lg:gap-x-4">
                      {products.map((product) => (
                        <div key={product.id} className="group relative">
                          <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-64">
                            <img
                              src={product.imageSrc}
                              className="h-[230px] w-[230px] rounded-[20px] object-cover object-center"
                            />
                          </div>
                          <h3 className="mt-4 text-[21px] font-semibold text-[#3c0603]">
                            <a href={product.href} className="font-noto-sans-thai text-[#795E32]">
                              
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                          <p className="mt-2 text-base font-medium text-[#E6A141]">
                            {product.price}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="text-center space-x-5 mt-20">
                      <span className="text-[#D5828B]">1</span>
                      <span>2</span>
                    </div>
                  </div>

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default HomeBakeryShop;

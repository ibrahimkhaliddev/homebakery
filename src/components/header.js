import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import HomeBakeryLogo from "../img/Logo-Home-Bakery-Logo.png";
import burgerIcon from "../img/burger-menu-svgrepo-com.svg";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentChartBarIcon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-[1290px]  items-center justify-between py-6 md:space-x-10 lg:flex hidden">
          <div>
            <ul class="max-w-md space-y-1 text-[#795E32] hover:text-[#E6A141] font-Avenir text-[19px] font-aviner-medium tracking-[0.3%]">
              <li class="flex items-center">
                <img src={phone} className="mr-2" alt="" />
                02-244-5458, 02-244-5459
              </li>
              <li class="flex items-center">
                <img src={mail} className="mr-2" alt="" />
                homebakery.sdu@gmail.com
              </li>
            </ul>
          </div>
          <div className="mx-auto ">
            <a href="/">
              <img src={HomeBakeryLogo} className="w-[216px]" alt="" />
            </a>
          </div>
          <div class="inline-flex" role="group">
            <button
              type="button"
              class="inline-block  px-4 text-xs font-medium uppercase text-[#E6A141] text-right text-shadow-md font-Avenir text-[19px] font-900
              border-r border-solid border-#795E32"
            >
              TH
            </button>
            <button
              type="button"
              class="inline-block  px-3 text-xs font-medium uppercase text-[#795E32] hover:text-[#E6A141] text-right text-shadow-md font-Avenir text-[19px] font-900"
            >
              EN
            </button>
          </div>
        </div>

        <div className="lg:hidden block mt-5">
          <div className="flex justify-between pl-2 pr-5">
            <Link to="/">
              <img className="w-[100px]" src={HomeBakeryLogo} alt="" />
            </Link>
            <button className="" onClick={() => setOpenMenu(!openMenu)}>
              <img src={burgerIcon} className="sm:w-[50px] w-[30px]" alt="" />
            </button>
          </div>
          {openMenu && (
            <div className="bg-white flex flex-col mt-5">
              <Link to="/" className="border-b py-4 px-4 ">
                home
              </Link>
              <Link to="/our-story" className="border-b py-4 px-4 ">
                our story
              </Link>
              <Link to="/" className="border-b py-4 px-4 ">
                product
              </Link>
              <Link to="/snackbox" className="border-b py-4 px-4 ">
                snack box
              </Link>
              <Link to="/bakery-article" className="border-b py-4 px-4 ">
                bakery article
              </Link>
              <Link to="/contact-us" className="border-b py-4 px-4 ">
                contact us
              </Link>
            </div>
          )}
        </div>

        <nav
          class="mx-auto hidden sm:flex max-w-7xl items-center justify-center p-6 lg:px-8 border-t border-solid border-[#C4B7A3]"
          aria-label="Global"
        >
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="flex lg:gap-x-20">
            <Link
              to="/"
              class={`${
                location.pathname === "/" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Home
            </Link>
            <Link
              to="/our-story"
              class={`${
                location.pathname === "/our-story" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Our story
            </Link>
            <Link
              to="/product"
              class={`${
                location.pathname === "/product" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Product
            </Link>
            <Link
              to="/snackbox"
              class={`${
                location.pathname === "/snackbox" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Snack box
            </Link>
            <Link
              to="/bakery-article"
              class={`${
                location.pathname === "/bakery-article" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              bakery article
            </Link>
            <Link
              to="/contact-us"
              class={`${
                location.pathname === "/contact-us" ? "text-[#E6A141]" : ""
              } text-[#795E32] hover:text-[#E6A141] text-center font-Avenir text-[24px] font-500 lowercase `}
            >
              Contact Us
            </Link>
          </div>
        </nav>
        {/* <!-- component --> */}
        <div class="group fixed  right-0 bottom-6 p-2  flex items-end justify-end w-24 h-24 z-50">
          {/* <!-- main --> */}
          <div class="text-white  flex flex-col items-center justify-center p-5 gap-3  z-[99999] absolute  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31 54.5971C44.9107 54.5971 56.1875 43.6763 56.1875 30.2048C56.1875 16.7333 44.9107 5.8125 31 5.8125C17.0893 5.8125 5.8125 16.7333 5.8125 30.2048C5.8125 37.5317 9.14826 44.1041 14.4293 48.5753V53.5114C14.4293 55.4406 16.3943 56.7346 18.1464 55.959L23.6239 53.5345C25.9568 54.2254 28.4336 54.5971 31 54.5971Z"
                fill="url(#paint0_linear_103_926)"
              />
              <path
                d="M24.9686 25.0196L17.6646 35.0086C16.8815 36.0796 18.2899 37.3662 19.3621 36.5593L25.5988 31.8658C26.2336 31.3881 27.1235 31.3816 27.7657 31.8501L33.3125 35.8965C34.3762 36.6724 35.8965 36.4493 36.6709 35.4034L44.331 25.0598C45.1254 23.987 43.7062 22.6899 42.6324 23.5074L36.0387 28.527C35.4038 29.0103 34.5092 29.0192 33.864 28.5486L28.3353 24.5154C27.2671 23.7362 25.7397 23.9649 24.9686 25.0196Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_926"
                  x1="31"
                  y1="5.8125"
                  x2="22.918"
                  y2="55.913"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00B1FF" />
                  <stop offset="1" stop-color="#006BFF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="56"
              viewBox="0 0 58 56"
              fill="none"
            >
              <ellipse
                cx="29.0379"
                cy="27.9146"
                rx="24.7742"
                ry="24.4253"
                fill="url(#paint0_linear_103_925)"
              />
              <path
                d="M38.2641 35.3845L39.3645 28.4905H32.4802V24.0187C32.4802 22.1323 33.4401 20.2923 36.5236 20.2923H39.6555V14.4231C39.6555 14.4231 36.8144 13.9573 34.0994 13.9573C28.4271 13.9573 24.7231 17.2598 24.7231 23.2362V28.4905H18.4204V35.3845H24.7231V52.0511C25.9884 52.2421 27.2829 52.3399 28.6016 52.3399C29.9203 52.3399 31.2148 52.2421 32.4802 52.0511V35.3845H38.2641Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_103_925"
                  x1="29.0379"
                  y1="3.48926"
                  x2="29.0379"
                  y2="52.195"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18ACFE" />
                  <stop offset="1" stop-color="#0163E0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="56"
              viewBox="0 0 53 56"
              fill="none"
            >
              <path
                d="M52.6091 23.636C52.6091 10.6761 40.8281 0.132519 26.3461 0.132519C11.866 0.132519 0.0834961 10.6761 0.0834961 23.636C0.0834961 35.2545 9.42673 44.9847 22.0475 46.8247C22.9029 47.0279 24.0669 47.4465 24.3614 48.2527C24.6262 48.985 24.5346 50.1321 24.446 50.8717C24.446 50.8717 24.1379 52.9154 24.0714 53.3507C23.9571 54.083 23.5438 56.2145 26.3461 54.912C29.1493 53.6094 41.471 45.0907 46.9809 38.0967C50.7871 33.4939 52.6091 28.8228 52.6091 23.636Z"
                fill="#2CCF54"
              />
              <path
                d="M21.0099 17.3535H19.1678C18.8853 17.3535 18.6558 17.6058 18.6558 17.9158V30.5212C18.6558 30.8317 18.8853 31.0835 19.1678 31.0835H21.0099C21.2924 31.0835 21.5215 30.8317 21.5215 30.5212V17.9158C21.5215 17.6058 21.2924 17.3535 21.0099 17.3535Z"
                fill="white"
              />
              <path
                d="M33.6898 17.3535H31.8477C31.5652 17.3535 31.3362 17.6058 31.3362 17.9158V25.4047L26.0921 17.6036C25.9951 17.4433 25.8378 17.364 25.6662 17.3535H23.8245C23.5421 17.3535 23.3125 17.6058 23.3125 17.9158V30.5212C23.3125 30.8317 23.5421 31.0835 23.8245 31.0835H25.6662C25.9491 31.0835 26.1782 30.8317 26.1782 30.5212V23.0345L31.4288 30.8456C31.5231 30.9927 31.6831 31.0835 31.8477 31.0835H33.6898C33.9728 31.0835 34.2014 30.8317 34.2014 30.5212V17.9158C34.2014 17.6058 33.9728 17.3535 33.6898 17.3535Z"
                fill="white"
              />
              <path
                d="M16.5698 27.9271H11.5644V17.9166C11.5644 17.6055 11.3353 17.3532 11.0534 17.3532H9.21074C8.92829 17.3532 8.69922 17.6055 8.69922 17.9166V30.5197C8.69922 30.8257 8.92728 31.0837 9.21023 31.0837H16.5698C16.8523 31.0837 17.0803 30.8309 17.0803 30.5197V28.4906C17.0803 28.1795 16.8523 27.9271 16.5698 27.9271Z"
                fill="white"
              />
              <path
                d="M43.8628 20.5098C44.1452 20.5098 44.3733 20.258 44.3733 19.9463V17.9172C44.3733 17.606 44.1452 17.3532 43.8628 17.3532H36.5037C36.2211 17.3532 35.9922 17.6107 35.9922 17.9166V30.5203C35.9922 30.8254 36.2204 31.0837 36.5027 31.0837H43.8628C44.1452 31.0837 44.3733 30.8309 44.3733 30.5203V28.4906C44.3733 28.18 44.1452 27.9271 43.8628 27.9271H38.8579V25.7965H43.8628C44.1452 25.7965 44.3733 25.5441 44.3733 25.233V23.2039C44.3733 22.8927 44.1452 22.6399 43.8628 22.6399H38.8579V20.5098H43.8628Z"
                fill="white"
              />
            </svg>
          </div>
          {/* <!-- sub left --> */}
        </div>
      </Popover>
    </>
  );
}

import React from "react";
import blogimg1 from "../img/blogimg1.png";
import blogimg2 from "../img/blogimg2.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function AllBlogs() {
  const Posts = [
    {
      id: 1,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg1,
    },
    {
      id: 2,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg2,
    },
    {
      id: 3,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg1,
    },
    {
      id: 4,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg2,
    },
    {
      id: 5,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg1,
    },
    {
      id: 6,
      name: "ความหวานของขนม",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg2,
    },
  ];

  return (
    <>
      <section className="bg-white mx-auto mb-[100px]">
        <div className="mx-auto">
          <div className="mt-6 grid grid-cols-1 gap-y-24 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-7">
            {Posts.map((post) => (
              <div key={post.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="h-full rounded-2xl w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex mt-[34px] items-center">
                  <p className="bg-[#F2E7D6] px-2 py-1 text-sm font-medium text-[#795E32]">
                    Category
                  </p>
                  <p className="text-sm font-medium text-[#000] ml-4">
                    5 min read
                  </p>
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
                    <button className="text-[#E6A141] font-normal mt-5">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[120px]">
            <div className="flex justify-between items-center w-[296px] mx-auto">
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span className="bg-[#E6A141] flex justify-center items-center w-[32px] h-[32px] text-white rounded-full">1</span>
              <span className="text-[#474747]">2</span>
              <span className="text-[#474747]">...</span>
              <span className="text-[#474747]">8</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllBlogs;

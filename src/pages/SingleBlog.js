import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import blogimg1 from "../img/singleBlog.png";
import SingleBlog2 from "../img/SingleBlog2.png";
import blogimg2 from "../img/blogimg2.png";

function SingleBlog() {
  const Posts = [
    {
      id: 1,
      name: "Blog title heading will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg1,
    },
    {
      id: 2,
      name: "Blog title heading will go here",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Consectetur adipiscing elit.",
      href: "#",
      date: "18 March",
      imageSrc: blogimg2,
    },
  ];

  return (
    <>
      <div className="max-w-[1296px] my-[64px] mx-auto">
        <div className="text-center">
          <div>
            <h2 className="text-[#795E32] text-[48px] font-bold font-noto-sans-thai leading-[48px] sm:leading-[68px]">
              ความหวานของขนม
            </h2>
            <p className="text-[#795E32] font-normal text-sm">
              Lorem Ipsum Mar 15,2022 / Bakery
            </p>
          </div>
          <img src={blogimg1} className="mt-10" alt="" />
          <div className="max-w-[1076px] mt-[72px] mx-auto md:px-0 px-5">
            <p className="text-black text-[18px] font-normal text-justify leading-[31px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-black text-[18px] font-normal text-justify leading-[31px] mt-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <p className="text-black text-[18px] font-normal text-justify leading-[31px] mt-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
              dummy text of the printing and typ
            </p>
            <img src={SingleBlog2} className="mt-[50px] m-auto" alt="" />
            <p className="text-black text-[18px] font-normal text-justify leading-[31px] mt-[40px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
              dummy text of the printing and typ
            </p>
            <div className="flex justify-end mt-[50px]">
              <button className="flex justify-center items-center border border-[#C4C4C4] rounded-full w-[140px] h-[35px]">
                <ChevronLeftIcon className="h-5 mr-1 w-5" aria-hidden="true" />{" "}
                PREVIOUS{" "}
              </button>
              <button className="flex justify-center items-center border border-[#C4C4C4] rounded-full w-[140px] h-[35px] ml-[35px]">
                NEXT{" "}
                <ChevronRightIcon
                  className="h-5 ml-1  w-5"
                  aria-hidden="true"
                />{" "}
              </button>
            </div>
          </div>
          <section className="bg-white mx-auto mt-[100px] md:px-0 px-4">
            <div className="mx-auto text-left">
              <h3 className="text-[#795E32] text-[48px] font-bold mb-[47px] font-noto-sans-thai leading-[52px] sm:leading-[68px]">
                Latest Cooling Posts
              </h3>
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
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;

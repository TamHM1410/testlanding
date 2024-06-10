"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"

import user from "../../../public/asset/images/user.png";
import heart from "../../../public/asset/images/heart.png";
import reta from "../../../public/asset/images/solar_widget-2-bold.png";
import location from "../../../public/asset/images/location.png";
import Image from "next/image";
import phone from "../../../public/asset/images/phone.png";


import { Content } from "@/utils";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slideOption = [
  {
    name: "Chi tiết profile",
    des: "Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.",
    image: user,
  },
  {
    name: Content.HomeContent.location,
    des: Content.HomeContent.description,
    image: location,
  },
  {
    name: Content.HomeContent.paring,
    des: Content.HomeContent.paring_des,
    image: heart,
  },
  {
    name: "Độ tương hợp",
    des: "Đừng bỏ lỡ cơ hội trò chuyện. Hãy nhắn tin với người ấy khi cảm thấy hợp gout nhé!",
    image: reta,
  },
];

export default function HomeSwiper() {
  return (
    <>
     
     
     <div className="div pt-[30px] md:hidden">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt- text-white pt-[20]   min-h-[150px]"
        style={{
            "--swiper-pagination-color": "#A11BC7",
            "--swiper-pagination-width": "20px",

            "--swiper-pagination-bullet-inactive-color": "#1D1E3C",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bullet-active-size": "12px",
            "--swiper-pagination-bullet-active-width":"20px",
            "--swiper-pagination-bullet-active-height":"6px",
            "--swiper-pagination-bullet-border-radius":"15px"

            

          }}
      >
        {slideOption &&
          slideOption.map((item, index) => {
            return (
              <>
                <SwiperSlide className="max-[500px]:px-5 min-[500px]:px-[80px]">
                  <div className=" flex flex-col  w-full items-center">
                    <div className=" flex  justify-center">
                      <div className=" h-[34px] w-[34px] rounded bg-purple-700 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt=""
                          width={17}
                          height={17}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="py-2 flex  justify-center text-[18px]">
                      {item.name}
                    </div>
                    <div
                      className=" flex  justify-center text-sm w-full text-center text-[14px] h-full max-"
                      style={{ color: "#817DA0" }}
                    >
                      {item.des}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
     </div>
    </>
  );
}

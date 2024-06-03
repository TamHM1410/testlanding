"use client";
import { useState } from "react";
import { Content } from "@/utils";
import Image from "next/image";
import partner from "../../../public/asset/images/partner.png";
import partner1 from "../../../public/asset/images/parner1.png";
import partner2 from "../../../public/asset/images/parner3.png";

//////
const part = [partner, partner1, partner2];
///
export default function AboutPartner() {
  let i = 0;
  let j = 0;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    setScrollPosition(scrollLeft);
  };

  return (
    <>
      <div className=" px-10 text-white max-w-screen min-w-screen 2xl:text-2xl lg:mt-10 max-sm:px-5">
        <div className=" flex flex-col justify-center gap-y-5">
          <div className="text-2xl font-bold flex justify-center text-2xl">
            {Content.aboutContent.partner}
          </div>
          <div className="text-customGrey  flex justify-center ">
            <div className="lg:w-[701px] lg:h-[73px] text-center text-sm 2xl:text-xl">
              {Content.aboutContent.des}
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:mt-10">
          <div className="lg:mx-[10%] max-w-[1440px] flex justify-center">
            <div className="grid grid-cols-3 gap-2 max-lg:hidden">
              {Content.aboutContent.card.map((item, index) => {
                return (
                  <div className="flex justify-center px-5" key={index}>
                    <div
                      className="flex justify-center w-[400px] h-[400px] lg:h-[500px]   py-10 flex-col gap-y-5 rounded-2xl"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgb(24 0 41) 0%, #2A0146 100%)",
                      }}
                    >
                      <div className="flex justify-center">
                        <Image src={part[i]} alt="" width={241} height={241} />
                        <div className="hidden">{i++} </div>
                      </div>
                      <div
                        className="flex justify-center font-bold text-2xl "
                        style={{ color: "#7E21C8" }}
                      >
                        {item?.title}
                      </div>
                      <div className="flex justify-center text-center text-white 2xl:text-xl text-sm">
                        {item?.des}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div> coroasle</div> */}
        <div className="flex justify-center pt-10 lg:hidden">
          <div
            className="w-[350px] carousel rounded-box"
            onScroll={(event) => handleScroll(event)}
          >
            {Content.aboutContent.card.map((item, index) => {
              return (
                <div className="flex justify-center gap-5" key={index}>
                  <div
                    className="flex justify-center w-[350px] h-[350px]   py-10 flex-col gap-y-5 rounded-2xl carousel-item mx-2"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgb(24 0 41) 0%, #2A0146 100%)",
                    }}
                  >
                    <div className="flex justify-center">
                      <Image src={part[j]} alt="" width={241} height={241} />
                      <div className="hidden">{j++} </div>
                    </div>
                    <div
                      className="flex justify-center font-bold text-2xl "
                      style={{ color: "#7E21C8" }}
                    >
                      {item?.title}
                    </div>
                    <div className="flex justify-center text-center text-white text-xs">
                      {item?.des}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" pt-5 mt-10 flex flex-col lg:hidden ">
          <div className="flex justify-center mt-2 ">
            <span className="mx-5 gap-1 flex flex-row w-[38px] h-[6px] justify-center">
              <div
                className="h-full duration-100   rounded "
                onClick={() => setCurrentItem(0)}
                style={{
                  backgroundColor: scrollPosition < 374 ? "#A11BC7" : "#1D1E3C",
                  width: scrollPosition < 374 ? 24 : 12,
                }}
              ></div>
              <div
                className="h-full duration-100 rounded"
                onClick={() => setCurrentItem(1)}
                style={{
                  backgroundColor:
                    scrollPosition > 374 && scrollPosition < 740
                      ? "#A11BC7"
                      : "#1D1E3C",
                  width: scrollPosition > 374 && scrollPosition < 740 ? 24 : 12,
                }}
              ></div>
              <div
                className="h-full duration-100  rounded"
                onClick={() => setCurrentItem(2)}
                style={{
                  backgroundColor: scrollPosition > 739 ? "#A11BC7" : "#1D1E3C",
                  width: scrollPosition > 739 ? 24 : 12,
                }}
              ></div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

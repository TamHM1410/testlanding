"use client";

////@hooks
import { useState, useRef, useEffect } from "react";
import { useWindowSize } from "react-use";

///assets
import Image from "next/image";
import phone from "../../../public/asset/images/phone.png";
import a from "../../../public/asset/images/lover.png";
import group_1 from "../../../public/asset/images/Group 1.png";
import user from "../../../public/asset/images/user.png";
import heart from "../../../public/asset/images/heart.png";
import reta from "../../../public/asset/images/solar_widget-2-bold.png";
import location from "../../../public/asset/images/location.png";

import { Content } from "@/utils";

export default function LandingGroup() {
  const { width } = useWindowSize();
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);

  const [currentItem, setCurrentItem] = useState(0);
  const [divWidth, setDivWidth] = useState<number>(0);
  const [divWidthb, setDivWidthb] = useState<number | null>(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    setScrollPosition(scrollLeft);
  };

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.clientWidth;
      const width2 = divRef.current.clientWidth;
      setDivWidthb(width2);
      setDivWidth(width);
    }
  }, [width]);

  return (
    <>
      {/* { mobile screen} */}
      <div className=" max-h-max	2xl:text-2xl  pt-10 px-10 text-white flex justify-center items-center md:hidden flex-col min-w-screen  max-w-[1440px] overflow-x-scroll no-scrollbar">
        <div className=" max-sm:w-[322px] max-md:w-[332px] max-md:h-[332px] max-sm:h-[332px] bg-customPurple  border-2 border-purple-800 rounded-full	flex items-center justify-center shadow  shadow-customPurple ">
          <div
            className="  rounded-box  w-[204px]"
            onScroll={(event) => handleScroll(event)}
          >
            <div className="carousel-item w-full  flex flex-col">
              <Image
                height={411}
                width={204}
                src={phone}
                alt=""
                className="w-full h-full"
                key={0}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className=" pt-5 mt-10 flex flex-col  ">
          <div className="mx-[5%]">
            <div
              className="carousel w-full "
              onScroll={(event) => handleScroll(event)}
              ref={divRef}
            >
              <div
                className="carousel-item flex flex-col  w-full"
                ref={divRef2}
              >
                <div className=" flex  justify-center">
                  <div className=" h-[34px] w-[34px] rounded bg-purple-700 flex items-center justify-center">
                    <Image src={location} alt="" />
                  </div>
                </div>
                <div className="py-2 flex  justify-center">
                  {Content.HomeContent.location}
                </div>
                <div
                  className=" flex  justify-center text-sm w-full text-center"
                  style={{ color: "#817DA0" }}
                >
                  {Content.HomeContent.location_des}
                </div>
              </div>
              <div className="carousel-item flex flex-col  w-full">
                <div className=" flex  justify-center">
                  <div className=" h-[34px] w-[34px] rounded bg-purple-700 flex items-center justify-center">
                    <Image src={heart} alt="" />
                  </div>
                </div>
                <div className="py-2 flex  justify-center">Nhắn tin</div>
                <div
                  className=" flex  justify-center text-sm w-full text-center"
                  style={{ color: "#817DA0" }}
                >
                  Đừng bỏ lỡ cơ hội trò chuyện. Hãy nhắn tin với người ấy khi
                  cảm thấy hợp gout nhé!
                </div>
              </div>
              <div className="carousel-item flex flex-col  w-full">
                <div className=" flex  justify-center">
                  <div className=" h-[34px] w-[34px] rounded bg-purple-700 flex items-center justify-center">
                    <Image src={reta} alt="" />
                  </div>
                </div>
                <div className="py-2 flex  justify-center">Độ tương hợp</div>
                <div
                  className=" flex  justify-center text-sm w-full text-center"
                  style={{ color: "#817DA0" }}
                >
                  Đừng bỏ lỡ cơ hội trò chuyện. Hãy nhắn tin với người ấy khi
                  cảm thấy hợp gout nhé!
                </div>
              </div>
              <div className="carousel-item flex flex-col  w-full">
                <div className=" flex  justify-center">
                  <div className=" h-[34px] w-[34px] rounded bg-purple-700 flex items-center justify-center">
                    <Image src={user} alt="" />
                  </div>
                </div>
                <div className="py-2 flex  justify-center">
                  Chi tiết profile
                </div>
                <div
                  className=" flex  justify-center text-sm w-full text-center"
                  style={{ color: "#817DA0" }}
                >
                  Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá
                  nhân.
                </div>
              </div>
            </div>
          </div>

          <div className="asdjaksdj">
            <div className="flex justify-center mt-2 carousel">
              <span className="mx-5 gap-1 flex flex-row w-[38px] h-[6px] justify-center">
                <div
                  className="h-full duration-100   rounded "
                  onClick={() => setCurrentItem(0)}
                  style={{
                    backgroundColor:
                      scrollPosition <= divWidth - 1 ? "#A11BC7" : "#1D1E3C",
                    width: scrollPosition === 0 ? 24 : 12,
                  }}
                ></div>
                <div
                  className="h-full duration-100 rounded"
                  onClick={() => setCurrentItem(1)}
                  style={{
                    backgroundColor:
                      scrollPosition > divWidth - 1 &&
                      scrollPosition <= (divWidth - 1) * 2
                        ? "#A11BC7"
                        : "#1D1E3C",
                    width:
                      scrollPosition > divWidth - 1 &&
                      scrollPosition <= (divWidth - 1) * 2
                        ? 24
                        : 12,
                  }}
                ></div>
                <div
                  className="h-full duration-100  rounded"
                  onClick={() => setCurrentItem(2)}
                  style={{
                    backgroundColor:
                      scrollPosition > (divWidth - 1) * 2 &&
                      scrollPosition <= (divWidth - 1) * 3
                        ? "#A11BC7"
                        : "#1D1E3C",
                    width:
                      scrollPosition > (divWidth - 1) * 2 &&
                      scrollPosition <= (divWidth - 1) * 3
                        ? 24
                        : 12,
                  }}
                ></div>
                <div
                  className="h-full duration-100  rounded"
                  onClick={() => setCurrentItem(3)}
                  style={{
                    backgroundColor:
                      scrollPosition > (divWidth - 1) * 3
                        ? "#A11BC7"
                        : "#1D1E3C",
                    width: scrollPosition > (divWidth - 1) * 3 ? 24 : 12,
                  }}
                ></div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-screen max-w-screen py-5 flex justify-center 2xl:mx-[10%] mx-[10%]">
        <div className="py-5  grid grid-cols-3 max-lg:grid-cols-2  h-[657px] max-sm:hidden max-md:hidden max-w-[1440px]">
          <div className=" p-2 grid grid-rows-4 text-white max-lg:p-6 flex items-center">
            <div className="row-span-2 flex flex-col my-10">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={user} alt="" width={32} height={32} />
              </div>
              <div className="py-2 text-xl font-bold flex ">
                Chi tiết profile
              </div>
              <div className="w-[306px] text-sm">
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
            <div className="row-span-2 flex flex-end flex-col ">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={heart} alt="" width={32} height={32} />
              </div>
              <div className="py-2 text-xl font-bold">Nhắn tin </div>
              <div className="w-[306px] text-sm">
                Đừng bỏ lỡ cơ hội trò chuyện. Hãy nhắn tin với người ấy khi cảm
                thấy hợp gout nhé!
              </div>
            </div>
          </div>
          <div className=" p-8  max-lg:hidden flex items-center">
            <Image
              width={550}
              height={657}
              src={group_1}
              alt=""
              key={0}
              className="max-lg:none"
            />
          </div>
          <div className="p-2 grid grid-rows-4 text-white max-lg:p-6 flex items-center">
            <div className="row-span-2 flex flex-col my-10  items-end">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={reta} alt="" width={32} height={32} />
              </div>
              <div className="py-2 text-xl font-bold">Độ tương hợp</div>
              <div className="w-[306px] text-sm text-right">
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
            <div className="row-span-2 flex flex-col   items-end">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={location} alt="" width={32} height={32} />
              </div>
              <div className="py-2 text-xl font-bold">Vị trí</div>
              <div className="w-[306px] text-sm text-right">
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

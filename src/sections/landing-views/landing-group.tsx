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
import HomeSwiper from "@/components/swiper/Home-swiper";

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
      <div className=" max-sm:w-[322px] max-md:w-[332px] max-md:max-h-[332px] max-sm:max-h-[332px]	flex items-center justify-center    h-full">
         

          <Image src={group_1} alt="" height={302} width={401}/>
        </div>


       
      </div>
      <HomeSwiper/>

      <div className="min-w-screen max-w-screen pb-5 flex justify-center ">
        <div className="  grid grid-cols-3 max-lg:grid-cols-2  h-[657px] max-sm:hidden max-md:hidden max-w-[1440px]  max-[500px]:px-5 min-[500px]:px-[80px] ">
          <div className=" p-2 grid grid-rows-4 text-white  flex items-center">
            <div className="row-span-2 flex flex-col my-10">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={user} alt="" width={32} height={32}      quality={100}/>
              </div>
              <div className="py-2 text-xl font-bold flex " style={{fontSize:26}}>
                Chi tiết profile
              </div>
              <div className="w-[306px] text-customGrey leading-[30px] " style={{fontSize:20}} >
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
            <div className="row-span-2 flex flex-end flex-col ">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={heart} alt="" width={32} height={32}     quality={100} />
              </div>
              <div className="py-2 text-xl font-bold"  style={{fontSize:26}}>Nhắn tin </div>
              <div className="w-[306px] text-sm text-customGrey leading-[30px]" style={{fontSize:20}}>
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
              quality={100}
            />
          </div>
          <div className="p-2 grid grid-rows-4 text-white  flex items-center">
            <div className="row-span-2 flex flex-col my-10  items-end">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={reta} alt="" width={32} height={32}     quality={100} />
              </div>
              <div className="py-2 text-xl font-bold"  style={{fontSize:26}}>Độ tương hợp</div>
              <div className="w-[306px] text-sm text-right text-customGrey leading-[30px] max-sm:leading-[22px]" style={{fontSize:20}}>
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
            <div className="row-span-2 flex flex-col   items-end">
              <div className="w-[64px] h-[64px] bg-purple-700 rounded flex items-center justify-center">
                <Image src={location} alt="" width={32} height={32}  />
              </div>
              <div className="py-2 text-xl font-bold"  style={{fontSize:26}}>Vị trí</div>
              <div className="w-[306px] text-sm text-right text-customGrey leading-[30px] max-sm:leading-[22px]"  style={{fontSize:20}}>
                Nếu muốn biết thêm về đối phương, lướt lên để xem trang cá nhân.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

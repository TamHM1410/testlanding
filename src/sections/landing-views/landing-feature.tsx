import Image from "next/image";

////@utils
import { Content } from "@/utils";

////@assets
import Voice from '../../../public/asset/images/voice.png'
import Par from '../../../public/asset/images/parsing.png'

export default function LandingFeature() {
  return (
    <>
      <div className="py-5  max-sm:px-5 px-10 text-white 2xl:text-2xl overflow-x-scroll no-scrollbar ">
        <div className="flex justify-center font-bold max-sm:text-xl text-2xl">
          {" "}
          {Content.HomeContent.feature}
        </div>

        <div className="flex justify-center " >
        <div
          className="py-5 flex justify-center  max-sm:text-sm font-medium text-center text-xl  md:w-[713px] md:h-[73px] pb-5 "
          style={{ color: "#817DA0" }}
        >
          {Content.HomeContent.description}
        </div>
        </div>

        <div className="flex flex-row max-sm:justify-around md:justify-center lg:pt-12  max-sm:gap-1 sm:gap-x-20 sm:justify-center py-5 max-sm:gap-x-5 overflow-x-scroll no-scrollbar ">
          <div className=" max-sm:w-[180px] h-[228px] w-[200px] bg-customBlack flex items-center justify-center flex-col border-2   border-fuchsia-600 bg-customBlack rounded-lg">
            <div className="w-[78px] h-[80px]"><Image src={Par} height={78} width={80} alt="" quality={100}/></div>
            <div style={{ color: "#7E21C8" }} className="font-bold text-md">
              {Content.HomeContent.paring}
            </div>
            <div className="w-[151px] h-[50px] text-sm text-center mt-1">
              {Content.HomeContent.paring_des}
            </div>
          </div>
          <div className="max-sm:w-[180px] h-[228px] w-[200px] bg-customBlack flex items-center justify-center flex-col border-2   border-fuchsia-600 bg-customBlack rounded-lg">
            <div className="w-[78px] h-[80px]"><Image src={Voice} height={78} width={80} alt="" quality={100}/></div>
            <div style={{ color: "#7E21C8" }} className="font-bold text-sm text-center">
              {Content.HomeContent.voice}
            </div>
            <div className="w-[151px] h-[50px] text-sm text-center mt-1">
              {Content.HomeContent.voice_des}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

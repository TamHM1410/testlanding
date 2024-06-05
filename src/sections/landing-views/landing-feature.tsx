import Image from "next/image";

////@utils
import { Content } from "@/utils";

////@assets
import Voice from "../../../public/asset/images/voice.png";
import Par from "../../../public/asset/images/parsing.png";

export default function LandingFeature() {
  return (
    <>
      <div className="py-10 lg:pt-[120px]  max-sm:px-5 px-10 text-white 2xl:text-2xl overflow-x-scroll no-scrollbar px-5">
        <div
          className="flex justify-center font-bold  pb-[10px] max-sm:text-[22px] max-sm:w:[240px] max-sm:h-[27px] max-lg:text-[30px] lg:text-[50px]"
          
        >
          {" "}
          {Content.HomeContent.feature}
        </div>

        <div className="flex justify-center ">
          <div
            className="py-5 flex justify-center  max-sm:text-sm font-medium text-center text-xl  md:w-[713px] md:h-[73px] pb-5  text-lg"
            style={{ color: "#817DA0" }}
          >
            {Content.HomeContent.description}
          </div>
        </div>

        <div className="flex justify-center">
        <div className="max-w-[1440px] w-[1440px] flex flex-row max-sm:justify-around md:justify-center lg:pt-12  max-sm:gap-x-[13px] sm:gap-x-5 sm:justify-center py-5 max-sm:gap-x-5 overflow-x-scroll no-scrollbar  lg:gap-x-11 ">
          <div className=" h-[517px] w-[425px] bg-customBlack flex items-center justify-center flex-col border-2   border-fuchsia-600 bg-customBlack rounded-lg max-sm:w-[170px] max-sm:h-[228px] max-lg:h-[400px]">
            <div className="w-[174px] h-[165x] max-sm:w-[78px] max-sm:h-[80px]">
              <Image src={Par}className="h-full w-full" alt="" quality={100} />
            </div>
            <div
              style={{ color: "#7E21C8" }}
              className="font-bold text-md py-5 lg:text-[30px] max-sm:text-[12px]"
            >
              {Content.HomeContent.paring}
            </div>
            <div
              className="w-[353px] h-[75px] text-sm text-center  lg:text-[20px] max-sm:text-[12px] max-sm:h-[49px] max-sm:w-[151px]"
            >
              {Content.HomeContent.paring_des}
            </div>
          </div>

          <div className=" h-[517px] w-[425px] bg-customBlack flex items-center justify-center flex-col border-2   border-fuchsia-600 bg-customBlack rounded-lg max-sm:w-[170px] max-sm:h-[228px] max-lg:h-[400px]">
            <div className="w-[174px] h-[165x] max-sm:w-[78px] max-sm:h-[80px]">
              <Image src={Voice}className="h-full w-full" alt="" quality={100} />
            </div>
            <div
              style={{ color: "#7E21C8" }}
              className="font-bold text-md py-5 lg:text-[30px] max-sm:text-[12px]"
            >
              {Content.HomeContent.voice}
            </div>
            <div
              className="w-[353px] h-[75px] text-sm text-center  lg:text-[20px] max-sm:text-[12px] max-sm:h-[49px] max-sm:w-[151px]"
            >
              {Content.HomeContent.voice_des}
            </div>
          </div>

         
        </div>

        </div>
      </div>
    </>
  );
}

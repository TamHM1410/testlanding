import Image from "next/image";

////@utils
import { Content } from "@/utils";

////@assets
import Voice from "../../../public/asset/images/voice.png";
import Par from "../../../public/asset/images/parsing.png";

export default function LandingFeature() {
  return (
    <>
      <div className="py-10 lg:pt-[120px]  max-lg:px-5 sm:px-[80px] text-white 2xl:text-2xl overflow-x-scroll no-scrollbar max-[500px]:px-5 min-[500px]:px-[80px]">
        <div className="flex justify-center font-bold  pb-[10px]  max-sm:w:[240px] max-sm:min-h-[27px] sm:text-[30px] lg:text-[50px] max-sm:text-[22px] h-full">
          {" "}
          {Content.HomeContent.feature}
        </div>

        <div className="flex justify-center ">
          <div
            className="py-5 flex justify-center  font-medium text-center text-xl  md:w-[713px] md:min-h-[73px] pb-5  max-sm:text-[14px] sm:text-[16px] lg:text-[18px] h-full"
            style={{ color: "#817DA0" }}
          >
            {Content.HomeContent.feature_des}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[1440px] w-[1440px] flex flex-row max-sm:justify-around md:justify-center lg:pt-12   sm:gap-x-5 sm:justify-center py-5 pt-10 max-sm:gap-x-2 overflow-x-scroll no-scrollbar   ">
            <div className=" h-[517px] w-[425px]  bg-customBlack flex items-center justify-center flex-col border-2   border-fuchsia-600 bg-customBlack rounded-lg max-[450px]:w-[170px] max-sm:h-[258px] max-lg:h-[400px]  max-[1200px]:w-[310px] max-[800px]:w-[230px]">
              <div className="w-[174px] h-[165x] max-sm:w-[78px] max-sm:h-[80px]">
                <Image
                  src={Par}
                  className="h-full w-full"
                  alt=""
                  quality={100}
                />
              </div>
              <div
                style={{ color: "#7E21C8" }}
                className="font-bold text-md py-5 lg:text-[30px] sm:text-[20px] max-sm:text-[12px]"
              >
                {Content.HomeContent.paring}
              </div>
              <div className="w-full max-w-[353px] h-[75px]  text-center  lg:text-[20px] max-sm:text-[14px] sm:text-[18px]
               max-sm:h-fit max-sm:w-[151px] leading-[34px] max-sm:leading-[22px]  max-sm:text-[10px] sm:text-[16px] lg:text-[20px] px-2  ">
                {Content.HomeContent.paring_des}
              </div>
            </div>

            <div className=" h-[517px] w-[425px] 
            bg-customBlack flex items-center justify-center 
            flex-col border-2   border-fuchsia-600 bg-customBlack
             rounded-lg max-[450px]:w-[170px] max-sm:h-[258px] max-lg:h-[400px] 
             max-[1200px]:w-[310px] max-[800px]:w-[230px] ">
              <div className="w-[174px] h-[165x] max-sm:w-[78px] max-sm:h-[80px] sm:py-5">
                <Image
                  src={Voice}
                  className="h-full w-full"
                  alt=""
                  quality={100}
                />
              </div>
              <div
                style={{ color: "#7E21C8" }}
                className="font-bold text-md   lg:text-[30px] sm:text-[20px] max-sm:text-[12px] text-center max-sm:h-[58px] h-[72px] flex items-center"
              >
               Phòng voice / video call
              </div>
              <div className="w-full max-w-[353px] h-[75px]  text-center  lg:text-[20px] max-sm:text-[14px] sm:text-[18px]
               max-sm:h-fit max-sm:w-[151px] leading-[34px] max-sm:leading-[22px]  max-sm:text-[10px] sm:text-[16px] lg:text-[20px] px-2 ">
                {Content.HomeContent.paring_des}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

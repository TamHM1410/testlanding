import { Content } from "@/utils";
import Lover from "../../../public/asset/images/lover.png";
import blackAppStore from "../../../public/asset/images/Group (1).png";
import google from "../../../public/asset/images/google_play.png";
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <>
       <div className="  text-white pt-10   min-w-screen flex max-sm:flex-col flex-row lg:justify-center lg:max-w-full justify-center l     overflow-x-scroll	 no-scrollbar ">
        <div className="min-[890px]:flex  items-center w-full max-w-[1440px] overflow-x-scroll
         no-scrollbar   duration-100 max-[500px]:px-5 min-[500px]:px-[80px] ">
          <div className="w-full    max-sm:pt-10 sm:pt-20    min-[890px]:max-w-screen max-[890px]:min-w-screen ">
            <div className=" max-sm:h-auto w-full h-full  text-2xl	 font-bold	 tracking-wide	text-left  ">
              <div
                
                className="w-full  h-full  max-h-[200px] text-[54px] flex items-center max-sm:w-full    
                max-sm:min-w-[321px] max-sm:min-h-[68px] max-sm:text-[28px] max-[1360px]:text-[35px] leading-[80px] max-[1300px]:leading-[50px] min-[1300px]:w-[700px]  max-sm:leading-8"
              >
             MẠNG XÃ HỘI <br/> DÀNH CHO NGƯỜI VIỆT
                </div>
            </div>
           <div className="w-full">
           <div
              className="font-medium  w-full h-full  max-w-[713px] max-[510px]:max-w-[393px] 
              max-[1293px]:w-full 
               sm:max-h-[71px] 
                 max-sm:pt-[10px]  
                pb-20 max-[640px]:pb-5
                leading-[24px] max-lg:leading-[22px] text-justify  max-[890px]:w-full flex lg:text-[18px] sm:text-[16px] max-sm:text-[14px]"
              style={{ color: "#817DA0" }}
            >
              {Content.HomeContent.description}
            </div>
           </div>

            <div className="flex flex-row gap-5 h-full  items-center  h-[60px] max-[938px]:h-[80px] max-[890px]:h-[40px]">
              <button className="h-[52px] w-[180px] max-sm:w-[114px] max-sm:h-[33px]">
                <Link href="https://www.apple.com/vn/store">
                  {" "}
                  <Image
                    src={blackAppStore}
                    alt=""
                    className="   w-full h-full"
                    quality={100}
                  />
                </Link>
              </button>
              <button className="w-[180px] h-[52px] max-sm:w-[114px] max-sm:h-[33px]">
                <Link href="https://play.google.com/">
                  {" "}
                  <Image
                    src={google}
                    alt=""
                    className="   w-full h-full"
                    quality={100}
                  />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex  max-[1301px]:justify-center   max-sm:items-center  max-[890px]:pt-[5%]  w-full pt-20 justify-center ">
            <div className=" w-[484px] h-[464px] rounded-full flex items-center justify-center max-lg:w-[290px] max-lg:h-[279px]  max-[1350px]:w-[350px] max-[1350px]:h-[350px] duration-100 ">
              <Image alt="no" src={Lover} className="w-full h-full"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

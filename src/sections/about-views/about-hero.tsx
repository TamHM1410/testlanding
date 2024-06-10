import { Content } from "@/utils";
import Lover from "../../../public/asset/images/lover.png";
import blackAppStore from "../../../public/asset/images/Group (1).png";
import google from "../../../public/asset/images/google_play.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <>
        <div className="  text-white pt-10   min-w-screen flex max-sm:flex-col flex-row lg:justify-center lg:max-w-full justify-center l     overflow-x-scroll	 no-scrollbar ">
        <div className="min-[890px]:flex  items-center w-full max-w-[1440px] overflow-x-scroll
         no-scrollbar   duration-100">
          <div className="w-full  max-[500px]:px-5 min-[500px]:px-[80px] max-sm:pt-10 sm:pt-20 max-[1300px]:max-w-[600px] min-[890px]:max-w-screen">
            <div className=" max-sm:h-auto w-full h-full  text-2xl	 font-bold	 tracking-wide	text-left  ">
              <div
                style={{ lineHeight: 1.3 }}
                className="w-full min-w-[658px]  h-full  max-h-[200px] text-[54px] flex items-center max-sm:w-full 
                max-sm:min-w-[321px] max-sm:min-h-[68px] max-sm:text-[28px] max-[1360px]:text-[35px] "
              >
             NƠI TƯƠNG TÁC <br/> MANG LẠI CẢM XÚC
                </div>
            </div>
           <div className="w-full">
           <div
              className="font-medium lg:text-[18px] w-full   max-w-[713px] h-full max-[510px]:max-w-[393px] 
              max-[1293px]:w-full max-[1300px]:max-w-[500px] 
               sm:max-h-[71px] max-sm:text-[14px] 
                max-sm:min-h-[71px] max-sm:pt-[10px]  
                pb-20 max-[640px]:pb-5
                leading-[24px] max-lg:leading-[22px] text-justify "
              style={{ color: "#817DA0" }}
            >
              {Content.HomeContent.description}
            </div>
           </div>

            <div className="flex flex-row gap-5 h-full   items-start">
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

          <div className="flex  max-[1301px]:justify-center   max-sm:items-center  max-[890px]:pt-[5%]  w-full pt-20 ">
            <div className="bg-gradient-to-r from-purpleCus to-paleteCus w-[484px] h-[464px] rounded-full flex items-center justify-center max-lg:w-[290px] max-lg:h-[279px]  max-[1350px]:w-[350px] max-[1350px]:h-[350px] duration-100 ">
              <Image alt="no" src={Lover} className="w-full h-full"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

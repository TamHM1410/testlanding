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
        <div className="min-[890px]:flex  items-center w-full max-w-[1440px] overflow-x-scroll no-scrollbar lg:w-[1440px]   max-sm:w-full duration-100">
          <div className="max-[500px]:px-5 min-[500px]:px-[80px]  pt-20 max-[1300px]:w-[500px]">
            <div className=" max-sm:h-auto w-full h-full text-2xl	 font-bold	 tracking-wide	text-left  ">
              <div
                style={{ lineHeight: 1.3 }}
                className="w-[630px] h-full  max-h-[180px] text-[54px] flex items-center max-sm:w-full max-sm:min-w-[321px] max-sm:max-h-[68px] max-sm:text-[28px] max-[1360px]:text-[35px] "
              >
             MẠNG XÃ HỘI <br/> DÀNH CHO NGƯỜI VIỆT
                </div>
            </div>
           <div className="w-full">
           <div
              className="font-medium lg:text-[18px] w-full  max-sm:max-w-[349px] max-w-[713px] h-full  max-h-[71px] max-sm:text-[14px]  max-[450px]:w-[349px] max-sm:h-[71px] max-sm:pt-[10px]  min-[1350px]:pt-[10px] leading-[34px] max-lg:leading-[25px] text-justify max-[1300px]:w-[450px] max-[890px]:w-[570px] max-[733px]:w-[500px]"
              style={{ color: "#817DA0" }}
            >
              {Content.HomeContent.description}
            </div>
           </div>

            <div className="flex flex-row gap-5  py-10 min-[642px]:py-5 min-[1024px]:py-10">
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

          <div className="flex  max-[1301px]:justify-center   max-sm:items-center  max-[890px]:pt-[50px]  w-full pt-20 ">
            <div className="bg-gradient-to-r from-purpleCus to-paleteCus w-[484px] h-[464px] rounded-full flex items-center justify-center max-lg:w-[290px] max-lg:h-[279px]  max-[1350px]:w-[350px] max-[1350px]:h-[350px] duration-100 ">
              <Image alt="no" src={Lover} className="w-full h-full"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

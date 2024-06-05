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
        <div className="lg:flex max-2xl:justify-around justify-between items-center max-w-[1440px] 2xl:min-w-[1440px] overflow-x-scroll no-scrollbar lg:w-[1440px]   max-sm:w-full ">
          <div className="px-5 pt-20">
            <div className=" max-sm:h-auto w-full h-full text-2xl	 font-bold	 tracking-wide	text-left  ">
              <div
                style={{ lineHeight: 1.3 }}
                className="w-[628px] h-[160px] text-5xl flex items-center max-sm:w-[321px] max-sm:h-[68px] max-sm:text-[28px]"
              >
                {Content.HomeContent.title}
              </div>
            </div>
            <div
              className="font-medium text-sm text-lg max-sm:text-[14px] max-sm:w-[349px] max-sm:h-[71px]  pt-[10px]"
              style={{ color: "#817DA0" }}
            >
              {Content.HomeContent.description}
            </div>

            <div className="flex flex-row gap-5  pt-5">
              <button className="h-[60px] w-[180px] max-sm:w-[114px] max-sm:h-[33px]">
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
              <button className="w-[180px] h-[60px] max-sm:w-[114px] max-sm:h-[33px]">
                <Link href="https://www.apple.com/vn/store">
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

          <div className="flex justify-center   max-sm:items-center  max-lg:pt-[50px] justify-end  w-full pt-20 ">
            <div className="bg-gradient-to-r from-purpleCus to-paleteCus lg:w-[484px] lg:h-[464px] rounded-full flex items-center justify-center max-lg:w-[290px] max-lg:h-[279px]">
              <Image alt="no" src={Lover} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

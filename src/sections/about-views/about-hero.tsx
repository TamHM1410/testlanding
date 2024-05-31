import { Content } from "@/utils";
import Lover from "../../../public/asset/images/lover.png";
import blackAppStore from "../../../public/asset/images/blackappstore.png";
import google from "../../../public/asset/images/google_play.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <>
      <div className="  max-sm:px-5 max-lg:px-5  lg:mx-[10%] text-white pt-10   min-w-screen flex max-sm:flex-col flex-row lg:justify-center lg:max-w-full justify-center l ">
        <div className="lg:flex max-2xl:justify-around 2xl:justify-between items-center max-w-[1440px] 2xl:min-w-[1440px] lg:mx-[10%] md:mx-[5%]">
          <div className="">
            <div className="max-sm:w-[300px] max-sm:h-auto w-[321px] h-[70px] text-2xl	 font-bold	 tracking-wide	text-left ">
              <div>{Content.aboutContent.title}</div>
            </div>
            <div className="font-medium text-sm" style={{ color: "#817DA0" }}>
              {Content.HomeContent.description}
            </div>

            <div className="flex flex-row gap-5  pt-5">
              <button className="  border border-white rounded-md">
                <Link href="/https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=vi">
                  {" "}
                  <Image src={blackAppStore} alt="" quality={100} />
                </Link>
              </button>
              <button>
                <Link href="https://www.apple.com/vn/store">
                  {" "}
                  <Image
                    src={google}
                    alt=""
                    className="  border border-white rounded-md"
                    quality={100}
                  />
                </Link>
              </button>
            </div>
          </div>

          <div className="flex justify-center max-sm:pt-10 max-sm:mt-10 max-sm:items-center sm:mt-10">
            <div className="bg-gradient-to-r from-purpleCus to-paleteCus w-[300px] h-[280px] rounded-full flex items-center justify-center">
              <Image width={300} height={200} alt="no" src={Lover} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

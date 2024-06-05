import phone from "../../../public/asset/images/3phone.png";
import Image from "next/image";
import { Content } from "@/utils";
export default function () {
  return (
    <>
      <div className="py-10  text-white    overflow-x-scroll no-scrollbar px-5 pt-24 lg:pt-32 ">
        <div className="flex justify-center ">
          <div className="flex grid lg:grid-cols-2 gap-0 max-w-[1440px] max-sm:gap-10 max-lg:gap-10 px-5 ">
            <div className="flex justify-center">
              <Image src={phone} alt="" width={552.6} height={423} />
            </div>
            <div
              className="flex lg:pt-5 lg:flex-col max-lg:justify-center max-lg:text-center lg:text-left flex-col gap-y-5 max-lg:bg-gradient-to-b from-black  to-purple-navCor  rounded h-auto "
            
            >
              <div
                className="text-2xl font-bold lg:hidden lg:text-[40px] max-sm:text-[22px]"
                
              >
                <div>{Content.upgrade.title_a}</div>
                {Content.upgrade.title_b}
              </div>
              <div className="text-2xl font-bold max-lg:hidden text-[40px]">
                <div>
                  {Content.upgrade.title_a} {Content.upgrade.title_b}
                </div>
              </div>

              <div
                className="text-customGrey lg:hidden lg:text-[18px] max-sm:text-[14px] text-[18px] "
              >
                {Content.upgrade.des}
              </div>

              <div className="text-customGrey max-lg:hidden w-full text-lg flex flex-wrap text-[18px] ">
                {Content.upgrade.des_a}
              </div>
              <div className="text-customGrey max-lg:hidden w-full text-lg text-[18px] ">
                {Content.upgrade.des_b}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

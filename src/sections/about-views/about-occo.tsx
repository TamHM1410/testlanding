import Image from "next/image";
import double from "../../../public/asset/images/double_phone.png";
import { Content } from "@/utils";
export default function AboutOcco() {
  return (
    <>
      <div className="min-w-screen max-w-screen py-5 pb-10 flex justify-center 2xl:text-2xl overflow-x-scroll no-scrollbar  ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5 py-5 max-lg:px-5 sm:px-[80px] lg:h-[527px] min-h-fit max-lg:flex max-lg:flex-col-reverse  max-w-[1440px] ">
          <div
            className=" flex items-center  max-lg:pt-10  justify-center
        "
          >
            <div>
            <Image src={double} alt=""  className=" w-[400px] h-[400px] max-sm:w-[348px] max-sm:h-[259px] max-lg:w-[348px] max-lg:h-[259px]" quality={100}/>

            </div>
          </div>
          <div className=" h-[400px] pt-5 text-white text-left gap-y-[20]  max-lg:text-center max-sm:h-full ">
            <div className="font-bold text-[40px] max-lg:text-center max-sm:text-[22px]">
              {Content.aboutContent.aboutOcco}
            </div>
            {Content.aboutContent.aboutOcco_des &&
              Content.aboutContent.aboutOcco_des.map((item) => {
                return (
                  <>
                    <div key={item} className="pt-5 text-customGrey text-[18px] max-sm:text-[14px]">
                      {item}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

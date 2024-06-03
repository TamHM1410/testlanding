import Image from "next/image";
import double from "../../../public/asset/images/double_phone.png";
import { Content } from "@/utils";
export default function AboutOcco() {
  return (
    <>
      <div className="min-w-screen max-w-screen py-5 pb-10 flex justify-center 2xl:text-2xl overflow-x-scroll no-scrollbar  ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5 py-5 mx-[10%] lg:h-[527px] min-h-fit max-lg:flex max-lg:flex-col-reverse  max-w-[1440px] max-md:mx-[10%]">
          <div
            className=" flex items-center  max-lg:pt-10 
        "
          >
            <Image src={double} alt="" height={400} width={600}  quality={100}/>
          </div>
          <div className=" h-[400px] pt-5 text-white text-left gap-y-[20]  max-lg:text-center max-sm:h-full ">
            <div className="font-bold text-2xl max-lg:text-center">
              {Content.aboutContent.aboutOcco}
            </div>
            {Content.aboutContent.aboutOcco_des &&
              Content.aboutContent.aboutOcco_des.map((item) => {
                return (
                  <>
                    <div key={item} className="pt-5 text-customGrey text-sm">
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

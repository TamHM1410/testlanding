import phone from "../../../public/asset/images/3phone.png";
import Image from "next/image";
import { Content } from "@/utils";
export default function () {
  return (
    <>
      <div className="py-10 mx-[10%] text-white  2xl:text-2xl 2xl:mx-[10%]">
      <div className="flex justify-center ">
      <div className="flex grid lg:grid-cols-2 gap-52 max-w-[1440px] max-sm:gap-10 max-lg:gap-10">
       <div className="flex justify-center">
          <Image src={phone} alt="" />
        </div>
        <div
          className="flex lg:pt-5 lg:flex-col max-lg:justify-center max-lg:text-center lg:text-left flex-col gap-y-5 max-lg:bg-gradient-to-b from-gray-900 via-black to-indigo-800 rounded"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgb(13 0 22) 13%, rgb(63 0 104)",
          }}
        >
          <div className="text-2xl font-bold lg:hidden">
            <div>{Content.upgrade.title_a}</div>
            {Content.upgrade.title_b}
          </div>
          <div className="text-2xl font-bold max-lg:hidden">
            <div>{Content.upgrade.title_a}  {Content.upgrade.title_b}</div>
           
          </div>

          <div className="text-customGrey lg:hidden">{Content.upgrade.des}</div>

          <div className="text-customGrey max-lg:hidden w-full text-lg flex flex-wrap">{Content.upgrade.des_a}</div>
          <div className="text-customGrey max-lg:hidden w-full text-lg">{Content.upgrade.des_b}</div>


        </div>
       </div>
      </div>
      </div>
    </>
  );
}

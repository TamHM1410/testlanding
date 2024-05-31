import { Content } from "@/utils";
import Image from "next/image";
import frame from "../../../public/asset/images/Frame.png";
import email from "../../../public/asset/images/email.png"
export default function LandingSharing() {
  return (
    <>
      <div className="flex flex-col  justify-center text-white min-w-screen py-5 2xl:text-2xl">
        <div className=" flex justify-center md:flex-col">
          <div className="flex  max-sm:w-[321px] max-sm:h-[81px] font-bold text-2xl text-center sm:hidden md:hidden">
            {Content.HomeContent.share_highlight}
          </div>
          <div className="flex  max-sm:hidden max-sm:h-[81px] font-bold text-2xl text-center  justify-center text-left ">
           <div className="w-[780px] text-left text-center">
           Chia sẽ những khoảng khắc và <br/>  sự kiện trong cuộc sống của bạn
           </div>
          </div>
          

        </div>
        <div className="pt-5 flex justify-center px-10 md:mt-10">
          <div
            className="flex  max-sm:w-[3513px] max-sm:h-[242px] text-sm text-center max-sm:overflow-y-scroll md:w-[1025px] md:h-[230px] no-scrollbar"
            style={{ color: "#817DA0" }}
          >
            {Content.HomeContent.highlight_des}
          </div>
        </div>
        <div className="flex justify-center max-md:my-10 ">
          <div className="max-sm:hidden max-md:hidden">
          <Image src={frame} height={783} width={440} alt="" />
          </div>
          <div className="md:hidden">
          <Image src={frame} height={160} width={284} alt="" />
          </div>
        </div>
     
      </div>
    </>
  );
}

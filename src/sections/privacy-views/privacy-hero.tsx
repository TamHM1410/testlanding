import bg from "../../../public/asset/images/backprivacy.jpg";
import Image from "next/image";
export default function PrivacyHero() {
  return (
    <>
      <div className="text-white  w-full bg-black grid grid-cols-3  max-sm:px-5 grid-flow-row 2xl:text-2xl overflow-x-scroll no-scrollbar pt-24">
        <div className=" lg:text-3xl text-2xl font-bold flex lg:justify-center items-center  max-sm:text-center col-span-2 w-full md:mx-[10%] max-md:ml-10 max-sm:ml-5 max-sm:text-[16px] lg:text-[46px]">
          Chính sách bảo mật
        </div>
        <div className="flex w-full h-full">
          <Image src={bg} alt="" quality={100} height={230} />
        </div>
      </div>
    </>
  );
}

import bg from "../../../public/asset/images/bg_block.jpg";
import Image from "next/image";
export default function RuleHero() {
  return (
    <>
      <div className="text-white overflow-x-scroll no-scrollbar   w-full bg-black grid grid-cols-3  max-lg:px-5 grid-flow-row 2xl:text-2xl px-5 pt-24 lg:text-[50px]">
        <div className="  font-bold flex lg:justify-center items-center  max-sm:text-center col-span-2 w-full max-[500px]:px-5 min-[500px]:px-[80px] text-[46px] sm:leading-10 max-lg:text-[20px] max-sm:text-[16px] sm:text-[30px] max-sm:text-[16px]">
          Điều Khoản & 
          Quyền riêng tư
        </div>
        <div className="flex w-full h-full">
          <Image src={bg} alt="" quality={100} height={230} />
        </div>
      </div>
    </>
  );
}

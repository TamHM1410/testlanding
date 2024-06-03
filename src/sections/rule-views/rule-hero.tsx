import bg from "../../../public/asset/images/bg_block.jpg";
import Image from "next/image";
export default function RuleHero() {
  return (
    <>
      <div className="text-white max-lg:h-[170px] w-full bg-black grid grid-cols-3 h-[250px] max-sm:px-5 grid-flow-row 2xl:text-2xl">
        <div className=" text-2xl font-bold flex lg:justify-center items-center  max-sm:text-center col-span-2 w-full md:mx-[10%]">
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

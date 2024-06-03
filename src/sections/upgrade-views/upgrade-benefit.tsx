import { Content } from "@/utils";
import benefit from "../../../public/asset/images/benefit.png";
import Image from "next/image";
import Crown from "../../../public/asset/images/crown.png";
export default function UpgradeBenefit() {
  return (
    <>
      <div className="py-5 mx-[5%] gap-y-5 text-white lg:px-10 2xl:text-2xl">
        <div className="flex justify-center">
          <div className="max-w-[1440px]">
            <div className="flex max-sm:justify-center pb-10">
              <div className="font-bold text-2xl"> Quyền lợi của VIP</div>
            </div>
            <div className="grid lg:grid-cols-2 max-sm:grid-cols-1  lg:justify-items-center lg:py-10">
              <div className="">
                {Content.upgrade.benefit.map((item, index) => {
                  return (
                    <>
                      <div className="flex flex-row gap-5 py-1" key={index}>
                        <div className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] ">
                          <Image src={benefit} alt="" height={30} width={30} />
                        </div>
                        <div className="flex items-center text-lg	">
                          {item.title}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="flex justify-center px-20 py-5">
                <Image
                  src={Crown}
                  alt=""
                  className="max-lg:w-[250px] max-lg:h-[250px] lg:w-[450px] lg:h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

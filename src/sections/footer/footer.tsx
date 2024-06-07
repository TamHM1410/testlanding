import Image from "next/image";
import iconPhone from "../../../public/asset/images/icon_phone.png";
import location from "../../../public/asset/images/location.png";
import mail from "../../../public/asset/images/mail.png";
export default function Footer() {
  return (
    <>
      <div className="flex justify-center text-white pb-5">
        <div className="px-5  flex flex-row max-[1180px]:flex-col max-[800px]:gap-y-3 justify-around max-w-[1440px] w-full max-lg:px-5 min-[500px]:px-[80px] ">
          <div className="w-full max-w-[180px] h-[36px] flex items-center gap-2 text-[16px] underline underline-offset-3">
            <span>
              <Image src={mail} alt="" width={30} height={24} quality={100} />
            </span>
            support@occo.vn
          </div>
          <div className=" max-w-[180px]w-[180px]  h-[36px] flex items-center gap-2 text-[16px] ">
            <span>
              <Image
                src={iconPhone}
                alt=""
                width={30}
                height={30}
                quality={100}
              />
            </span>
            0399961368
          </div>
          <div className="w-full max-w-[607px] flex items-center  h-[36px] max-sm:h-auto gap-2 text-[16px]">
            <span>
              <Image
                src={location}
                alt=""
                width={24}
                height={30}
                quality={100}
              />
            </span>
            Số 838, Ấp Vĩnh Bình, Xã An Vĩnh Ngãi, Tp Tân An, Tỉnh Long An, Việt
            Nam
          </div>
        </div>
      </div>
    </>
  );
}

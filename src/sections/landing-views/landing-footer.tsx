import group from "../../../public/asset/images/Group.png";
import Image from "next/image";
import qr1 from "../../../public/asset/images/qr1.png";
import qr2 from "../../../public/asset/images/qr2.png";
import blackAppStore from "../../../public/asset/images/Group (1).png";
import google from "../../../public/asset/images/google_play.png";
import { Content } from "@/utils";
import email from "../../../public/asset/images/email.png";
import iconPhone from "../../../public/asset/images/icon_phone.png";
import location from "../../../public/asset/images/location.png";
import mail from "../../../public/asset/images/mail.png";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <>
      <div className="flex  2xl:text-2xl flex-col pt-15 py-5  min-w-screen text-white justify-center relative lg:hidden overflow-x-scroll no-scrollbar lg:max-h-[30vh] w-full z-0 ">
        <div className="flex flex-col py-5 px-5">
          <div className="text-2xl font-bold  lg:text-5xl max-sm:text-[22px]">
            {Content.HomeContent.registerContact}
          </div>
          <div
            className="py-3 max-sm:w-[320px] max-sm:h-[48px] text-sm overflow-x-scroll no-scrollbar  text-lg max-sm:text-[14px]"
            style={{ color: "#817DA0" }}
          >
            {Content.HomeContent.contact_des}
          </div>
          <div className="  flex gap-5 py-3  max-sm:pt-5 justify-between">
            <div className=" bg-customBlack border-b border-b-customGrey flex items-center  ">
              <input
                placeholder="Email của bạn"
                className="border-0 bg-customBlack max-sm:w-[280px] focus:outline-none "
              />
            </div>

            <Image src={email} height={34} width={34} alt="" className="" />
          </div>
        </div>
        <div className="max-h-[600px]">
        <div className=" flex justify-center z-0">
          <Image src={group} width={313} height={389} alt="" />
        </div>
        <div className=" flex justify-center relative bottom-[180px] px-5 ">
          <div className="bg-gradient-to-r from-purple_cus to-blue_pur   w-[360px] h-[400px]  z-10 rounded-3xl ">
            <div className="py-10 px-5 flex flex-col">
              <div className="font-bold text-2xl">
                <div>Tải xuống ứng dụng để</div>
                <div>Kết bạn,tương tác</div>
                <div>Chia sẽ,giải trí</div>
              </div>
              <div className="py-5 flex flex-row gap-10">
                <div className="">
                  <Image src={qr1} width={70} height={70} alt="" />
                  <div className="pt-3">Appstore</div>
                </div>
                <div>
                  <Image src={qr1} width={70} height={70} alt="" />
                  <div className="pt-3">Google Play</div>
                </div>
              </div>
              <div>
                <div className="font-bold text-md w-[300px]">
                  Tải xuống ứng dụng ngay bây giờ để trải nghiệm
                </div>
                <div className="flex flex-row gap-5 pt-3">
                  <div>
                    <button className=" w-[104px] h-[33px] ">
                      <Image src={blackAppStore} alt="" className="w-full h-full"  quality={100}/>
                    </button>
                  </div>
                  <div>
                    <button className=" w-[104px] h-[33px] ">
                      <Image src={google} alt=""  quality={100}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="flex justify-center w-min-screen w-max-screen lg:mt-20  max-h-[670px] px-5 z-0  ">
        <div className="pt-10  max-w-[1440px] text-white max-lg:hidden overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="col-span-1 row-span-2">
              {" "}
              <div className=" flex justify-center z-0">
                <Image src={group} width={313} height={389} alt="" />
              </div>
            </div>
            <div className="col-span-1 row-span-1 ">
              {" "}
              <div className="flex flex-col py-5 ">
                <div className="text-2xl font-bold">
                  {Content.HomeContent.registerContact}
                </div>
                <div
                  className="py-3 max-sm:w-[320px] max-sm:h-[48px] text-sm "
                  style={{ color: "#817DA0" }}
                >
                  {Content.HomeContent.contact_des}
                </div>
                <div className="  flex gap-5 py-3 max-sm:justify-between  overflow-hidden">
                  <div className=" bg-customBlack border-b border-b-customGrey flex items-center lg:w-[80%] z-0  ">
                    <input
                      placeholder="Email của bạn"
                      className="border-0 bg-customBlack max-sm:w-[270px] focus:outline-none"
                    />
                  </div>

                  <Image
                    src={email}
                    height={34}
                    width={34}
                    alt=""
                    className="relative left-[3%]"
                    quality={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-2  ">
              <div className=" flex justify-center relative top-[-170px] ">
                <div className="bg-gradient-to-r from-purple_cus to-blue_pur   w-[1440px]  z-10 rounded-3xl   h-[355px]">
                  <div className="py-10  flex flex-row items-center justify-center gap-10">
                    <div
                      className="font-bold w-[379px] h-[144px]"
                      style={{ fontSize: 34 }}
                    >
                      <div>
                        Tải xuống ứng dụng để kết bạn,tương tác,chia sẽ,giải trí
                      </div>
                    </div>
                    <div className="py-5 flex flex-row gap-10">
                      <div className="">
                        <Image src={qr1} width={109} height={109} alt="" />
                        <div className="pt-3 w-full text-center text-[20px]">Appstore</div>
                      </div>
                      <div>
                        <Image src={qr1} width={109} height={109} alt="" />
                        <div className="pt-3 w-full text-center text-[20px]">Google Play</div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="font-bold text-md"
                        style={{ fontSize: 24 }}
                      >
                        Tải xuống ứng dụng ngay bây giờ để trải nghiệm
                      </div>
                      <div className="flex flex-row gap-5 pt-3">
                        <div>
                          <button className="  border border-white rounded-md w-[104px] h-[33px] bg-customBlack">
                            <Link href="https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=vi">
                              {" "}
                              <Image src={blackAppStore} alt=""  quality={100}/>
                            </Link>
                          </button>
                        </div>
                        <div>
                          <button className="  border border-white rounded-md w-[104px] h-[33px] bg-customBlack">
                            <Link href="https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=vi">
                              {" "}
                              <Image src={google} alt="" quality={100} />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-5 pb-10 flex flex-row  items-center justify-center  justify-around  ">
                    <div className="w-[180px] h-[36px] flex items-center gap-2 text-[16px] underline underline-offset-3">
                      <span>
                        <Image src={mail} alt="" width={30} height={24} quality={100}/>
                      </span>
                      support@occo.vn
                    </div>
                    <div className="w-[180px]  h-[36px] flex items-center gap-2 text-[16px] ">
                      <span>
                        <Image src={iconPhone} alt="" width={30} height={30}  quality={100}/>
                      </span>
                      0399961368
                    </div>
                    <div className="w-[607px] flex items-center  h-[36px] gap-2 text-[16px]">
                      <span>
                        <Image src={location} alt="" width={24} height={30}  quality={100}/>
                      </span>
                      Số 838, Ấp Vĩnh Bình, Xã An Vĩnh Ngãi, Tp Tân An, Tỉnh
                      Long An, Việt Nam
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

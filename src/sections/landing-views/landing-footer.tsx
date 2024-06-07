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
      <div className="flex  2xl:text-2xl flex-col pt-15 py-5  min-w-screen text-white justify-center relative min-[787px]:hidden overflow-x-scroll no-scrollbar lg:max-h-[30vh] w-full z-0 ">
        <div className="flex flex-col py-5 px-5">
          <div className="text-2xl font-bold  lg:text-5xl max-sm:text-[22px] flex justify-center">
            {Content.HomeContent.registerContact}
          </div>
          <div className="flex justify-center">
          <div
            className="py-3 max-sm:w-[320px] max-sm:h-[48px] text-sm overflow-x-scroll no-scrollbar  text-lg max-sm:text-[14px] h-[48px]  w-[540px]"
            style={{ color: "#817DA0" }}
          >
            {Content.HomeContent.contact_des}
          </div>
          </div>
          <div className="  flex gap-2 py-3  max-sm:pt-5  lg:justify-between flex justify-center ">
            <div className=" bg-customBlack border-b border-b-customGrey flex items-center  ">
              <input
                placeholder="Email của bạn"
                className="border-0 bg-customBlack max-sm:w-[280px] focus:outline-none  max-[1024px]:w-[500px] w-[500px]"
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
            <div className="bg-gradient-to-r from-purple_cus to-blue_pur max-[500px]:w-full  w-[360px] h-[400px]  z-10 rounded-3xl ">
              <div className="py-10 px-5 flex flex-col">
                <div className="font-bold text-2xl">
                  <div>Tải xuống ứng dụng để</div>
                  <div>Kết bạn,tương tác</div>
                  <div>Chia sẽ,giải trí</div>
                </div>
                <div className="py-5 flex flex-row gap-10">
                  <div className="">
                    <Image src={qr1} width={70} height={70} alt="" />
                    <div className="pt-3">App Store</div>
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
                        <Link href="https://www.apple.com/vn/app-store/">
                          {" "}
                          <Image src={blackAppStore} alt="" quality={100} />
                        </Link>
                      </button>
                    </div>
                    <div>
                      <button className=" w-[104px] h-[33px] ">
                        <Link href="https://play.google.com/store/apps/details?id=com.ea.game.pvzfree_row&hl=vi">
                          {" "}
                          <Image src={google} alt="" quality={100} />
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-min-screen w-max-screen lg:mt-20  max-h-[530px]  min-[500px]:px-[80px] z-0  ">
        <div className="pt-10  max-w-[1440px] text-white max-[787px]:hidden overflow-hidden">
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
                <div className="bg-gradient-to-r from-purple_cus to-blue_pur   w-full max-w-[1440px]  z-0 rounded-3xl   h-[255px]">
                  <div className="py-10  flex flex-row items-center justify-center gap-10 px-5 ">
                    <div className="font-bold w-[379px] h-[144px] text-[34px] max-[1290px]:text-[27px] max-[980px]:text-[25px] max-[830px]:text-[22px] max-[730px]:text-[20px]">
                      <div>
                        Tải xuống ứng dụng để kết bạn,tương tác,chia sẽ,giải trí
                      </div>
                    </div>
                    <div className="py-5 flex flex-row gap-10 max-[800px]:gap-3">
                      <div className="">
                        <Image src={qr1} width={109} height={109} alt="" />
                        <div className="pt-3 w-full text-center text-[20px] max-[1290px]:text-[14px] max-[1493px]:text-[16px] max-[1075px]:text-[12px]">
                          App Store
                        </div>
                      </div>
                      <div>
                        <Image src={qr1} width={109} height={109} alt="" />
                        <div className="pt-3 w-full text-center text-[20px] max-[1290px]:text-[14px] max-[1493px]:text-[16px] max-[1075px]:text-[12px] max-[1360px]:text-[14px]">
                          Google Play
                        </div>
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
                        <div className="   max-w-[104px] max-h-[30px] ">
                          <button>
                            <Link
                              href="https://www.apple.com/vn/app-store/"
                              className="   max-w-[104px] max-h-[30px] "
                            >
                              <Image
                                src={blackAppStore}
                                alt=""
                                quality={100}
                                width={104}
                                height={20}
                              />{" "}
                            </Link>
                          </button>
                        </div>
                        <div>
                          <button>
                            <Link
                              href="https://www.apple.com/vn/app-store/"
                              className="   max-w-[104px] max-h-[30px] "
                            >
                              {" "}
                              <Image
                                src={google}
                                alt=""
                                quality={100}
                                width={104}
                                height={30}
                              />
                            </Link>
                          </button>
                        </div>
                      </div>
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

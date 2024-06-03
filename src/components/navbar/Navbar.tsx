import Image from "next/image";
import logo from "../../../public/asset/images/logo.jpg";
import Link from "next/link";
import star from "../../../public/asset/images/star.png";
import NavOption from "./Nav-option";
import { ROUTES } from "@/routes/route";
import NavHov from "./Nav-hov";
export default function Navbar() {
  return (
    <>
      <div className="text-white min-w-sreen max-h-[80px] bg-navCor overflow-x-scroll no-scrollbar ">
        <div className="flex justify-center ">
          <nav
            className="lg:mx-[10%] flex  items-center justify-between p-6  lg:max-w-[1440px] w-full max-sm:mx-[5%] max-md:mx-[10%] md:max[5%] max-lg:mx-[10%] 2xl:mx-[5%]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 text-white flex-row gap-1 ">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  src={logo}
                  alt="Tok"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </a>
              <span className="flex items-center h-[49px] w-[50px] text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold">
                Occo
              </span>
            </div>
            <div className="flex lg:hidden flex-row gap-1 items-center  ">
              <span className="flex items-center border w-[100px] h-[36px] justify-center text-xs	rounded-3xl text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text border border-purple-700  border-2 text-white">
                <Link href={ROUTES.PAGE.UPGRADE}>Nâng cấp VIP</Link>
              </span>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700 dropdown"
              >
                <span>
                  <NavHov />
                </span>
              </button>
            </div>
            <div className="flex flex-row gap-5 items-center  max-lg:hidden text-customGrey">
              <NavOption />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

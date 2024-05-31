"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { ROUTES } from "@/routes/route";
import Image from "next/image";
import logo from "../../../public/asset/images/logo.jpg";
export default function NavHov() {
  const [currentPage, setCurrentPage] = useState(0);
  const [openSlide, setOpenSlide] = useState(0);
  const handleOver = (event: any) => {
    event.stopPropagation();
    setOpenSlide(0);
  };

  const handleChoose = (event:any) => {
    event.stopPropagation();
    setOpenSlide(0);
    setCurrentPage(1);
  };

  useEffect(() => {
    setOpenSlide(0);
  }, [currentPage, openSlide]);
 
  return (
    <>
      <div>
        <div className="drawer " onClick={() => setOpenSlide(1)}>
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={openSlide == 0 ? false : true}
          />
          <div className="drawer-content ">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button bg-navCor border-0"
            >
              <svg
                className="h-[35px] w-[35px]"
                fill="none"
                viewBox="0 0 24 24"
               
                stroke="white"
                aria-hidden="true"
              >
                <path
                  
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
              onClick={(event) => handleOver(event)}
            ></label>
            <ul className="menu p-4 w-80 min-h-full  bg-navCor text-white relative z-2">
              <div className="flex flex-row gap-3">
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

              <li
                className="pt-3 active:text-red"
                onClick={(event) => handleChoose(event)}
              >
                <Link href={ROUTES.PAGE.ROOT}>Trang Chủ</Link>
              </li>
              <li className="pt-3" onClick={(event) => handleChoose(event)}>
                <Link href={ROUTES.PAGE.ABOUT}>Về Occo</Link>
              </li>
              <li className="pt-3" onClick={(event) => handleChoose(event)}>
                <Link href={ROUTES.PAGE.PRIVACY}>Chính sách bảo mật</Link>
              </li>
              <li className="pt-3" onClick={(event) => handleChoose(event)}>
                <Link href={ROUTES.PAGE.RULES}>Điều Khoản và Quyền riêng tư</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

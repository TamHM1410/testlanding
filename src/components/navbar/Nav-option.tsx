"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "../../routes/route";
import Link from "next/link";

export default function NavOption() {
  const params = usePathname();
  const [active, setActive] = useState(0);

  useEffect(() => {
    switch (params) {
      case "/":
        setActive(0);
        break;
      case "/about":
        setActive(1);
        break;
      case "/upgrade":
        setActive(2);
        break;
      case "/privacy":
        setActive(3);
        break;
      case "/rules":
          setActive(4);
          break;
    }
  }, [params]);

  return (
    <>
      <div
        className=" h-[40px] flex items-center px-2   border-0"
        style={{
          color: active == 0 ? "white" : "",
          backgroundImage:
            active == 0
              ? "linear-gradient(to bottom, #230D48 58%, #AA4ABA 100%,#D568D1 100%)"
              : "",
        }}
      >
        <Link href={ROUTES.PAGE.ROOT} className=" w-full ">
          Trang Chủ
        </Link>
      </div>
      <div
        style={{
          color: active == 1 ? "white" : "",
          backgroundImage:
            active == 1
              ? "linear-gradient(to bottom, #230D48 58%, #AA4ABA 100%,#D568D1 100%)"
              : "",
        }}
      >
        <Link href={ROUTES.PAGE.ABOUT} className=" w-full ">
          Về Occo
        </Link>
      </div>
      <div>
        {" "}
        <Link
          style={{
            color: active == 3 ? "white" : "",
            backgroundImage:
              active == 3
                ? "linear-gradient(to bottom, #230D48 58%, #AA4ABA 100%,#D568D1 100%)"
                : "",
          }}
          href={ROUTES.PAGE.PRIVACY}
        >
          Chính sách bảo mật
        </Link>
      </div>
      <div   className="">
        {" "}
        <Link
          style={{
            color: active == 4 ? "white" : "",
            backgroundImage:
              active == 4
                ? "linear-gradient(to bottom, #230D48 58%, #AA4ABA 100%,#D568D1 100%)"
                : "",
          }}
          href={ROUTES.PAGE.RULES}
        
        >
          Điều Khoản & Quyền riêng tư
        </Link>
      </div>
      <div>
        <span className="flex items-center border w-[100px] h-[36px] justify-center text-xs	rounded-3xl text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text border border-purple-700  border-2 text-white">
          <Link href={ROUTES.PAGE.UPGRADE}  style={{
            color: active == 2 ? "white" : "",
            backgroundImage:
              active == 2
                ? "linear-gradient(to bottom, #230D48 58%, #AA4ABA 100%,#D568D1 100%)"
                : "",
          }}>Nâng cấp VIP</Link>
        </span>
      </div>
    </>
  );
}

import { Content } from "@/utils";

export default function UpgradePackage() {
  return (
    <>
      <div className="py-10  text-white mx-[10%] max-sm:mx-[2%] 2xl:mx-[25%]">
       <div className="flex justify-center">
        <div className="max-w-[1440px]">
        <div className="flex justify-center text-center flex-col gap-y-5 pb-5">
          <div className="text-2xl font-bold">{Content.upgrade.register}</div>
          <div className=" text-customGrey">{Content.upgrade.re_des}</div>
        </div>
        <div className="py-5 grid grid-cols-3 gap-x-2 lg:gap-10 ">
          {Content.upgrade.card &&
            Content.upgrade.card.map((item,index) => {
              return (
                <>
                  <div
                  key={index}
                    className="package flex  h-[240px] bg-customBlack rounded relative flex-col border-2 border-purple-600 min-h-max"
                    style={{
                      borderColor:
                        "linear-gradient(to bottom, #EF01BC 0%,#6603AC 100%)",
                    }}
                  >
                    <div className="flex justify-center">
                      <div
                        className="max-sm:text-xs text-xs   absolute  top-[-19px] rounded-xl px-1 py-2 w-[80%] text-center text-sm"
                        style={{ backgroundColor: "#FF6539" }}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div className="mt-10 gap-y-5">
                      <div className="flex justify-center text-3xl font-bold">
                        {item.month}
                      </div>
                      <div
                        className="flex justify-center text-2xl font-semibold	text-purple-500 pt-2 "
                        style={{ color: "#A11BC7" }}
                      >
                        Tháng
                      </div>
                      <div className="flex justify-center text-xl font-semibold pt-2">
                        {item.price} Thóc
                      </div>
                      <div className="flex justify-center pt-2 text-sm w-[100%] min-h-[23%] max-h-[23%] overflow-hidden text-center">
                        {`${item.price}.000`} đ/Tháng
                      </div>
                      <div className="flex justify-center py-2">
                        <button
                          className="bg-red-900 w-[80%] rounded-xl "
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #EF01BC 0%,#6603AC 100%)",
                            borderImageSlice: 1,
                          }}
                        >
                          Mua
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        </div>
      
       </div>
      </div>
    </>
  );
}

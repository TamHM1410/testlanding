import { Content } from "@/utils";

export default function UpgradePackage() {
  return (
    <>
      <div className="py-5  text-white   px-5">
       <div className="flex justify-center">
        <div className="max-w-[1440px]">
        <div className="flex justify-center text-center flex-col gap-y-5 pb-5">
          <div className=" font-bold lg:text-5xl max-sm:text-[22px]">{Content.upgrade.register}</div>
          <div className="flex justify-center"><div className=" text-customGrey text-lg w-[713px] h-[73px]  max-sm:w-[353px] max-sm:h-[65px] max-sm:text-[14px]">{Content.upgrade.re_des}</div></div>
        </div>
        <div className="py-5 grid grid-cols-3 overflow-x-scroll  no-scrollbar gap-5 max-sm:gap-2">
          {Content.upgrade.card &&
            Content.upgrade.card.map((item,index) => {
              return (
                <>
                  <div
                  key={index}
                    className="package flex  h-[517px] bg-customBlack rounded-2xl relative flex-col border-2 border-purple-600 min-h-max  w-[412px]  max-sm:w-[108px]  max-sm:h-[163px]  max-lg:h-[250px] max-lg:w-[240px] "
                    style={{
                      borderColor:
                        "linear-gradient(to bottom, #EF01BC 0%,#6603AC 100%)",
                    }}
                  >
                    <div className="flex justify-center">
                      <div
                        className="  absolute  top-[-19px] max-sm:top-[-10px] rounded-xl px-1 py-2 w-[200px] text-center font-semibold text-xl max-sm:w-[64px] max-sm:text-[7px] max-sm:h-[18px]  flex items-center justify-center"
                        style={{ backgroundColor: "#FF6539" }}
                      >
                        {item.title}
                      </div>
                    </div>
                    <div className="lg:mt-10 gap-y-5 max-lg:mt-5 max-sm:mt-[3px]">
                      <div className="flex justify-center  font-bold lg:text-[110px] max-sm:text-[30px] max-lg:text-[30px]" >
                        {item.month}
                      </div>
                      <div
                        className="flex justify-center text-2xl font-semibold	text-purple-500  font-semibold lg:text-[48px] max-sm:text-[16px]"
                        style={{ color: "#A11BC7" }}
                      >
                        Tháng
                      </div>
                      <div className="flex justify-center text-xl font-bold lg:pt-10 lg:text-[50px] max-sm:text-[16px]" >
                        {item.price} Thóc
                      </div>
                      <div className="flex justify-center lg:pt-10 text-sm w-[100%] text-center lg:text-[30px]    max-sm:text-[10px] " >
                        {`${item.price}.000`} đ/Tháng
                      </div>
                      <div className="flex justify-center lg:py-5 max-lg:py-2">
                        <button
                          className="bg-red-900 w-[80%] rounded-xl max-sm:w-[68px] max-sm:h-[18px] flex items-center justify-center "
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, #EF01BC 0%,#6603AC 100%)",
                            borderImageSlice: 1,
                          }}
                        >
                          <div className="max-sm:text-[8px] font-bold py-[10px]" >Chọn</div>
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

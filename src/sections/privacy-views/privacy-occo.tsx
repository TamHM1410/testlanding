import { Content } from "@/utils";
export default function PrivacyOcco() {
  return (
    <>
        <div className="py-5 min-h-screen text-white flex justify-center flex flex-col overflow-x-scroll no-scrollbar ">
        <div className="flex justify-center">
        <div className="flex justify-center py-10 text-2xl  text-white max-w-[1440px] max-sm:text-[14px]  lg:text-[18px] px-5">
          {Content.privacy.title}
        </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[1440px]  text-white lg:text-2xl px-5 ">
          {Content.privacy.privacy.map((item, index) => {
            return (
              <>
                <div key={index} className="text-lg 2xl:text-2xl max-sm:text-[14px] lg:text-[18px]">{item.title}</div>
                {item?.des.map((item) => {
                  return (
                    <>
                      <div key={item} className="text-sm py-3  2xl:text-xl  max-sm:text-[14px] lg:text-[18px]">{item}</div>
                    </>
                  );
                })}
              </>
            );
          })}
          </div>
        </div>

        <div className="flex justify-center pt-10 text-2xl text-center max-sm:text-sm px-5">
          {Content.rule.conclusion}
        </div>
      </div>

    </>
  );
}
      {/* <div className="py-5 mx-[10%] min-h-screen flex lg:justify-center 2xl:text-2xl">
        <div className=" text-customGrey flex flex-col justify-center">
          <div className="py-10">
          <div className="lg:text-3xl text-2xl">{Content.privacy.title}</div>
          </div>
      
          <div className="max-w-[1440px] flex justify-center flex-col">
          {Content.privacy.privacy.map((item, index) => {
            return (
              <>
                <div key={index} className="text-xl">{item.title}</div>
                {item?.des.map((item) => {
                  return (
                    <>
                      <div key={item} className="text-xl">{item}</div>
                    </>
                  );
                })}
              </>
            );
          })}
          </div>
        </div>
      </div> */}
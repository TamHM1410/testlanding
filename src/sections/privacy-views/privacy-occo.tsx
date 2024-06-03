import { Content } from "@/utils";
export default function PrivacyOcco() {
  return (
    <>
        <div className="py-5 min-h-screen text-white flex justify-center flex flex-col">
        <div className="flex justify-center">
        <div className="flex justify-center py-10 text-2xl  text-customGrey max-w-[1440px] mx-[10%]">
          {Content.privacy.title}
        </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-[1440px] mx-[10%]  text-customGrey lg:text-2xl">
          {Content.privacy.privacy.map((item, index) => {
            return (
              <>
                <div key={index} className="text-lg 2xl:text-2xl">{item.title}</div>
                {item?.des.map((item) => {
                  return (
                    <>
                      <div key={item} className="text-sm py-3  2xl:text-xl ">{item}</div>
                    </>
                  );
                })}
              </>
            );
          })}
          </div>
        </div>

        <div className="flex justify-center pt-10 text-2xl text-center max-sm:text-sm">
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
import { Content } from "@/utils";
export default function PrivacyOcco() {
  return (
    <>
      <div className="py-5 mx-[10%] min-h-screen flex lg:justify-center 2xl:text-2xl">
        <div className="w-[90%] text-customGrey max-lg:w-[100%]">
          <div className="">{Content.privacy.title}</div>
          {Content.privacy.privacy.map((item,index) => {
            return (
              <>
                <div key={index}>{item.title}</div>
                {item?.des.map((item) => {
                  return (
                    <>
                      <div key={item}>{item}</div>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

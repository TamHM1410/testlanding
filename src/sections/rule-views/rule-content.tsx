import { Content } from "@/utils";
export default function RuleContent() {
  return (
    <>
      <div className="py-5 min-h-screen text-white flex justify-center flex flex-col">
        <div className="flex justify-center py-10 text-3xl text-customGrey">
          {Content.rule.title}
        </div>
        <div className="flex justify-center">
          <div className="max-w-[1440px] mx-[10%] text-customGrey">
            {Content.rule.content.map((item, index) => {
              return (
                <>
                  <div className="" key={index}>
                    <div className="title text-2xl font-md pt-5">
                      {item?.title}
                    </div>
                    <div className="text-md md:text-xl ">{item?.des}</div>
                    {item?.index.map((item, index) => {
                      return (
                        <>
                          <div className="py-5 md:text-xl">{item.title}</div>
                          <div>
                            {item.des.map((item, index) => {
                              return (
                                <>
                                  <div className="py-3 md:text-xl">{item}</div>
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </div>
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

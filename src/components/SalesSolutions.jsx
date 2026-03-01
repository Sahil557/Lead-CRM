import { useState } from "react";

const TABS = [
  {
    label: "CRM Data Enrichment",
    icon: "/crm-database.png",
    height: "34",
    width: "34",
  },
  {
    label: "CRM Data Sync",
    icon: "/sync.png",
    height: "28",
    width: "28",
  },
  {
    label: "Bulk Export & Enrichment",
    icon: "/bulk-export.png",
    height: "34",
    width: "34",
  },
  {
    label: "AI Productivity",
    icon: "/brain.png",
    height: "34",
    width: "34",
  },
];


const SalesSolutions = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 relative">
      <img
        src="/robo.png"
        className="absolute top-0 md:top-28 -left-3 md:w-27 pointer-events-none"
        alt="Robo Graphic"
      />
      <div className="mx-auto max-w-7xl">
        <div className="py-20">
          <h2 className="text-[#090F4E] font-semibold text-4xl text-center">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="text-[#4D4D4D] font-normal text-lg text-center mt-5">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex w-max lg:w-full">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`relative pb-4 text-sm font-semibold flex justify-center gap-2 items-center 
                    min-w-[80px] lg:min-w-0 lg:flex-1 group px-8 lg:px-0 ${
                      active !== i && "border-b-2 border-[#EDEDED]"
                    }`}
              >
                <img src={tab.icon} height={tab.height} width={tab.width} />
                <span
                  className={`transition-colors duration-200 text-lg whitespace-nowrap ${
                    active === i
                      ? "text-[#090F4E] font-semibold"
                      : "text-[#4C4C4C] group-hover:text-[#01B2D8] font-normal"
                  }`}
                >
                  {tab.label}
                </span>

                {active === i && (
                  <span className="absolute w-full left-1/2 -translate-x-1/2 bottom-[0.70px] translate-y-1/2 h-1.5 bg-[#090F4E] rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {active === 0 ? (
          <>
            <div className="lg:flex gap-2 mt-9 mb-7 px-4 xl:px-0">
              <p className="text-[#4D4D4D] text-xl text-center md:text-start">
                It’s hard to find the accurate contact data for every prospects
                by
              </p>
              <div className="text-small px-3 py-1 bg-[#FFDCD4] rounded-2xl text-[#FF4C51] font-medium w-max mx-auto sm:mx-0 mt-2 md:mt-0">
                Incomplete Data
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch px-4 xl:px-0">
              {/* your full existing enrichment layout here */}
            </div>
          </>
        ) : (
          /* Other Tabs Content */
          <div className="text-center py-20 px-4 min-h-72">
            <p className="text-2xl font-semibold text-[#090F4E]">
              {TABS[active].label}
            </p>
            <p className="text-[#4D4D4D] text-lg mt-4">
              Content for this section will change based on the selected
              solution.
            </p>
          </div>
        )}

        {active === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch px-4 xl:px-0">
            {/* Feature List */}
            <div className="bg-[#F0F4FD] rounded-2xl p-5 space-y-3">
              <p className="text-xl font-semibold text-[#262626]">
                Here is how LeadCRM tackles that situation.
              </p>
              <div className="text-lg font-semibold text-[#097737] flex gap-2 items-center">
                Try LeadCRM Data Enrichment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    d="M0.33471 0.340589C0.12033 0.556248 0 0.847978 0 1.15206C0 1.45615 0.12033 1.74788 0.33471 1.96354L4.40935 6.09573L0.33471 10.1704C0.12033 10.386 0 10.6778 0 10.9818C0 11.2859 0.12033 11.5777 0.33471 11.7933C0.441713 11.9012 0.569018 11.9868 0.709282 12.0453C0.849545 12.1037 0.999991 12.1338 1.15194 12.1338C1.30389 12.1338 1.45434 12.1037 1.5946 12.0453C1.73486 11.9868 1.86217 11.9012 1.96917 11.7933L6.84953 6.91296C6.95741 6.80596 7.04304 6.67865 7.10148 6.53839C7.15991 6.39812 7.19 6.24768 7.19 6.09573C7.19 5.94378 7.15991 5.79333 7.10148 5.65307C7.04304 5.51281 6.95741 5.3855 6.84953 5.2785L1.96917 0.340589C1.86217 0.232704 1.73486 0.147075 1.5946 0.0886383C1.45434 0.0302019 1.30389 0.000115395 1.15194 0.000115395C0.999991 0.000115395 0.849545 0.0302019 0.709282 0.0886383C0.569018 0.147075 0.441713 0.232704 0.33471 0.340589Z"
                    fill="#097737"
                  />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-5 pt-5">
                <div className="bg-white p-3 rounded-xl w-full">
                  <div className="flex justify-center gap-2">
                    <img src="/msg.png" width="27" height="27" />
                    <p className="text-base font-semibold text-[#090F4E]">
                      Verified Email & Phone
                    </p>
                  </div>
                  <div className="pt-6">
                    <img src="/verify-email.png" width="291" height="299" />
                  </div>
                </div>

                <div className="bg-white rounded-xl w-full">
                  <div className="flex justify-center gap-2 mb-6 p-3">
                    <img src="/search.png" width="28" height="28" />
                    <p className="text-base font-semibold text-[#090F4E]">
                      40+ Search Filters
                    </p>
                  </div>
                  <div className="pr-3">
                    <img src="/search-filter.png" width="439" height="514" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F4FD] rounded-2xl p-5 transition-all duration-300">
              <div className="text-xl text-[#4D4D4D] font-semibold mb-9">
                If it does not works for you ! try our{" "}
                <span className="text-[#097737]">
                  Advanced Waterfall Enrichment
                </span>
              </div>
              <div className="rounded-xl p-1 bg-white">
                <img src="/advance-waterfall.png" width="617" height="381" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SalesSolutions;

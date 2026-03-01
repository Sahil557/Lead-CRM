const WITHOUT = [
  {
    title: "Manual Data Entry",
    badge: "3+ Hours wasted daily",
    description:
      "Copying LinkedIn contacts to CRM manually plus losing conversation history",
  },
  {
    title: "Incomplete Data",
    badge: "60% Data Incomplete",
    description:
      "LinkedIn profiles missing Email and Phones from 700M+ Database",
  },
  {
    title: "No CRM Visibility",
    badge: "Zero context available",
    description:
      "Can’t see existing CRM contacts when browsing LinkedIn profiles",
  },
  {
    title: "Limited Productivity",
    badge: "No smart assistance",
    description:
      "Writing messages manually plus no AI assistant for reply, Invite or comments.",
  },
];

const WITH = [
  {
    title: "Complete Bi-Directional Sync",
    icon: "/reuse.png",
    description:
      "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
  },
  {
    title: "700M+ Contacts + Enrichment",
    icon: "/user.png",
    description:
      "Get verified emails and phone numbers from a vast global database.",
  },
  {
    title: "CRM Overlay on LinkedIn",
    icon: "/book.png",
    description:
      "See full CRM insights directly on LinkedIn profiles without switching tabs.",
  },
  {
    title: "AI Response + Templates + Bulk Exports",
    icon: "/brain.png",
    description:
      "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
  },
];

const Challenges = () => (
  <section className="bg-[#fffff] pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="section-title my-10">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="relative lg:flex justify-center items-stretch">
        {/* Without */}
        <div className="card-base flex-1">
          <img src="/sale-navigator.png" alt="logo" width={491} height={191} />
          <div className="font-sora font-bold text-[#D24B68] mt-5 text-2xl">
            Without LeadCRM
          </div>
          {WITHOUT.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 space-y-4 mb-3.5 text-sm text-slate-500 leading-relaxed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9996 14.1216L17.3026 19.4246C17.584 19.706 17.9657 19.8641 18.3636 19.8641C18.7616 19.8641 19.1432 19.706 19.4246 19.4246C19.706 19.1432 19.8641 18.7616 19.8641 18.3636C19.8641 17.9657 19.706 17.584 19.4246 17.3026L14.1196 11.9996L19.4236 6.69662C19.5629 6.55729 19.6733 6.39189 19.7487 6.20987C19.824 6.02785 19.8628 5.83277 19.8627 5.63577C19.8627 5.43877 19.8238 5.24371 19.7484 5.06172C19.673 4.87974 19.5624 4.71439 19.4231 4.57512C19.2838 4.43586 19.1184 4.3254 18.9364 4.25005C18.7543 4.1747 18.5592 4.13595 18.3623 4.13599C18.1653 4.13604 17.9702 4.17489 17.7882 4.25032C17.6062 4.32575 17.4409 4.43629 17.3016 4.57562L11.9996 9.87862L6.6966 4.57562C6.5583 4.43229 6.39284 4.31794 6.20987 4.23924C6.0269 4.16055 5.83009 4.11907 5.63092 4.11725C5.43176 4.11543 5.23422 4.15329 5.04984 4.22862C4.86546 4.30395 4.69793 4.41526 4.55703 4.55603C4.41612 4.6968 4.30466 4.86422 4.22916 5.04853C4.15365 5.23284 4.1156 5.43034 4.11724 5.62951C4.11887 5.82868 4.16016 6.02553 4.23869 6.20857C4.31721 6.39161 4.43141 6.55718 4.5746 6.69562L9.8796 11.9996L4.5756 17.3036C4.43241 17.4421 4.31821 17.6076 4.23969 17.7907C4.16116 17.9737 4.11987 18.1706 4.11824 18.3697C4.1166 18.5689 4.15465 18.7664 4.23016 18.9507C4.30566 19.135 4.41712 19.3024 4.55803 19.4432C4.69893 19.584 4.86646 19.6953 5.05084 19.7706C5.23522 19.846 5.43276 19.8838 5.63192 19.882C5.83109 19.8802 6.0279 19.8387 6.21087 19.76C6.39384 19.6813 6.5593 19.5669 6.6976 19.4236L11.9996 14.1216Z"
                  fill="#D24B68"
                />
              </svg>
              <div className="flex flex-col  space-y-1">
                <div className="flex flex-col md:flex-row justify-start gap-2">
                  <div className="text-xl text-[#262626] font-semibold">
                    {item.title}
                  </div>
                  <div className="text-sm whitespace-nowrap px-3 py-1 bg-[#FFDCD4] rounded-2xl text-[#FF4C51] font-semibold w-max">
                    {item.badge}
                  </div>
                </div>
                <div className="font-normal text-base text-[#4C4C4C]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative lg:hidden flex px-5 my-4 items-center justify-center w-full">
          <div className="absolute left-8 right-8 h-px bg-[#BCBCBC]"></div>
          <div className="relative z-10 px-4 py-2 text-lg font-semibold text-[#090F4E] bg-white">
            VS
          </div>
        </div>

        <div className="relative hidden px-5 lg:flex items-center justify-center self-stretch">
          <div className="absolute top-8 bottom-8 w-px bg-[#BCBCBC]"></div>
          <div className="relative z-10 px-4 py-2 text-lg font-semibold text-[#090F4E] bg-white">
            VS
          </div>
        </div>

        {/* With */}
        <div className="card-base1 flex-1">
          <img src="/sync-with-crm.png" alt="logo" width={491} height={191} />
          <div className="flex flex-col md:flex-row gap-6 items-center mt-5">
            <div className="font-sora whitespace-nowrap font-bold text-[#097737] text-2xl">
              With LeadCRM
            </div>
            <div className="gap-2 flex">

            <img src="/card-logo.png" alt="logo" width={28} height={28} />
            <div className="text-sm whitespace-nowrap px-3 py-1 bg-[#E6FFF1] rounded-2xl text-[#097737] font-semibold w-max">
              4+ Hours/day Saved
            </div>
            </div>
          </div>
          {WITH.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 space-y-4 mb-3.5 text-sm text-slate-500 leading-relaxed"
            >
              <img src={item.icon} alt="logo" width={40} height={40} />
              <div className="flex flex-col space-y-1">
                <div className="flex justify-start gap-2">
                  <div className="text-xl text-[#262626] font-semibold">
                    {item.title}
                  </div>
                </div>
                <div className="font-normal text-base text-[#4C4C4C]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Badge */}

      <div className="text-center justify-center flex mt-6">
        <div className="my-auto lg:ms-64">
          <button className="btn-hero-primary shadow-lg text-nowrap">
            Start Using LeadCRM Now
          </button>
        </div>
        <img
          src="/save.png"
          alt="logo"
          width={265}
          height={149}
          className="hidden lg:block"
        />
      </div>
    </div>
  </section>
);

export default Challenges;

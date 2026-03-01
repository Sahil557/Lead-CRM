const CRM_LOGOS = [
  { color: "#0a66c2", label: "LinkedIn" },
  { color: "#ff7a59", label: "HubSpot" },
  { color: "#00a1e0", label: "Salesforce" },
  { color: "#003366", label: "Pipedrive" },
];

const RATINGS = [
  { label: "5/5", img: "/hero-chrome.png" },
  { label: "5/5", img: "/playstore-hero.png" },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#e8fffe] to-white px-6 py-20 lg:py-24 text-center">
    {/* Background blob */}
    <img
      src="/hero.png"
      alt="logo"
      width={1920}
      height={975}
      className="absolute -top-9 inset-x-0 w-full z-0"
    />
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, #e8f0fe 1px, transparent 1px), linear-gradient(to bottom, #e8f0fe 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* All content wrapped in z-10 */}
    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 bg-white backdrop-blur-sm text-[#63657E] border border-[#9ACCFF] px-4 py-2 rounded-full text-[13px] font-normal mb-5 shadow-sm">
        <img src="/rocket.png" height="20" width="20" /> Thousands of
        Professional using LeadCRM
      </div>

      {/* Heading */}
      <h1 className="font-sora font-extrabold text-4xl lg:text-5xl leading-tight text-[#1a1a2e] max-w-5xl mx-auto mb-4">
        LinkedIn CRM Integration <br className="hidden lg:block" />
        Capture, Sync and Enrich in{" "}
        <span className="inline-flex flex-col items-center md:items-start">
          <span className="bg-[#2D96BC] bg-clip-text text-transparent">
            Both Ways
          </span>
          <img src="/line.png" height="16" width="309" className="mt-1" />
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-[#363636] text-lg font-semibold mx-auto mb-8 leading-relaxed max-w-5xl">
        Automatically sync LinkedIn prospects to your CRM and overlay existing
        CRM contacts on <br className="hidden lg:block" /> LinkedIn profiles.
        Complete bi-directional integration with HubSpot, Salesforce, and
        Pipedrive.
      </p>

      {/* CRM Logo Pills */}
      <button className="flex flex-col md:flex-row justify-center gap-6 mx-auto items-center rounded-xl p-4 text-[#2E2E2E] text-[22px] font-medium bg-[linear-gradient(90deg,rgba(94,211,255,1)_0%,rgba(110,198,254,1)_39%,rgba(235,101,244,1)_69%)]">
        Works with
        <div className="marquee-vertical border border-white rounded-xl">
          <div className="marquee-track">
            {/* Original set */}
            <div className="flex gap-3 items-center">
              <img src="/hubsport1.png" alt="hub" />
              <p className="text-white">HubSport</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/pipedrive.png" alt="pipedrive" />
              <p className="text-white">Pipedrive</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/salesforce.png" alt="salesforce" />
              <p className="text-white">Salesforce</p>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex gap-3 items-center">
              <img src="/hubsport1.png" alt="hub" />
              <p className="text-white">HubSport</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/pipedrive.png" alt="pipedrive" />
              <p className="text-white">Pipedrive</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/salesforce.png" alt="salesforce" />
              <p className="text-white">Salesforce</p>
            </div>
          </div>
        </div>
      </button>

      {/* Ratings */}
      <div className="flex flex-wrap justify-center gap-6 my-7">
        {RATINGS.map((r) => (
          <div
            key={r.label}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <div className="bg-white p-3 rounded-md">
              <img
                src={r.img}
                alt={r.label}
                height="20"
                width="20"
              />
            </div>
            <div className="flex gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.43775 1.07173L4.83549 4.46222L1.25902 5.00585C0.65817 5.06307 0.357746 5.96434 0.829841 6.43644L3.4049 9.05441L2.80405 12.8169C2.68961 13.4749 3.4049 13.947 3.93422 13.6466L7.15304 11.9728L10.3719 13.6466C10.9727 13.947 11.6308 13.4749 11.502 12.8169L10.9155 9.05441L13.4762 6.43644C13.9483 5.96434 13.6479 5.12029 13.0614 5.00585L9.4849 4.46222L7.86833 1.07173C7.56791 0.470882 6.73817 0.470882 6.43775 1.07173Z"
                fill="#C58920"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.43775 1.07173L4.83549 4.46222L1.25902 5.00585C0.65817 5.06307 0.357746 5.96434 0.829841 6.43644L3.4049 9.05441L2.80405 12.8169C2.68961 13.4749 3.4049 13.947 3.93422 13.6466L7.15304 11.9728L10.3719 13.6466C10.9727 13.947 11.6308 13.4749 11.502 12.8169L10.9155 9.05441L13.4762 6.43644C13.9483 5.96434 13.6479 5.12029 13.0614 5.00585L9.4849 4.46222L7.86833 1.07173C7.56791 0.470882 6.73817 0.470882 6.43775 1.07173Z"
                fill="#C58920"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.43775 1.07173L4.83549 4.46222L1.25902 5.00585C0.65817 5.06307 0.357746 5.96434 0.829841 6.43644L3.4049 9.05441L2.80405 12.8169C2.68961 13.4749 3.4049 13.947 3.93422 13.6466L7.15304 11.9728L10.3719 13.6466C10.9727 13.947 11.6308 13.4749 11.502 12.8169L10.9155 9.05441L13.4762 6.43644C13.9483 5.96434 13.6479 5.12029 13.0614 5.00585L9.4849 4.46222L7.86833 1.07173C7.56791 0.470882 6.73817 0.470882 6.43775 1.07173Z"
                fill="#C58920"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.43775 1.07173L4.83549 4.46222L1.25902 5.00585C0.65817 5.06307 0.357746 5.96434 0.829841 6.43644L3.4049 9.05441L2.80405 12.8169C2.68961 13.4749 3.4049 13.947 3.93422 13.6466L7.15304 11.9728L10.3719 13.6466C10.9727 13.947 11.6308 13.4749 11.502 12.8169L10.9155 9.05441L13.4762 6.43644C13.9483 5.96434 13.6479 5.12029 13.0614 5.00585L9.4849 4.46222L7.86833 1.07173C7.56791 0.470882 6.73817 0.470882 6.43775 1.07173Z"
                fill="#C58920"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.43775 1.07173L4.83549 4.46222L1.25902 5.00585C0.65817 5.06307 0.357746 5.96434 0.829841 6.43644L3.4049 9.05441L2.80405 12.8169C2.68961 13.4749 3.4049 13.947 3.93422 13.6466L7.15304 11.9728L10.3719 13.6466C10.9727 13.947 11.6308 13.4749 11.502 12.8169L10.9155 9.05441L13.4762 6.43644C13.9483 5.96434 13.6479 5.12029 13.0614 5.00585L9.4849 4.46222L7.86833 1.07173C7.56791 0.470882 6.73817 0.470882 6.43775 1.07173Z"
                fill="#C58920"
              />
            </svg>
            </div>
            <span>{r.label}</span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-[#373737] text-white px-5 rounded-xl hover:bg-[#01B2D8] hover:-translate-y-0.5 transition-transform cursor-pointer"
          onClick={() => (window.location.href = "/help-center")}
        >
          <div className="flex gap-4 text-xs font-normal py-3.5 px-2">
            <div className="flex flex-col items-start">
              Available in <br />
              <span className="text-sm font-medium">Chrome Web Store</span>
            </div>
            <div>
              <img src="/chrome.png" width={34} height={34} />
            </div>
          </div>
        </button>
        <button className="btn-hero-primary md:px-5">Get Free Trial Now!</button>
      </div>
    </div>
  </section>
);
export default Hero;

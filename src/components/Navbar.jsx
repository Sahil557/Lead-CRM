import { useState } from "react";

const NAV_LINKS = [
  { 
    name: "Product", 
    submenu: [
      { title: "AI-Assisted Commenting", img: "/ai-assisted.png" },
      { title: "AI Response Assistant", img: "/ai-response.png" },
      { title: "CRM Data Overlay", img: "/crm-data.png" }
    ]
  },
  { 
    name: "Pricing" 
  },
  { 
    name: "Resources", 
    submenu: [
      { title: "Blogs", img: "/blogs.png" },
      { title: "API Documents", img: "/api.png" },
      { title: "LeadCRM Alternatives", img: "/leadcrm-alt.png" },
      { title: "Lead Export Guide", img: "/export-guide.png" },
      { title: "HubSpot Troubleshooting Guide", img: "/hubsport.png" },
      { title: "FAQs", img: "/faq.png" },
    ]
  },
  { 
    name: "Company", 
    submenu: [
      { title: "About Us", img: "/about-us.png" },
      { title: "Contact Us", img: "/contact-us.png" }
    ]
  }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 pt-4 lg:py-4 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <img src="/logo.png" alt="logo" width={209} height={64} />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative group">
              <a className="text-[#222222] flex items-center gap-2 text-md font-medium cursor-pointer hover:text-[#0a66c2] transition-colors">
                {link.name}
                {link.submenu && (
                  <img src="/vector.png" alt="arrow" width={17} height={11} />
                )}
              </a>

              {/* Dropdown */}
              {link.submenu && (
                <ul className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  {link.submenu.map((item) => (
                    <li key={item} className="flex m-4 px-2 gap-2 py-4 hover:bg-[#2D96BC]/20 hover:rounded-xl">
                          <img src={item.img} alt={item.title} height="10" width="60" />
                          <a className="block p-4 text-gray-700 ">
                            {item.title}
                          </a>
                        </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="btn-primary">Get Your Free Account</button>
          <button className="btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.9449 18.4292C20.9352 18.7743 20.8562 19.1139 20.7127 19.4279C20.5693 19.7418 20.3642 20.0238 20.1096 20.257C19.8551 20.4901 19.5563 20.6698 19.231 20.7853C18.9057 20.9008 18.5605 20.9497 18.2159 20.9292C16.0629 20.9412 13.9089 20.9292 11.7559 20.9292C11.6233 20.9292 11.4961 20.8765 11.4023 20.7828C11.3085 20.689 11.2559 20.5618 11.2559 20.4292C11.2559 20.2966 11.3085 20.1694 11.4023 20.0757C11.4961 19.9819 11.6233 19.9292 11.7559 19.9292C13.9559 19.9292 16.1559 19.9612 18.3559 19.9292C19.4629 19.9132 19.9449 19.0812 19.9449 18.0912V5.62722C19.9524 5.3125 19.8637 5.00299 19.6905 4.74009C19.5174 4.4772 19.268 4.27349 18.9759 4.15622C18.6307 4.06151 18.2714 4.02934 17.9149 4.06122H11.7559C11.6233 4.06122 11.4961 4.00854 11.4023 3.91477C11.3085 3.821 11.2559 3.69382 11.2559 3.56122C11.2559 3.42861 11.3085 3.30143 11.4023 3.20766C11.4961 3.11389 11.6233 3.06122 11.7559 3.06122C13.9809 3.06122 16.2209 2.97622 18.4439 3.06122C18.7842 3.06969 19.1194 3.14579 19.43 3.28509C19.7406 3.42439 20.0204 3.6241 20.2531 3.87259C20.4858 4.12109 20.6667 4.41339 20.7853 4.73249C20.9038 5.05158 20.9578 5.39108 20.9439 5.73122L20.9449 18.4292Z"
                fill="#2D96BC"
                stroke="#2D96BC"
              />
              <path
                d="M15.7942 12.3523C15.8785 12.2698 15.9279 12.1581 15.9322 12.0403L15.9382 11.9983L15.9322 11.9573C15.9281 11.8391 15.8787 11.727 15.7942 11.6443L12.1252 7.97629C12.0309 7.88521 11.9046 7.83482 11.7735 7.83596C11.6424 7.8371 11.517 7.88968 11.4243 7.98238C11.3316 8.07509 11.279 8.20049 11.2779 8.33159C11.2767 8.46269 11.3271 8.58899 11.4182 8.68329L14.2342 11.4983H3.49219C3.35958 11.4983 3.2324 11.551 3.13863 11.6447C3.04487 11.7385 2.99219 11.8657 2.99219 11.9983C2.99219 12.1309 3.04487 12.2581 3.13863 12.3518C3.2324 12.4456 3.35958 12.4983 3.49219 12.4983H14.2342L11.4182 15.3133C11.3271 15.4076 11.2767 15.5339 11.2779 15.665C11.279 15.7961 11.3316 15.9215 11.4243 16.0142C11.517 16.1069 11.6424 16.1595 11.7735 16.1606C11.9046 16.1618 12.0309 16.1114 12.1252 16.0203L15.7942 12.3523Z"
                fill="#2D96BC"
                stroke="#2D96BC"
              />
            </svg>
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700 p-2 focus:outline-none"
          >
            {mobileOpen ? (
              // Close icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <details>
                  <summary className="flex justify-center items-center gap-2 cursor-pointer px-2 py-2 text-[#222222] hover:bg-[#2D96BC]/20 font-semibold rounded-md">
                    {link.name}
                    {link.name !== "Pricing" && <img src="/vector.png" alt="arrow" width={17} height={11} />}
                  </summary>
                  {link.submenu && (
                    <ul className="pl-4 mt-1 flex flex-col items-center gap-1">
                      {link.submenu.map((item) => (
                        <li key={item}>
                          <a className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="mt-4 flex flex-col gap-2">
              <button className="btn-primary w-full">
                Get Your Free Account
              </button>
              <button className="btn-outline w-full flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.9449 18.4292C20.9352 18.7743 20.8562 19.1139 20.7127 19.4279C20.5693 19.7418 20.3642 20.0238 20.1096 20.257C19.8551 20.4901 19.5563 20.6698 19.231 20.7853C18.9057 20.9008 18.5605 20.9497 18.2159 20.9292C16.0629 20.9412 13.9089 20.9292 11.7559 20.9292C11.6233 20.9292 11.4961 20.8765 11.4023 20.7828C11.3085 20.689 11.2559 20.5618 11.2559 20.4292C11.2559 20.2966 11.3085 20.1694 11.4023 20.0757C11.4961 19.9819 11.6233 19.9292 11.7559 19.9292C13.9559 19.9292 16.1559 19.9612 18.3559 19.9292C19.4629 19.9132 19.9449 19.0812 19.9449 18.0912V5.62722C19.9524 5.3125 19.8637 5.00299 19.6905 4.74009C19.5174 4.4772 19.268 4.27349 18.9759 4.15622C18.6307 4.06151 18.2714 4.02934 17.9149 4.06122H11.7559C11.6233 4.06122 11.4961 4.00854 11.4023 3.91477C11.3085 3.821 11.2559 3.69382 11.2559 3.56122C11.2559 3.42861 11.3085 3.30143 11.4023 3.20766C11.4961 3.11389 11.6233 3.06122 11.7559 3.06122C13.9809 3.06122 16.2209 2.97622 18.4439 3.06122C18.7842 3.06969 19.1194 3.14579 19.43 3.28509C19.7406 3.42439 20.0204 3.6241 20.2531 3.87259C20.4858 4.12109 20.6667 4.41339 20.7853 4.73249C20.9038 5.05158 20.9578 5.39108 20.9439 5.73122L20.9449 18.4292Z"
                    fill="#2D96BC"
                    stroke="#2D96BC"
                  />
                  <path
                    d="M15.7942 12.3523C15.8785 12.2698 15.9279 12.1581 15.9322 12.0403L15.9382 11.9983L15.9322 11.9573C15.9281 11.8391 15.8787 11.727 15.7942 11.6443L12.1252 7.97629C12.0309 7.88521 11.9046 7.83482 11.7735 7.83596C11.6424 7.8371 11.517 7.88968 11.4243 7.98238C11.3316 8.07509 11.279 8.20049 11.2779 8.33159C11.2767 8.46269 11.3271 8.58899 11.4182 8.68329L14.2342 11.4983H3.49219C3.35958 11.4983 3.2324 11.551 3.13863 11.6447C3.04487 11.7385 2.99219 11.8657 2.99219 11.9983C2.99219 12.1309 3.04487 12.2581 3.13863 12.3518C3.2324 12.4456 3.35958 12.4983 3.49219 12.4983H14.2342L11.4182 15.3133C11.3271 15.4076 11.2767 15.5339 11.2779 15.665C11.279 15.7961 11.3316 15.9215 11.4243 16.0142C11.517 16.1069 11.6424 16.1595 11.7735 16.1606C11.9046 16.1618 12.0309 16.1114 12.1252 16.0203L15.7942 12.3523Z"
                    fill="#2D96BC"
                    stroke="#2D96BC"
                  />
                </svg>
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const SCREENS = [
  { icon: '👤', label: 'LinkedIn Profile' },
  { icon: '📊', label: 'CRM Overlay' },
  { icon: '📧', label: 'Email Finder' },
  { icon: '🔄', label: 'Sync to CRM' },
];

const CTABanner = () => (
  <section className="bg-[#EAEFFA] mb-48 px-10">
    <div className="mx-auto max-w-7xl">
    <h2 className="font-semibold text-4xl text-[#090F4E] pt-12 pb-7">
      Join Thousands of Professionals Using LeadCRM
    </h2>
    
    <img src="/join-thousands.png" height={408} width={1440} />
    
    <div className="text-center pt-12 pb-7">
      <button className="btn-hero-primary flex items-center gap-2 sm:gap-8 px-4 sm:px-6 bg-[#9EE25A] py-4 text-lg mx-auto text-nowrap">
        Get Started Today
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 5L20 12M20 12L13 19M20 12H4" stroke="#1A1A1A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    </div>
  </section>
);

export default CTABanner;

const REVIEWS = [
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: 'David Fischer',
    role: 'On Capterra',
    stars: 5,
  },
  {
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    name: 'Lillian Williams',
    role: 'On Capterra',
    stars: 5,
  },
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: 'Michael',
    role: 'On Capterra',
    stars: 5,
  },
];

const Testimonials = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl">

      <h2 className="text-center xl:text-left font-sora text-4xl font-semibold text-[#090F4E] mb-10">What people are saying about LeadCRM</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 xl:px-0">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="border border-[#EEEFFF] bg-[#F9F0F8] rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col"
          >
            <p className="text-[#2C2C2C] font-semibold text-base my-3">“{r.text}“</p>
        
            <div className="flex gap-2 mb-24">
              <img src="/star.png" width={110} height={24} />
            </div>
        
            <div className="flex items-center gap-3 border-t border-[#7A7A7A]/30 pt-3 mt-auto">
              <img src="/david.png" width={44} height={44} />
              <div>
                <div className="text-xl font-semibold text-[#1a1a2e]">{r.name}</div>
                <div className="text-sm text-[#696969]">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

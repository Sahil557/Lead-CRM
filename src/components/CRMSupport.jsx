const CRMSupport = () => (
  <section className="relative py-20 px-6 overflow-hidden">
    <div className="mx-auto max-w-7xl relative z-10 mb-28">
      
      {/* Wrap heading in relative container so image positions relative to text */}
      <div className="relative w-fit mx-auto">
        <h2 className="section-title text-center">Our Supported LeadCRM</h2>
        <img
          src="/message.png"
          className="absolute -top-24 -right-8 md:-right-24 pointer-events-none"
          alt="message Graphic"
        />
      </div>

      <p className="text-[#4D4D4D] text-lg text-center font-normal mb-10 max-w-5xl mx-auto">
        LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don't want you to miss any revenue opportunity on the internet!
      </p>

      <img src="/leadcrm-supported.png" className="mx-auto mb-10" />

      <div className="flex justify-center">
        <button className="btn-hero-primary text-nowrap py-5 text-lg">
          Lets Integrate your CRM Now!
        </button>
      </div>
    </div>

    <img
      src="/collaboration.png"
      className="absolute -bottom-0 right-0 pointer-events-none"
      alt="Collaboration Graphic"
    />
  </section>
);

export default CRMSupport;
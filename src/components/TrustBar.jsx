const TrustBar = () => {
  const items = [
    {
      title: "Access to",
      highlight: "700M+ Contacts",
      img: "/contact.png",
      height: "58",
      width: "58",
    },
    {
      title: "",
      highlight: "One click",
      suffix: " push to CRM",
      img: "/thumb.png",
      height: "41",
      width: "38",
    },
    {
      title: "",
      highlight: "Custom Field",
      suffix: " Mapping",
      img: "/mapping.png",
      height: "47",
      width: "47",
    },
    {
      title: "Advanced",
      highlight: "Waterfall Enrichment",
      img: "/waterfall.png",
      height: "40",
      width: "40",
    },
    {
      title: "Instant",
      highlight: "Email Finder",
      img: "/mail.png",
      height: "40",
      width: "40",
    },
    {
      title: "Seamless",
      highlight: "Deal Management",
      img: "/deal.png",
      height: "40",
      width: "40",
    },
    {
      title: "Advanced AI",
      highlight: "Productivity",
      img: "/ai.png",
      height: "40",
      width: "40",
    },
  ];

  return (
    <div className="w-full bg-white pt-20 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-10 text-[#6C6C6C] text-lg font-normal whitespace-nowrap"
          >
            <img src={item.img} height={item.height} width={item.width} />
            {item.title && <span>{item.title}</span>}
            <span className="text-[#161616] font-semibold">
              {item.highlight}
            </span>
            {item.suffix && <span>{item.suffix}</span>}
          </div>
        ))}
      </div>
      <div class="w-full h-px bg-[#F1F1F1] my-16 mx-6"></div>
    </div>
  );
};

export default TrustBar;

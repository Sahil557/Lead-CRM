const CRM_LOGOS = [
  { color: '#0a66c2', label: 'LinkedIn' },
  { color: '#ff7a59', label: 'HubSpot' },
  { color: '#00a1e0', label: 'Salesforce' },
  { color: '#003366', label: 'Pipedrive' },
];

const RATINGS = [
  { label: '4.9 on Chrome Store' },
  { label: '4.8 on ProductHunt' },
];

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#e8fffe] to-white px-6 py-20 lg:py-24 text-center">
    {/* Background blob */}
    <img src="/hero.png" alt="logo" width={1920} height={975} className="absolute -top-9" />
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(to right, #e8f0fe 1px, transparent 1px), linear-gradient(to bottom, #e8f0fe 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />

    {/* Badge */}
    <div className="inline-flex items-center gap-1.5 bg-[#FFFFFF] text-[#63657E] border border-[#9ACCFF] px-4 py-2 rounded-full text-xs font-semibold mb-5">
      🔗 Thousands of Professional using LeadCRM
    </div>

    {/* Heading */}
    <h1 className="font-sora font-extrabold text-4xl lg:text-5xl leading-tight text-[#1a1a2e] max-w-2xl mx-auto mb-4">
      LinkedIn CRM Integration
      Capture, Sync and Enrich in{' '}
      <span className="bg-[#2D96BC] bg-clip-text text-transparent">
        Both Ways
      </span>
    </h1>

    {/* Subtext */}
    <p className="text-slate-500 text-base max-w-xl mx-auto mb-8 leading-relaxed">
      Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
    </p>

    {/* CRM Logo Pills */}
    <div className="flex flex-wrap items-center justify-center gap-3 mb-7">
      {CRM_LOGOS.map((item, i) => (
        <div key={item.label} className="flex items-center gap-2">
          {i === 1 && (
            <span className="text-xl text-slate-300 font-light">⇄</span>
          )}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-[#1a1a2e] shadow-sm">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
            {item.label}
          </div>
        </div>
      ))}
    </div>

    {/* Ratings */}
    <div className="flex flex-wrap justify-center gap-6 mb-7">
      {RATINGS.map((r) => (
        <div key={r.label} className="flex items-center gap-2 text-sm text-slate-500">
          <span className="text-amber-400 text-sm">★★★★★</span>
          <span>{r.label}</span>
        </div>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4">
      <button className="btn-hero-primary">▶ Watch How It Works</button>
      <button className="btn-hero-secondary">Get Free Trial Now →</button>
    </div>
  </section>
);

export default Hero;

// const RATINGS = [
//   { icon: '🚀', stars: 5, label: '5/5' },
//   { icon: '📦', stars: 5, label: '5/5' },
// ];

// const CRM_ICONS = [
//   { bg: '#FF6B35', letter: 'P' },   // Pipedrive
//   { bg: '#6B4FBB', letter: 'p' },   // Purple CRM
//   { bg: '#00A1E0', letter: 'S' },   // Salesforce
// ];

// const Hero = () => (
//   <section className="relative overflow-hidden bg-white px-6 py-16 lg:py-20 text-center min-h-[520px]">

//     {/* Grid background lines */}
//     <div
//       className="pointer-events-none absolute inset-0"
//       style={{
//         backgroundImage:
//           'linear-gradient(to right, #e8f0fe 1px, transparent 1px), linear-gradient(to bottom, #e8f0fe 1px, transparent 1px)',
//         backgroundSize: '48px 48px',
//       }}
//     />

//     {/* Content sits above grid */}
//     <div className="relative z-10 flex flex-col items-center">

//       {/* Badge */}
//       <div className="inline-flex items-center gap-2 bg-white text-[#63657E] border border-[#9ACCFF] px-4 py-1.5 rounded-full text-xs font-medium mb-6 shadow-sm">
//         🚀 Thousands of Professional using LeadCRM
//       </div>

//       {/* Heading */}
//       <h1 className="font-sora font-extrabold text-4xl lg:text-5xl leading-tight text-[#0D1117] max-w-2xl mx-auto mb-4">
//         LinkedIn CRM Integration<br />
//         Capture, Sync and Enrich in{' '}
//         <span
//           style={{
//             background: 'linear-gradient(90deg, #2D96BC 0%, #F0A500 100%)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//           }}
//         >
//           Both Ways
//         </span>
//       </h1>

//       {/* Underline accent under "Both Ways" */}
//       <div className="w-40 h-1 rounded-full bg-gradient-to-r from-[#2D96BC] to-[#F0A500] mx-auto mb-6" />

//       {/* Subtext — outlined box like screenshot */}
//       <div className="border border-[#2D96BC] rounded-lg px-6 py-3 max-w-xl mb-8">
//         <p className="text-slate-600 text-sm leading-relaxed">
//           Automatically sync{' '}
//           <span className="underline">LinkedIn prospects to your CRM</span> and overlay existing CRM contacts on
//           LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
//         </p>
//       </div>

//       {/* Works With Pill */}
//       <div className="flex items-center justify-center mb-7">
//         <div className="flex items-center gap-3 bg-gradient-to-r from-[#5B6EF5] to-[#8B5CF6] text-white rounded-xl px-5 py-3 shadow-lg">
//           <span className="text-sm font-medium opacity-90">Works with</span>
//           <div className="flex items-center -space-x-2">
//             {CRM_ICONS.map((crm, i) => (
//               <div
//                 key={i}
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
//                 style={{ background: crm.bg, zIndex: CRM_ICONS.length - i }}
//               >
//                 {crm.letter}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Ratings */}
//       <div className="flex flex-wrap justify-center gap-8 mb-8">
//         {RATINGS.map((r, i) => (
//           <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
//             <span className="text-lg">{r.icon}</span>
//             <span className="text-amber-400">{'★'.repeat(r.stars)}</span>
//             <span className="font-semibold text-slate-700">{r.label}</span>
//           </div>
//         ))}
//       </div>

//       {/* CTA Buttons */}
//       <div className="flex flex-wrap justify-center gap-4">
//         {/* Chrome Store Button */}
//         <button className="flex items-center gap-3 bg-[#1C1C2E] text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-[#2a2a40] transition-colors cursor-pointer shadow-md">
//           <div className="flex flex-col items-start">
//             <span className="text-[10px] text-gray-400 leading-none">Available in</span>
//             <span className="text-sm font-semibold leading-tight">Chrome Web Store</span>
//           </div>
//           {/* Chrome icon */}
//           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center ml-1">
//             <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
//               <circle cx="12" cy="12" r="4" fill="#4285F4"/>
//               <path d="M12 8h8.7A9 9 0 1 0 12 21V8z" fill="#EA4335" opacity="0.9"/>
//               <path d="M12 8h8.7A9 9 0 0 0 5.5 5.5L9.3 12A4 4 0 0 1 12 8z" fill="#FBBC05"/>
//               <path d="M5.5 5.5L9.3 12A4 4 0 0 0 12 16v5A9 9 0 0 1 5.5 5.5z" fill="#34A853"/>
//             </svg>
//           </div>
//         </button>

//         {/* Get Free Trial */}
//         <button className="bg-[#22C55E] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#16a34a] transition-colors cursor-pointer shadow-md">
//           Get a Free Trial Now!
//         </button>
//       </div>

//     </div>
//   </section>
// );

// export default Hero;

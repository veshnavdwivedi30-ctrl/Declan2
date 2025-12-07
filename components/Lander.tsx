// components/Lander.tsx

export default function Lander() {
    return (
      <div className="w-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center px-4 md:px-8">
          <div className="pointer-events-none absolute -top-20 -left-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -right-10 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
  
          <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center mt-5 md:mt-0">
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-slate-100 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit mb-4 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Performance · Precision · Partnership
              </span>
  
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Welcome to <span className="text-indigo-300">Declan Infotech</span>
              </h1>
  
              <p className="text-lg md:text-xl text-slate-100/90 mb-4">
                Your trusted partner for premium, high-quality customer acquisition and outsourced calling solutions.
              </p>
              <p className="text-base md:text-lg text-slate-100/80 mb-8">
                In today&apos;s competitive landscape, businesses across vital sectors—from healthcare to insurance and
                home services—require more than just volume dialing; they require performance, precision, and partnership.
                We specialize in scalable, US-centric lead generation, qualified appointment setting, and expert campaign
                management.
              </p>
  
              {/* Single CTA Button -> scrolls to Specialization section */}
              <a
                href="#specialization"
                className="inline-block bg-indigo-500 text-white px-5 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-indigo-600 hover:-translate-y-0.5 transition-all duration-300"
              >
                VIEW SERVICES
              </a>
            </div>
  
            {/* Right Side - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                <img
                  src="https://st2.depositphotos.com/3591429/9261/i/450/depositphotos_92613068-stock-photo-business-people-group.jpg"
                  alt="Professional team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs md:text-sm text-white">
                  <div>
                    <p className="font-semibold">US-Centric Operations</p>
                    <p className="text-slate-100/80">Healthcare · Insurance · Home Services</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold shadow">
                    24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Businesses Choose Declan Infotech */}
        <section className="w-full px-4 md:px-8 py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-3 mb-10">
              <span className="text-xs tracking-[0.2em] text-indigo-500 uppercase">
                Why Businesses Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Built on expert talent and compliant technology
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-3xl">
                Our operation is built on a dual foundation: highly trained, industry-specific agents and advanced,
                compliant dialer technology. Together, they drive campaigns that consistently exceed targets and deliver
                sustainable growth.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Exclusive, High-Quality Engagements
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  No shared or recycled data. Every interaction is dedicated to your growth, with qualified, ready-to-engage
                  customers—not just contact lists.
                </p>
              </div>
  
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  US-Centric, High-Intent Leads
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Connect with prospects actively researching or ready to purchase across ACA Health Insurance, Auto Insurance
                  &amp; Warranty, Final Expense, and Home Warranty.
                </p>
              </div>
  
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Scalable, Performance-Focused Campaigns
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Flexible campaign models, performance-tuned delivery, and disciplined execution aligned tightly to your
                  KPIs and revenue goals.
                </p>
              </div>
  
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Compliance at the Core
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Strict adherence to TCPA, HIPAA, DNC, ACA guidelines, and industry standards ensures every interaction is
                  secure, ethical, and regulation-compliant.
                </p>
              </div>
  
              <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  Transparent Analytics &amp; Reporting
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Real-time dashboards and deep-dive analytics give you full visibility into performance, compliance,
                  conversion, and ROI—with data to constantly refine your campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Core Philosophy */}
        <section className="w-full px-4 md:px-8 py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Our Core Philosophy:{" "}
              <span className="text-indigo-600">Simplicity</span>,{" "}
              <span className="text-indigo-600">Transparency</span>,{" "}
              <span className="text-indigo-600">Results</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 mb-10">
              We challenge the idea that outsourcing must be complex or opaque. Our model is built for operational
              simplicity, radical transparency, and measurable outcomes that integrate seamlessly with your existing
              systems.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Empowering Businesses</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Affordable, high-quality outsourcing solutions that directly accelerate your growth and market impact.
                </p>
              </div>
              <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Premium Communication</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Clear, empathetic, and professional communication that lifts your brand reputation with every customer
                  interaction.
                </p>
              </div>
              <div className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Long-Term Partnerships</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  Revenue-focused relationships built on trust, consistency, and shared performance goals—not short-term
                  campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Specialization in High-Value Verticals */}
        <section
          id="specialization"
          className="w-full px-4 md:px-8 py-16 md:py-20 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Specialization in <span className="text-indigo-600">High-Value Verticals</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 mb-10">
              We do not employ generalists. Our teams are rigorously trained and certified in their respective verticals,
              ensuring expert, compliant handling on every call.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ACA */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  📌 ACA (Affordable Care Act) Campaign Support
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  HIPAA-compliant health-insurance specialists managing complex enrollment and qualification flows.
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Guiding consumers through enrollment and applications.</li>
                  <li>Handling plan comparison and coverage inquiries.</li>
                  <li>Compliant outreach during Open Enrollment Periods (OEP).</li>
                  <li>Strict PHI security and federal regulation adherence.</li>
                </ul>
              </div>
  
              {/* Auto Insurance & Warranty */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  🚘 Auto Insurance &amp; Warranty Campaigns
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  Swift, accurate, persuasive communication across the complete auto insurance and warranty sales funnel.
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>High-volume lead generation and qualification.</li>
                  <li>Warm transfers to licensed P&amp;C agents.</li>
                  <li>Policy renewals and retention-focused outreach.</li>
                  <li>State-specific coverage and compliance knowledge.</li>
                </ul>
              </div>
  
              {/* Final Expense */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  ⚱ Final Expense Calling Solutions
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  Empathy-first conversations in sensitive, high-value final expense and burial insurance campaigns.
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Demographic-specific prospecting and qualification.</li>
                  <li>Sales-focused handling within licensing rules.</li>
                  <li>End-to-end application and follow-up management.</li>
                  <li>Full TCPA and DNC compliance at every step.</li>
                </ul>
              </div>
  
              {/* Home Warranty */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  🏡 Home Warranty Campaigns
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-3">
                  Urgency-driven, value-focused conversations that educate and convert home warranty prospects.
                </p>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Benefit-rich lead pitching and explanation.</li>
                  <li>Qualified transfers and appointment scheduling.</li>
                  <li>Support for claims and service dispatch queries.</li>
                  <li>Smooth, frictionless purchase experiences.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Competitive Advantage */}
        <section className="w-full px-4 md:px-8 py-16 md:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Partner with <span className="text-indigo-600">Declan Infotech?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 mb-10">
              Our edge lies in the non-negotiable standards we uphold across Talent, Compliance, Technology, and
              Scalability. We don&apos;t just call—we build revenue.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Talent &amp; Training Excellence
                </h3>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Vertical-specific trained, professional agents.</li>
                  <li>HIPAA and regulatory certifications where required.</li>
                  <li>Coaching focused on quality, empathy, and compliance.</li>
                </ul>
              </div>
  
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Technology &amp; Infrastructure
                </h3>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Real-time monitoring and performance dashboards.</li>
                  <li>Predictive and power dialers tuned to US regulations.</li>
                  <li>Stringent TCPA, DNC, and data-security adherence.</li>
                </ul>
              </div>
  
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  Financial &amp; Operational Discipline
                </h3>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>High conversion ratios through constant optimization.</li>
                  <li>Cost-effective structures without quality compromise.</li>
                  <li>Scalable seat availability for seasonal and peak demand.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Guiding Principles */}
        <section className="w-full px-4 md:px-8 py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
              Our <span className="text-indigo-600">Guiding Principles</span>
            </h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">🟧 Vision Statement</h3>
                <p className="text-slate-600 text-sm md:text-base">
                  “To be the reliable, globally recognized outsourcing partner, delivering maximum value, sustainable
                  innovation, and superior results through absolute communication excellence.”
                </p>
              </div>
  
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">🟥 Mission Statement</h3>
                <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                  <li>Deliver measurable, ROI-driven results on every campaign.</li>
                  <li>Ensure empathetic, clear, and deeply informed communication.</li>
                  <li>Enable affordable, strategic scaling for growing businesses.</li>
                  <li>Maintain transparency, data security, and client trust.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA / Contact Section (Upgraded & Anchored) */}
        <section
          id="contact-section"
          className="w-full px-4 md:px-8 py-16 md:py-24 bg-slate-900"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Align Your Campaigns with{" "}
              <span className="text-indigo-300">Performance</span>?
            </h2>
            <p className="text-base md:text-lg text-slate-100 mb-8">
              We&apos;re ready to align our performance-driven team with your objectives. Let&apos;s explore how Declan
              Infotech can become the most valuable extension of your sales and customer service operations.
            </p>
  
            <div className="mb-8 text-sm md:text-base text-slate-100 space-y-1">
              <p>
                📍 <span className="font-semibold">Office Location:</span> (Your city / registered address)
              </p>
              <p>
                📞 <span className="font-semibold">Phone:</span> +91 XXXXX XXXXX
              </p>
              <p>
                📩 <span className="font-semibold">Email:</span> admin@declan-infotech.com
              </p>
            </div>
  
            <a
  href="mailto:admin@declan-infotech.com"
  className="inline-block bg-indigo-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-600 hover:-translate-y-0.5 transition-all duration-300"
>
  CONTACT US
</a>
          </div>
        </section>
      </div>
    );
  }
  
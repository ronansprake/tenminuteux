import { useState } from "react";
import svgPaths from "./imports/svg-onbpc33hbb";
import clsx from "clsx";

export default function App() {
  const [formData, setFormData] = useState({
    url: "",
    deviceType: "mobile" as "mobile" | "desktop",
    focusArea: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.url.trim()) {
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ url: "", deviceType: "mobile", focusArea: "" });
      }, 3000);
    }
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <div>
        {/* Hero Section */}
        <section className="bg-[#003ec4]">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[70px]">
            <h1 className="text-white mb-[30px] text-[88px] font-extrabold">
              <span className="italic">Ten Minute </span>UX
            </h1>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[20px] text-white">
                <p className="text-[20px] sm:text-[26px]">
                  <span className="font-bold">Free</span>
                  <span> expert design feedback on your website or product</span>
                </p>
                <p className="font-bold text-[18px] sm:text-[20px]">
                  No fluff. No sales pitch. Just clear guidance.
                </p>
              </div>
              <a 
                href="#free-audit-form"
                className="bg-[#1660ff] flex gap-[15px] items-center justify-center px-[20px] py-[10px] rounded-[10px] border border-[#97b8ff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-fit hover:bg-[#1450dd] transition-colors cursor-pointer"
              >
                <svg className="shrink-0 size-[32px]" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p23b2ba80} fill="white" />
                </svg>
                <p className="text-[16px] sm:text-[18px] text-white">
                  <span>Limited </span>
                  <span className="font-bold">free</span>
                  <span> slots available</span>
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                {
                  date: "Rated 5/5 - 11 Nov '25",
                  text: "Quick and easy. Thank you.",
                },
                {
                  date: "Rated 5/5 - 16 Nov '25",
                  text: "Most efficient service thank you. I will recommend you",
                },
                {
                  date: "Rated 4/5 - 18 Nov '25",
                  text: "Short but good! Can you check my whole site next lol?",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="flex flex-col gap-[5px]">
                  <p className="font-bold text-[12px] text-black text-center">
                    {testimonial.date}
                  </p>
                  <div className="flex gap-[15px] items-center">
                    <svg className="shrink-0 size-[32px]" fill="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p2b96e080} fill="black" />
                    </svg>
                    <p className="text-[16px] text-black">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's the catch */}
        <section className="bg-[#ebf1ff]">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="flex flex-col gap-[25px]">
              <h2 className="font-bold text-[22px] text-black">
                Free ... What's the catch?
              </h2>
              <div className="flex flex-col gap-[15px] text-[18px] text-black">
                <p>
                  I'm a lead UX designer with 10 years' experience and as a side gig I want to start a mini UX audit service. Before I offer paid services, I need real testimonials.
                </p>
                <p className="font-semibold">
                  In return, I'll ask you for a one-sentence review I can show on this site. I won't spam you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your free UX mini audit */}
        <section className="bg-white">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="flex flex-col gap-[25px]">
              <h2 className="font-bold text-[22px] text-black">
                Your free UX mini audit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {/* Included */}
                <div className="bg-[#eaffe6] rounded-[15px] p-[30px] flex flex-col gap-[20px]">
                  <h3 className="font-bold text-[16px] text-black">
                    Included
                  </h3>
                  <div className="flex flex-col gap-[15px]">
                    {[
                      "Feedback on one page or flow",
                      "Up to 10 UX findings prioritised by impact",
                      "Clearly highlighted problem areas",
                      "Actionable advice you can implement quickly",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-[10px] items-center">
                        <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p320cb280} fill="#069C3F" />
                        </svg>
                        <p className="text-[14px] text-black">
                          {item.includes("one page") ? (
                            <>
                              <span>Feedback on </span>
                              <span className="font-bold">one page or flow</span>
                            </>
                          ) : item.includes("10 UX") ? (
                            <>
                              <span>Up to </span>
                              <span className="font-bold">10 UX findings</span>
                              <span> prioritised by impact</span>
                            </>
                          ) : item.includes("problem") ? (
                            <>
                              <span>Clearly highlighted </span>
                              <span className="font-bold">problem areas</span>
                            </>
                          ) : (
                            <>
                              <span className="font-bold">Actionable advice</span>
                              <span> you can implement quickly</span>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Not included */}
                <div className="bg-[#f5f5f5] rounded-[15px] p-[30px] flex flex-col gap-[20px]">
                  <h3 className="font-bold text-[16px] text-black">
                    Not included
                  </h3>
                  <div className="flex flex-col gap-[15px]">
                    {[
                      "Multiple rounds of feedback",
                      "User testing or research",
                      "Redesign suggestions",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-[10px] items-center">
                        <svg className="shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p2b25bf00} fill="#797979" />
                        </svg>
                        <p className="text-[14px] text-black">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#ebf1ff]">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="flex flex-col gap-[40px]">
              <h2 className="font-bold text-[22px] text-black">
                How it works
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[80px]">
                {[
                  {
                    number: "1",
                    title: "Submit the form",
                    description: "Share a URL / screenshot of your site or product using the form below",
                  },
                  {
                    number: "2",
                    title: "I review it",
                    description: "I spend 10 minutes evaluating usability, clarity and accessibility",
                  },
                  {
                    number: "3",
                    title: "You get feedback",
                    description: "Within 48 hours, you get  a focused, actionable UX review",
                  },
                  {
                    number: "4",
                    title: "Leave a review",
                    description: "You send me a one-sentence testimonial I can feature on this site",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex flex-col gap-[20px]">
                    <div className="bg-[#0051ff] flex items-center justify-center rounded-[20px] size-[40px]">
                      <p className="font-bold text-[16px] text-white">
                        {step.number}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[10px] text-black">
                      <p className="font-bold text-[16px]">
                        {step.title}
                      </p>
                      <p className="text-[14px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white" id="free-audit-form">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
              <h2 className="font-bold text-[22px] text-black">
                Get your free UX mini audit now
              </h2>

              {/* URL Input */}
              <div className="flex flex-col gap-[15px]">
                <label className="text-[16px] text-black">
                  Website or product URL / screenshot
                </label>
                <input
                  type="text"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className="bg-white border border-[#777] rounded-[8px] px-[10px] py-[10px] text-[16px] text-black focus:outline-none focus:border-[#0051ff]"
                  required
                />
                <p className="text-[13px] text-black">
                  <span>For screenshots, </span>
                  <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer" className="font-bold underline cursor-pointer">
                    upload here
                  </a>
                  <span> then paste the URL above</span>
                </p>
              </div>

              {/* Device Type */}
              <div className="flex flex-col gap-[15px]">
                <p className="text-[16px] text-black">
                  Desktop or mobile?
                </p>
                <div className="flex gap-[30px]">
                  <label className="flex gap-[10px] items-center cursor-pointer">
                    <div
                      className={clsx(
                        "rounded-[11px] size-[22px] border border-black flex items-center justify-center",
                        formData.deviceType === "mobile" && "bg-black"
                      )}
                      onClick={() => setFormData({ ...formData, deviceType: "mobile" })}
                    >
                      {formData.deviceType === "mobile" && (
                        <div className="bg-white rounded-full size-[10px]" />
                      )}
                    </div>
                    <span className="text-[16px] text-black">
                      Mobile
                    </span>
                  </label>
                  <label className="flex gap-[10px] items-center cursor-pointer">
                    <div
                      className={clsx(
                        "rounded-[11px] size-[22px] border border-black flex items-center justify-center",
                        formData.deviceType === "desktop" && "bg-black"
                      )}
                      onClick={() => setFormData({ ...formData, deviceType: "desktop" })}
                    >
                      {formData.deviceType === "desktop" && (
                        <div className="bg-white rounded-full size-[10px]" />
                      )}
                    </div>
                    <span className="text-[16px] text-black">
                      Desktop
                    </span>
                  </label>
                </div>
              </div>

              {/* Focus Area */}
              <div className="flex flex-col gap-[15px]">
                <label className="text-[16px] text-black">
                  Anything you'd like me to focus on? (optional)
                </label>
                <textarea
                  value={formData.focusArea}
                  onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                  placeholder="E.g. 'Review the checkout flow' or 'Are the actions clear enough?'"
                  className="bg-white border border-[#777] rounded-[8px] px-[10px] py-[10px] text-[16px] text-[#777] h-[100px] resize-none focus:outline-none focus:border-[#0051ff]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#1660ff] border border-[#97b8ff] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[20px] py-[10px] flex gap-[15px] items-center justify-center hover:bg-[#1450dd] transition-colors"
              >
                <p className="font-bold text-[18px] text-white">
                  {submitted ? "Request sent!" : "Request a free review"}
                </p>
                {!submitted && (
                  <svg className="shrink-0 size-[32px]" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p331c4d00} fill="white" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Availability */}
        <section className="bg-[#fff5e9]">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="flex flex-col gap-[25px] text-black">
              <h2 className="font-bold text-[22px]">
                Availability
              </h2>
              <p className="text-[16px]">
                <span>To maintain quality (and my sanity) </span>
                <span className="font-bold">I only accept 3 reviews each week</span>
                <span>. If slots are full, you'll get a waitlist notification.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-[1024px] mx-auto px-8 sm:px-12 md:px-[60px] py-[60px]">
            <div className="flex flex-col gap-[40px]">
              <div className="flex gap-[15px] items-center">
                <svg className="shrink-0 size-[32px]" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p113be400} fill="black" />
                </svg>
                <p className="text-[16px] text-black">
                  <span>Want to get in touch, or request priority review? I'm at </span>
                  <a className="font-bold underline" href="mailto:tenminuteux@gmail.com">tenminuteux@gmail.com</a>
                </p>
              </div>
              <p className="text-[16px] text-black">
                © 2026 Ten Minute UX. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
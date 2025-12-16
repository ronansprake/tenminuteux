import svgPaths from "./svg-onbpc33hbb";
import clsx from "clsx";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame29 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start p-[60px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative rounded-[15px] shrink-0", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[30px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[25px] items-start p-[60px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("relative rounded-[11px] shrink-0 size-[22px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("content-stretch flex p-[10px] relative", additionalClassNames)}>
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#777] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 text-black w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="bg-[#0051ff] content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame34 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <Wrapper>
      <path d={svgPaths.p2b25bf00} fill="var(--fill-0, #797979)" id="Vector" />
    </Wrapper>
  );
}

function Frame29() {
  return (
    <Wrapper>
      <path d={svgPaths.p320cb280} fill="var(--fill-0, #069C3F)" id="Vector" />
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame1 />
      <p className="basis-0 font-['Open_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper1>
      <path d={svgPaths.p2b96e080} fill="var(--fill-0, black)" id="Vector" />
    </Wrapper1>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[47px] py-0 relative w-full">
          <p className="basis-0 font-['Open_Sans:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-[normal] relative shrink-0 text-white w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[0px] text-[26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Free
        </span>
        <span>{` expert design feedback on your website or product`}</span>
      </p>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        No fluff. No sales pitch. Just clear guidance.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <Wrapper1>
      <path d={svgPaths.p23b2ba80} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper1>
  );
}

function Frame3() {
  return (
    <div className="bg-[#1660ff] content-stretch flex gap-[15px] items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#97b8ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Frame />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Limited `}</span>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
          free
        </span>
        <span>{` slots available`}</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#003ec4] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start px-[60px] py-[70px] relative w-full">
          <p className="font-['Open_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[0px] text-[88px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Open_Sans:ExtraBold_Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>{`Ten Minute `}</span>UX
          </p>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Text text="Rated 5/5 - 11 Nov ‘25" />
      <Text1 text="Quick and easy. Thank you." />
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Text text="Rated 5/5 - 16 Nov ‘25" />
      <Text1 text="Most efficient service thank you. I will recommend you" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Text text="Rated 4/5 - 18 Nov ‘25" />
      <Text1 text="Short but good! Can you check my whole site next lol?" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[60px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start leading-[normal] relative shrink-0 text-[18px] text-black w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`I'm a lead UX designer with 10 years’ experience and as a side gig I want to start a mini UX audit service. Before I offer paid services, I need real testimonials.`}</p>
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        In return, I’ll ask you for a one-sentence review I can show on this site. I won’t spam you.
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <Wrapper2 additionalClassNames="bg-[#ebf1ff]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Free ... What’s the catch?
      </p>
      <Frame8 />
    </Wrapper2>
  );
}

function Frame13() {
  return (
    <Wrapper5>
      <span>{`Feedback on `}</span>
      <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
        one page or flow
      </span>
    </Wrapper5>
  );
}

function Frame33() {
  return (
    <Wrapper5>
      <span>{`Up to `}</span>
      <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
        10 UX findings
      </span>
      <span>{` prioritised by impact`}</span>
    </Wrapper5>
  );
}

function Frame14() {
  return (
    <Wrapper5>
      <span>{`Clearly highlighted `}</span>
      <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
        problem areas
      </span>
    </Wrapper5>
  );
}

function Frame16() {
  return (
    <Wrapper5>
      <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actionable advice
      </span>
      <span>{` you can implement quickly`}</span>
    </Wrapper5>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame33 />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <Wrapper3 additionalClassNames="bg-[#eaffe6]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Included
      </p>
      <Frame17 />
    </Wrapper3>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Text2 text="Multiple rounds of feedback" />
      <Text2 text="User testing or research" />
      <Text2 text="Redesign suggestions" />
    </div>
  );
}

function Frame11() {
  return (
    <Wrapper3 additionalClassNames="bg-[#f5f5f5]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Not included
      </p>
      <Frame18 />
    </Wrapper3>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <Wrapper2>
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Your free UX mini audit
      </p>
      <Frame12 />
    </Wrapper2>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text3 text="1" />
      <Helper text="Submit the form" text1="Share a URL / screenshot of your site or product using the form below" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text3 text="2" />
      <Helper text="I review it" text1="I spend 10 minutes evaluating usability, clarity and accessibility" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[normal] relative shrink-0 text-black w-full">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        You get feedback
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Within 48 hours, you get  a focused, actionable UX review`}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text3 text="3" />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Text3 text="4" />
      <Helper text="Leave a review" text1="You send me a one-sentence testimonial I can feature on this site" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Frame36 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <Wrapper4 additionalClassNames="bg-[#ebf1ff]">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        How it works
      </p>
      <Frame19 />
    </Wrapper4>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#777] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <Text4 text="https://yourwebsite.com" additionalClassNames="items-center justify-center w-full" />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Website or product URL / screenshot
      </p>
      <Frame21 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[0px] text-[13px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`For screenshots, `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold underline" href="https://postimages.org/" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="[text-underline-position:from-font] decoration-solid leading-[normal] text-[13px]" href="https://postimages.org/" style={{ fontVariationSettings: "'wdth' 100" }}>
            upload here
          </span>
        </a>
        <span>{` then `}</span>paste<span>{` the URL above`}</span>
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Helper1 additionalClassNames="bg-black" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mobile
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Helper1 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Desktop
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Desktop or mobile?
      </p>
      <Frame26 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white h-[100px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#777] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <Text4 text="E.g. “Review the checkout flow” or “Are the actions clear enough?”" additionalClassNames="items-start size-full" />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Anything you'd like me to focus on? (optional)`}</p>
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <Wrapper1>
      <path d={svgPaths.p331c4d00} fill="var(--fill-0, white)" id="Vector" />
    </Wrapper1>
  );
}

function Frame44() {
  return (
    <div className="bg-[#1660ff] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#97b8ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center px-[20px] py-[10px] relative w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Request a free review
          </p>
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <Wrapper4 additionalClassNames="bg-white">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get your free UX mini audit now
      </p>
      <Frame22 />
      <Frame23 />
      <Frame42 />
      <Frame44 />
    </Wrapper4>
  );
}

function Frame46() {
  return (
    <div className="bg-[#fff5e9] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[25px] items-start p-[60px] relative text-black w-full">
          <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Availability
          </p>
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span>{`To maintain quality (and my sanity) `}</span>
            <span className="font-['Open_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
              I only accept 3 reviews each week
            </span>
            <span>{`. If slots are full, you'll get a waitlist notification.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <Wrapper1>
      <path d={svgPaths.p113be400} fill="var(--fill-0, black)" id="Vector" />
    </Wrapper1>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame47 />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Want to get in touch, or request priority review? I’m at `}</span>
        <span className="[text-underline-position:from-font] decoration-solid font-['Open_Sans:Bold',sans-serif] font-bold underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          tenminuteuk@gmail.com
        </span>
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center p-[60px] relative w-full">
          <Frame27 />
          <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            © 2026 Ten Minute UX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1024px]">
      <Frame4 />
      <Frame15 />
      <Frame7 />
      <Frame10 />
      <Frame40 />
      <Frame45 />
      <Frame46 />
      <Frame48 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <Frame20 />
    </div>
  );
}
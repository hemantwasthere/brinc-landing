export type Persona = "investor" | "partner" | "founder";

export const personas: {
  id: Persona;
  label: string;
  headline: string;
  copy: string;
  cta: string;
  points: string[];
}[] = [
  {
    id: "investor",
    label: "Investor",
    headline: "private opportunities",
    copy: "We work with accredited investors and partner firms on private-market co-investment, alongside operators and syndicate leads across our global network.",
    cta: "Explore co-investment",
    points: ["Deal-by-deal co-investment", "Diligence from program operators", "Syndicate-led allocations"],
  },
  {
    id: "partner",
    label: "Partner",
    headline: "innovation that ships",
    copy: "We design and deliver innovation programs and strategic initiatives with leading partners, to help organizations stay ahead in innovation and technology.",
    cta: "Design a program",
    points: ["Corporate venture programs", "Sovereign innovation mandates", "Deal flow into your sector"],
  },
  {
    id: "founder",
    label: "Founder",
    headline: "lasting businesses",
    copy: "We support Web2 and Web3 entrepreneurs with tools, global roadshows, and community networks, helping refine their product and to help scale internationally.",
    cta: "Apply to a program",
    points: ["Capital at pre-seed and seed", "Global roadshows and market entry", "Operator community for life"],
  },
];

export const metrics = [
  { value: 259, suffix: "", label: "Portfolio companies", note: "Backed since 2014" },
  { value: 36, suffix: "+", label: "Countries", note: "Founders we have funded" },
  { value: 2.35, prefix: "$", suffix: "M", label: "Average first raise", decimals: 2, note: "Post-program median cohort" },
  { value: 18, suffix: "", label: "Accelerator programs", note: "Run across 7 markets" },
];

export const coInvestors = [
  "Tim Draper",
  "Sam Altman",
  "Sergey Brin",
  "John Doerr",
  "Arthur Hayes",
  "Animoca Brands",
  "Artesian",
  "Lever VC",
  "Tamkeen",
  "Hong Kong Science Park",
];

export const partners = [
  "Manulife",
  "Huawei",
  "Schneider Electric",
  "PUMA",
  "Merck",
  "NEOM",
  "MBRIF",
  "Omantel",
  "Batelco",
  "DayDayCook",
];

export const journey = [
  {
    step: "01",
    title: "Source",
    copy: "Programs and partners surface founders from 36+ countries before the round is public.",
  },
  {
    step: "02",
    title: "Select",
    copy: "Sector operators run diligence with the corporate or sovereign partner who will use the product.",
  },
  {
    step: "03",
    title: "Accelerate",
    copy: "Twelve to sixteen weeks of product, GTM and regulatory work with a dedicated venture team.",
  },
  {
    step: "04",
    title: "Raise",
    copy: "Roadshows into our investor network, with allocations opened to co-investors deal by deal.",
  },
  {
    step: "05",
    title: "Scale",
    copy: "Market entry support across Asia and MENA, then follow-on capital through growth rounds.",
  },
];

export const services = [
  {
    id: "investors",
    eyebrow: "For investors",
    title: "Access private markets without building the pipeline",
    copy: "Co-invest alongside operators who already sat inside the company for a full program cycle. Every allocation carries diligence written by the people who ran it.",
    stats: [
      { k: "395", v: "Investments made" },
      { k: "Deal-by-deal", v: "Allocation model" },
    ],
  },
  {
    id: "partners",
    eyebrow: "For corporates & governments",
    title: "Innovation programs that produce companies, not decks",
    copy: "We design the mandate, source the cohort, run the sprint and hand back a portfolio your teams can pilot with. Delivered with corporates, sovereign funds and science parks.",
    stats: [
      { k: "18", v: "Programs delivered" },
      { k: "7", v: "Countries operating" },
    ],
  },
  {
    id: "founders",
    eyebrow: "For founders",
    title: "Capital, customers and a market to land in",
    copy: "Cheque plus the operating support that makes it stick: product refinement, regulatory navigation, and roadshows into the exact markets your next round depends on.",
    stats: [
      { k: "$2.35M", v: "Average first raise" },
      { k: "259", v: "Companies backed" },
    ],
  },
];

export const sectors = [
  "AI & Machine Learning",
  "Web3 & Blockchain",
  "Climate Tech",
  "Agrifood",
  "Healthcare",
  "Smart Cities & IoT",
  "Robotics",
  "Gaming",
];

export const portfolio = [
  { name: "Zeta Surgical", country: "USA", stage: "Series A", sector: "Healthcare" },
  { name: "Soundbrenner", country: "Hong Kong", stage: "Growth", sector: "Consumer" },
  { name: "Omni.pet", country: "USA", stage: "Series B", sector: "Agrifood" },
  { name: "Aonic", country: "Malaysia", stage: "Growth", sector: "Smart Cities & IoT" },
  { name: "Sova Health", country: "India", stage: "Acquired", sector: "Healthcare" },
  { name: "Wildfire Energy", country: "Australia", stage: "Acquired", sector: "Climate Tech" },
  { name: "Cellular Origins", country: "Estonia", stage: "Exit", sector: "Web3 & Blockchain" },
  { name: "Mori Labs", country: "Hong Kong", stage: "Series Pre-A", sector: "AI & Machine Learning" },
  { name: "Verdant Yield", country: "UAE", stage: "Seed", sector: "Agrifood" },
];

export const locations = [
  { city: "Canada", region: "Americas", status: "Live", x: 18, y: 14, lx: 0, ly: 3 },
  { city: "Saudi Arabia", region: "MENA", status: "Live", x: 51, y: 28, lx: 0, ly: 3 },
  { city: "Bahrain", region: "MENA", status: "Live", x: 56, y: 24, lx: 0, ly: -3 },
  { city: "Qatar", region: "MENA", status: "Live", x: 57.5, y: 30.5, lx: 0, ly: 3 },
  { city: "UAE", region: "MENA", status: "Live", x: 61.5, y: 26.5, lx: 0, ly: -3 },
  { city: "Oman", region: "MENA", status: "Live", x: 63, y: 33, lx: 0, ly: 3 },
  { city: "India", region: "APAC", status: "Live", x: 69, y: 31, lx: 0, ly: 3 },
  { city: "Korea", region: "APAC", status: "Live", x: 81.5, y: 20, lx: 0, ly: -3 },
  { city: "Japan", region: "APAC", status: "Live", x: 86, y: 22.5, lx: 0, ly: 3 },
  { city: "Hong Kong", region: "APAC", status: "HQ", x: 77, y: 26, lx: 0, ly: -3 },
  { city: "Vietnam", region: "APAC", status: "Coming soon", x: 74.5, y: 35, lx: 0, ly: 3 },
  { city: "Philippines", region: "APAC", status: "Live", x: 81.5, y: 33, lx: 0, ly: 3 },
];

export const faqs = [
  {
    q: "Who can co-invest with Brinc?",
    a: "Accredited investors, family offices and partner firms. Allocations are offered deal by deal, with diligence notes written by the venture team that ran the company's program.",
  },
  {
    q: "What does a Brinc program actually deliver?",
    a: "A defined mandate, a sourced cohort, twelve to sixteen weeks of operating work, and a demo cycle that ends with pilots and a raise. Partners keep the relationships we build.",
  },
  {
    q: "What stage do you invest at?",
    a: "Predominantly pre-seed and seed, with follow-on participation into later rounds across the portfolio. The average post-program first raise is $2.35M.",
  },
  {
    q: "Which sectors are in scope?",
    a: "AI, Web3 and blockchain, climate tech, agrifood, healthcare, robotics, gaming and connected hardware. Program mandates usually narrow this to one or two verticals.",
  },
  {
    q: "Do I need to relocate to join a program?",
    a: "No. Programs run hybrid, with in-market intensives in the region the mandate targets and roadshows scheduled around your fundraise.",
  },
];

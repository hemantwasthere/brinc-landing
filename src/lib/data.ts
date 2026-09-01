export type Persona = "investor" | "partner" | "founder";

export const site = {
  email: "marketing@brinc.io",
  linkedin: "https://www.linkedin.com/company/brinc-io/",
  x: "https://twitter.com/brincvc",
  instagram: "https://www.instagram.com/brincvc",
  youtube: "https://www.youtube.com/channel/UC3BlOWiOJ0pF_mkOTuSGUVg",
  community: "https://community.brinc.io",
  ventureverse: "https://www.ventureverse.com/",
  upround: "https://club.upround.xyz/",
  apply: "https://community.brinc.io/forms/51ff0d6d-9642-4d7f-8957-279b63517491",
};

export const personas: {
  id: Persona;
  label: string;
  headline: string;
  copy: string;
  cta: string;
  href: string;
  points: string[];
}[] = [
  {
    id: "investor",
    label: "Investor",
    headline: "private opportunities",
    copy: "We work with accredited investors, operators and partner firms on private-market co-investment across a global network, with allocations opened deal by deal.",
    cta: "Explore co-investment",
    href: "/investors",
    points: ["Deal-by-deal co-investment", "Diligence from program operators", "Syndicate-led allocations"],
  },
  {
    id: "partner",
    label: "Partner",
    headline: "innovation that ships",
    copy: "We help corporates, governments and institutions identify the right opportunities, engage with global innovators, and scale solutions that deliver measurable impact.",
    cta: "Design a program",
    href: "/partners",
    points: ["Global scouting and mapping", "Accelerators and hackathons", "POC execution and upskilling"],
  },
  {
    id: "founder",
    label: "Founder",
    headline: "lasting businesses",
    copy: "We connect entrepreneurs with expertise and global opportunities, helping founders launch, scale and thrive in the world's most dynamic ecosystems.",
    cta: "Apply to a program",
    href: "/founders",
    points: ["Capital at pre-seed and seed", "Global roadshows and market entry", "Operator community for life"],
  },
];

export const metrics = [
  { value: 260, suffix: "", label: "Portfolio companies", note: "Backed since 2014" },
  { value: 1.69, prefix: "$", suffix: "B+", decimals: 2, label: "Combined market cap", note: "Across the portfolio" },
  { value: 300, prefix: "$", suffix: "M+", label: "Capital deployed", note: "Direct and through partners" },
  { value: 75, suffix: "", label: "Programs run", note: "Across 7 countries" },
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
  "PepsiCo",
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
    href: "/investors",
    linkLabel: "Investor overview",
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
    href: "/partners",
    linkLabel: "Partner with us",
    stats: [
      { k: "75", v: "Programs delivered" },
      { k: "7", v: "Countries operating" },
    ],
  },
  {
    id: "founders",
    eyebrow: "For founders",
    title: "Capital, customers and a market to land in",
    copy: "Cheque plus the operating support that makes it stick: product refinement, regulatory navigation, and roadshows into the exact markets your next round depends on.",
    href: "/founders",
    linkLabel: "Founder programs",
    stats: [
      { k: "$2.35M", v: "Average first raise" },
      { k: "260", v: "Companies backed" },
    ],
  },
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
    a: "Predominantly pre-seed up to Series A, with follow-on participation into later rounds across the portfolio. The average post-program first raise is $2.35M.",
  },
  {
    q: "Which sectors are in scope?",
    a: "Agrifood, Web3, climate tech, healthcare, AI, smart cities, gaming, cellular agriculture and industry 4.0. Program mandates usually narrow this to one or two verticals.",
  },
  {
    q: "Do I need to relocate to join a program?",
    a: "No. Programs run hybrid, with in-market intensives in the region the mandate targets and roadshows scheduled around your fundraise.",
  },
];

export const investorCriteria = [
  {
    title: "Proven founders",
    copy: "Teams that have shipped before, with the domain depth to survive a hard market and the humility to take operating help.",
  },
  {
    title: "Traction",
    copy: "Businesses with traction, driven by growth. Revenue, pilots or usage that a partner in our network can verify.",
  },
  {
    title: "Sectors",
    copy: "Digitalization, decentralization and decarbonization — the three shifts every one of our programs is built around.",
  },
  {
    title: "Stage",
    copy: "From pre-seed up to Series A, with follow-on participation reserved for the companies that compound.",
  },
  {
    title: "Geography",
    copy: "Global founders focused on emerging markets, where our in-market teams can open the first door.",
  },
];

export const partnerPillars = [
  {
    step: "01",
    title: "Identify",
    subtitle: "Global scouting & opportunity mapping",
    copy: "Making sense of the evolving innovation landscape by mapping opportunities, sourcing startups and conducting due diligence to ensure alignment with your strategic goals.",
    points: ["Landscape mapping", "Thesis definition", "Deal sourcing", "Due diligence & evaluation"],
  },
  {
    step: "02",
    title: "Engage",
    subtitle: "Innovation programs & ecosystem activation",
    copy: "From hackathons to accelerators, we design customizable programs that connect you with top startups and innovators to test, validate and build the right partnerships.",
    points: ["Hackathons", "Accelerators", "Ideation to execution", "Structured mentorship"],
  },
  {
    step: "03",
    title: "Scale",
    subtitle: "POC execution & capability building",
    copy: "We turn opportunities into impact by piloting solutions, training teams and enabling long-term adoption to reduce risk and build momentum which lasts and delivers.",
    points: ["Pilot scoping", "Deployment", "Employee upskilling", "Nation building"],
  },
];

export const caseStudies: {
  group: string;
  items: { name: string; kind: string; stats: { k: string; v: string }[] }[];
}[] = [
  {
    group: "Corporate partners",
    items: [
      {
        name: "Rosewood",
        kind: "Innovation challenge",
        stats: [
          { k: "200", v: "IPs sourced" },
          { k: "81", v: "Qualified" },
          { k: "8", v: "Finalists selected" },
          { k: "1", v: "Pilot secured" },
        ],
      },
      {
        name: "PepsiCo",
        kind: "Technology & IP scouting",
        stats: [
          { k: "490+", v: "IPs sourced" },
          { k: "1", v: "Global mandate" },
          { k: "4", v: "Regions covered" },
          { k: "5", v: "POCs shortlisted" },
        ],
      },
      {
        name: "NEOM",
        kind: "Growth accelerator & POC",
        stats: [
          { k: "500+", v: "Scouted teams" },
          { k: "14", v: "Accelerated" },
          { k: "3-6mo", v: "POC phase" },
          { k: "5", v: "Pilots" },
        ],
      },
    ],
  },
  {
    group: "Government partners",
    items: [
      {
        name: "Misk",
        kind: "Pre-acceleration program",
        stats: [
          { k: "2,000+", v: "Founders" },
          { k: "2", v: "Cohorts run" },
          { k: "99%", v: "Satisfaction" },
          { k: "500", v: "MVPs launched" },
        ],
      },
      {
        name: "MBRIF",
        kind: "National accelerator",
        stats: [
          { k: "300+", v: "Connections" },
          { k: "95", v: "Accelerated" },
          { k: "6mo", v: "Program" },
          { k: "4", v: "Cohorts run" },
        ],
      },
      {
        name: "HKSTP",
        kind: "Growth accelerator & POC",
        stats: [
          { k: "200+", v: "Companies" },
          { k: "46", v: "Countries" },
          { k: "33", v: "Selected" },
          { k: "6", v: "Startups admitted" },
        ],
      },
    ],
  },
  {
    group: "Investor partners",
    items: [
      {
        name: "Animoca Brands",
        kind: "Deal sourcing & accelerator",
        stats: [
          { k: "8-12", v: "Startups" },
          { k: "2", v: "Cohorts per year" },
          { k: "55+", v: "Investments" },
          { k: "3yr", v: "Partnership" },
        ],
      },
      {
        name: "Schneider Electric",
        kind: "Deal sourcing & accelerator",
        stats: [
          { k: "150", v: "Companies" },
          { k: "2", v: "Seed investments" },
          { k: "2", v: "Funded follow-ons" },
          { k: "2", v: "POCs conducted" },
        ],
      },
      {
        name: "Artesian Venture",
        kind: "Deal sourcing & accelerator",
        stats: [
          { k: "3,000+", v: "Reviewed" },
          { k: "90", v: "Total investments" },
          { k: "<3%", v: "Acceptance" },
          { k: "13%", v: "At Series A" },
        ],
      },
    ],
  },
];

export const offerings = [
  {
    name: "VentureVerse OS",
    tag: "AI-native platform",
    copy: "The unified ecosystem powering founders, investors and assets through intelligent automation, supporting founders throughout their journey.",
    href: site.ventureverse,
  },
  {
    name: "Brinc x MONIIFY Virtual Accelerator",
    tag: "Master the fundamentals, fast",
    copy: "Practical knowledge on launching, fundraising and scaling with step-by-step guidance designed for first-time and experienced founders alike.",
    href: "https://brinc.io/virtual-accelerator",
  },
  {
    name: "Brinc Roadshow",
    tag: "Take your startup global",
    copy: "Meet governments, corporates and investors in the fastest-growing tech hubs. Learn from founders who have scaled successfully in the UAE and beyond.",
    href: "https://brinc.io/brinc-uae-roadshow",
  },
];

export const programs = [
  {
    name: "Rosewood Seeds",
    tags: ["Sustainability", "Seed", "F&B ecosystem"],
    copy: "Early-stage startups with innovative solutions and a clear vision for reducing waste across the food and beverage value chain.",
    href: "https://brinc.io/rosewood-seeds",
  },
  {
    name: "HK Financial Innovation Program",
    tags: ["Innovation", "Web3"],
    copy: "A 12-week program led by Brinc in partnership with Ripple for startups building real-world financial applications on the XRP Ledger.",
    href: "https://brinc.io/xrpl-program",
  },
  {
    name: "IGNIT3 Advisory",
    tags: ["Web3", "Token advisory"],
    copy: "Providing access to the resources Web3 founders need to navigate token launches.",
    href: "https://brinc.io/ignit3/",
  },
  {
    name: "Web3 Accelerator",
    tags: ["Virtual", "Layer 1", "Web3"],
    copy: "Supporting Web3 founders to lead in accelerating Web3 adoption in Hong Kong.",
    href: "https://brinc.io/web3-accelerator",
  },
  {
    name: "Open Innovation",
    tags: ["In-person", "Enterprise", "Innovation"],
    copy: "Connecting Bahraini startups with leading enterprises to develop solutions that enhance efficiency, sustainability and Bahrain's startup ecosystem.",
    href: "https://openinnovation.bh/",
  },
  {
    name: "Fair Data Accelerator",
    tags: ["Virtual", "Web3"],
    copy: "Scale your FAIR data solution with mentorship, infrastructure and access to an innovation network.",
    href: "https://web.brinc.io/fair-data-web3-accelerator/",
  },
  {
    name: "Misk Launchpad",
    tags: ["Virtual", "Intensive", "Pre-acceleration"],
    copy: "Supporting Saudi-based entrepreneurs, turning their ideas into market-ready businesses.",
    href: "https://misk.org.sa/en/",
  },
  {
    name: "A4X Accelerator",
    tags: ["Consumer", "Tech", "Enterprise", "Sustainability"],
    copy: "A four-track program providing funding, mentorship and market access to India-based startups.",
    href: "https://web.brinc.io/gvfl-a4x/",
  },
  {
    name: "Tamkeen: Mashroo3i",
    tags: ["In-person", "Early-stage", "Innovation"],
    copy: "Supporting startups in driving impactful and sustainable innovation across fashion and retail.",
    href: "https://www.tamkeen.bh/en/",
  },
  {
    name: "MBRIF",
    tags: ["Hybrid", "Scaling"],
    copy: "Supporting innovations within the UAE and internationally, providing mentorship, resources and more.",
    href: "https://mbrif.ae/",
  },
];

export const upcomingPrograms = ["Sustainability Program", "Web3 Program", "AI & ML"];

export const testimonials = [
  {
    quote:
      "Brinc helped us get off the ground by providing access to early capital, valuable guidance, and importantly global connections that opened doors for our international expansion.",
    name: "Patricia Bubner",
    role: "CEO, Orbillion",
  },
  {
    quote:
      "The Brinc program supported us in finalising our pilot with NEOM, and through the connections and support, we were able to start producing from Saudi Arabia.",
    name: "Torsten Scholl",
    role: "Co-founder & CEO, Aitonomi",
  },
  {
    quote:
      "The Brinc team helped us softland into the UAE from Saudi. With their guidance we got set up in the Abu Dhabi Global Market and got accepted into Hub71.",
    name: "Emad Dagheri",
    role: "Co-founder & CEO, Autobia",
  },
];

export type ProjectExperience = {
  number: string;
  title: string;
  value: string;
  description: string;
  facts: readonly string[];
  previewDescription?: string;
};

export const projects: readonly ProjectExperience[] = [
  {
    number: "01",
    title: "Refinery Shutdown & Workforce Facilities",
    value: "~£1M",
    description:
      "Facilities supporting 1,200+ personnel during a major refinery shutdown.",
    facts: [],
  },
  {
    number: "02",
    title: "Flare Drum Replacement",
    value: "£1.2M",
    description:
      "Major refinery shutdown project involving complex interfaces, construction planning and execution within an 8–12-week shutdown window.",
    facts: [],
    previewDescription:
      "Refinery shutdown project involving complex interfaces, construction planning and execution.",
  },
  {
    number: "03",
    title: "Vertical Heat Exchanger Replacement",
    value: "~£5M",
    description:
      "Including constructability, planning, heavy-lift coordination, construction execution and management using a 1,350-tonne crawler crane.",
    facts: ["144.5-tonne exchanger", "2.5-year project"],
    previewDescription:
      "Constructability, planning, heavy-lift coordination, construction execution and management.",
  },
  {
    number: "04",
    title: "Vessel Replacement",
    value: "~£1.4M",
    description:
      "Planning, coordination and heavy-lift activities using a 500-tonne mobile crane.",
    facts: ["15-tonne vessel", "2-year project"],
  },
  {
    number: "05",
    title: "Marine Loading Arm & Vapour Recovery Units",
    value: "£21M",
    description:
      "Marine infrastructure project incorporating loading arm installation, construction of a vapour recovery unit and associated piping connections.",
    facts: ["2.5-year project"],
    previewDescription:
      "Marine infrastructure incorporating loading arm installation, a vapour recovery unit and associated piping connections.",
  },
];

// Shared by the homepage preview and the full Experience page.
export const experienceCategories = [
  {
    id: "shutdown-turnaround",
    title: "Shutdown & Turnaround Projects",
    headline: "Shutdown constraints and construction interfaces.",
    description:
      "Workforce facilities and equipment replacement in refinery shutdown environments, with constrained execution windows and complex interfaces.",
    projectNumbers: ["01", "02"],
  },
  {
    id: "equipment-heavy-lifts",
    title: "Equipment Replacement & Heavy Lifts",
    headline: "Equipment weight and lifting requirements.",
    description:
      "Constructability, planning and coordination for equipment replacement, including heavy-lift activities using crawler and mobile cranes.",
    projectNumbers: ["03", "04"],
  },
  {
    id: "marine-capital",
    title: "Marine & Capital Infrastructure",
    headline: "Marine systems and associated infrastructure.",
    description:
      "Marine loading infrastructure, vapour recovery and associated piping within a major capital project.",
    projectNumbers: ["05"],
  },
];

export type Service = {
  number: string;
  slug: string;
  title: string;
  homepageDescription: string;
  introduction: string;
  capabilities: readonly string[];
};

export const services: readonly Service[] = [
  {
    number: "01",
    slug: "project-programme-planning",
    title: "Project & Programme Planning",
    homepageDescription:
      "Primavera P6 development and management to keep projects on schedule and under control.",
    introduction:
      "Programme development, updating and review using Primavera P6, with support for activities, milestones, critical paths and S-curves.",
    capabilities: [
      "Primavera P6 programme development and management",
      "Activity and milestone development",
      "Programme updating and forecasting",
      "Programme health checks",
      "Critical path development",
      "S-curve development",
    ],
  },
  {
    number: "02",
    slug: "project-management-construction-advisory",
    title: "Project Management & Construction Advisory",
    homepageDescription:
      "Independent, experienced oversight to strengthen project delivery and construction planning.",
    introduction:
      "Project management review and construction advisory support covering documentation, constructibility, sequencing and methodology.",
    capabilities: [
      "Project management review",
      "Construction documentation support",
      "Constructibility review",
      "Construction sequencing and methodology advisory",
      "Construction methodology review",
    ],
  },
  {
    number: "03",
    slug: "hse-advisory",
    title: "HSE Advisory",
    homepageDescription:
      "Health, safety and environmental documentation and review support.",
    introduction:
      "HSE documentation support, including activity risk assessments, method statements and construction phase plan development and review under CDM 2015.",
    capabilities: [
      "Activity risk assessment and review",
      "Method statement development and review",
      "Construction phase plan development and review under CDM 2015",
      "HSE documentation support",
    ],
  },
  {
    number: "04",
    slug: "project-performance-control",
    title: "Project & Performance Control",
    homepageDescription: "Clear, data-driven visibility of project performance.",
    introduction:
      "Programme performance monitoring, analysis and reporting, with support for reviewing progress, critical paths, float and emerging issues.",
    capabilities: [
      "Programme performance monitoring",
      "Baseline versus actual programme analysis",
      "Progress and programme reporting",
      "Critical path and float monitoring",
      "Early issue identification",
    ],
  },
  {
    number: "05",
    slug: "project-documentation-information-management",
    title: "Project Documentation & Information Management",
    homepageDescription:
      "Structured professional documentation supporting project delivery and governance.",
    introduction:
      "Documentation support for project plans, registers, execution plans, delivery phase plans and reporting packs.",
    capabilities: [
      "Project plans",
      "Project registers",
      "Project execution plans",
      "Project delivery phase plans",
      "Reporting packs",
    ],
  },
];

import Image from "next/image";

const photos: Record<string, { src: string; alt: string; position: string }> = {
  "project-programme-planning": {
    src: "/images/services/planning.jpg",
    alt: "Architectural drawings and printed floor plans spread across a table beside a laptop and pen.",
    position: "50% 55%",
  },
  "project-management-construction-advisory": {
    src: "/images/services/construction-advisory.jpg",
    alt: "Building under construction with scaffolding, formwork, a tower crane and stacked materials.",
    position: "50% 35%",
  },
  "hse-advisory": {
    src: "/images/services/hse-advisory.jpg",
    alt: "A group outdoors at a worksite, with several people wearing hard hats and high-visibility vests.",
    position: "50% 40%",
  },
  "project-performance-control": {
    src: "/images/services/performance-control.jpg",
    alt: "Overhead view of a construction site showing steel framing, brick walls and concrete foundations.",
    position: "30% 40%",
  },
  "project-documentation-information-management": {
    src: "/images/services/documentation.jpg",
    alt: "Rows of labelled ring binders and document folders on wooden shelves.",
    position: "50% 40%",
  },
};

export default function ServiceOverviewPhoto({ slug }: { slug: string }) {
  const photo = photos[slug];
  if (!photo) return null;
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
        loading="lazy"
        className="object-cover"
        style={{ objectPosition: photo.position }}
      />
    </div>
  );
}

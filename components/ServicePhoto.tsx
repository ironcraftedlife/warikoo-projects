import Image from "next/image";

const photographs: Record<string, { src: string; alt: string; position: string }> = {
  "project-programme-planning": {
    src: "/images/services/planning.jpg",
    alt: "Architectural drawings and floor plans spread across a table beside a laptop and pen.",
    position: "50% 55%",
  },
  "project-management-construction-advisory": {
    src: "/images/services/construction-advisory.jpg",
    alt: "Building under construction with scaffolding, formwork, a tower crane and stacked materials.",
    position: "50% 20%",
  },
  "hse-advisory": {
    src: "/images/services/hse-advisory.jpg",
    alt: "A group gathered outdoors at a worksite, with several people wearing hard hats and high-visibility vests.",
    position: "50% 40%",
  },
  "project-performance-control": {
    src: "/images/services/performance-control.jpg",
    alt: "Overhead view of a construction site showing steel framing, brick walls and concrete foundations.",
    position: "30% 15%",
  },
  "project-documentation-information-management": {
    src: "/images/services/documentation.jpg",
    alt: "Rows of labelled ring binders and document folders on wooden shelves.",
    position: "50% 10%",
  },
};

export default function ServicePhoto({ slug }: { slug: string }) {
  const photo = photographs[slug];
  if (!photo) return null;

  return (
    <div className="relative mt-10 aspect-[16/10] w-full max-h-[500px] overflow-hidden sm:mt-14 sm:aspect-[2/1] lg:mt-16">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1280px) 1180px, calc(100vw - clamp(40px, 8vw, 128px))"
        loading="lazy"
        className="object-cover"
        style={{ objectPosition: photo.position }}
      />
    </div>
  );
}

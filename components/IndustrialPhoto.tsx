import Image from "next/image";

export default function IndustrialPhoto() {
  return (
    <div className="site-container">
      <div className="industrial-photo relative aspect-square w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[12/5]">
        {/* Taller crops need extra source width to stay sharp with object-cover. */}
        <Image
          src="/images/industrial-project.jpg"
          alt="Large industrial ducts and cylindrical structures surrounded by steel stairways and elevated walkways."
          fill
          sizes="(min-width: 1280px) 1180px, (min-width: 1024px) 92vw, (min-width: 640px) 110vw, 180vw"
          className="industrial-image object-cover object-[45%_50%] lg:object-[50%_45%]"
        />
      </div>
    </div>
  );
}

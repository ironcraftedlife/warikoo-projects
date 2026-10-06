import Image from "next/image";

export default function IndustrialPhoto() {
  return (
    <div className="industrial-photo relative aspect-square w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[12/5]">
      <Image
        src="/images/industrial-project.jpg"
        alt="Large industrial ducts and cylindrical structures surrounded by steel stairways and elevated walkways."
        fill
        sizes="100vw"
        className="industrial-image object-cover object-[45%_50%] lg:object-[50%_45%]"
      />
    </div>
  );
}

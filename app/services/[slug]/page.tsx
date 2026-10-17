import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return {
    title: `${service.title} | WProjects`,
    description: `${service.introduction} WProjects supports construction clients across the UK.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  return (
    <>
      <Header contactHref="/contact" />
      <main id="main-content" tabIndex={-1}>
        <ServiceDetail service={services[index]} nextService={services[index + 1]} />
        <FinalCTA contactHref="/contact" />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/header"
import Hero from "@/components/hero"
import ContextSection from "@/components/context-section"
import ClassificationSection from "@/components/classification-section"
import DistinctivenessSection from "@/components/distinctiveness-section"
import ConfusionRiskSection from "@/components/confusion-risk-section"
import BrandMapSection from "@/components/brand-map-section"
import ConclusionsSection from "@/components/conclusions-section"
import DeliverablesSection from "@/components/deliverables-section"
import Footer from "@/components/footer"
import BrandValuesSection from "@/components/valores"

export const metadata = {
  title: "Mapa Marcario - Auditoría Marcaria Express",
  description:
    "Análisis de marcas del sector moda, belleza y retail - Maestría en Gestión de la Tecnología y la Innovación",
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <ClassificationSection />
      <BrandValuesSection />
      <DistinctivenessSection />
      <ConfusionRiskSection />
      <BrandMapSection />
      <ConclusionsSection />
      <Footer />
    </main>
  )
}

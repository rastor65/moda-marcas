import { FileText, Map, ImageIcon, Mic2 } from "lucide-react"

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: FileText,
      title: "Hoja de Trabajo Completa",
      description: "Documento con análisis detallado, clasificaciones y evaluaciones de todas las marcas.",
    },
    {
      icon: Map,
      title: "Mapa Marcario Dibujado",
      description: "Representación visual en papel o digital del posicionamiento y relaciones entre marcas.",
    },
    {
      icon: ImageIcon,
      title: "Fotografía del Mapa",
      description: "Imagen digital del mapa marcario para subir a la plataforma académica.",
    },
    {
      icon: Mic2,
      title: "Conclusión Oral",
      description: "Presentación verbal de 2 minutos con los hallazgos principales del análisis.",
    },
  ]

  return (
    <section id="deliverables" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Entregables del Equipo</h2>
          <p className="text-lg text-foreground/70">Productos finales de la Auditoría Marcaria Express</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliverables.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex gap-6 p-6 border border-border rounded-lg hover:border-accent-dark/50 transition"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent-dark/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent-dark" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-8 bg-accent-dark/5 border border-accent-dark/20 rounded-lg">
          <p className="text-foreground/80 text-center leading-relaxed">
            <strong>Fecha de entrega:</strong> 28 de noviembre, 2025 —<strong> Presentación en clase</strong> con apoyo
            visual de esta página web proyectada.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DeliverablesSection

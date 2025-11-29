const ContextSection = () => {
  const objectives = [
    "Identificar elementos dominantes de cada marca",
    "Clasificar las marcas según su tipo (nominativa, figurativa, mixta)",
    "Evaluar su distintividad en el mercado",
    "Analizar posibles riesgos de confusión marcaria",
    "Detectar oportunidades para nuevas marcas en el sector",
  ]

  return (
    <section id="context" className="py-20 md:py-32 px-4 md:px-8 bg-accent-light/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Contexto de la Actividad</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">Hoja de trabajo — Mapa marcario por equipos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              Esta actividad forma parte del programa de{" "}
              <strong>Maestría en Gestión de la Tecnología y la Innovación</strong>, donde desarrollamos competencias en
              análisis estratégico de marcas.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              El objetivo es analizar marcas del sector moda, belleza y retail desde la perspectiva de propiedad
              intelectual marcaria, evaluando tipos de marca, distinctividad, vulnerabilidades y oportunidades
              competitivas en el mercado.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Objetivos Específicos</h3>
            <ul className="space-y-2">
              {objectives.map((obj, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/80">
                  <span className="text-accent-dark font-bold flex-shrink-0">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContextSection

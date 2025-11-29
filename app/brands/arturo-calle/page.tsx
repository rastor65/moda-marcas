export const metadata = {
  title: "Arturo Calle - Análisis de Marca | Auditoría Marcaria",
  description:
    "Análisis detallado de la marca Arturo Calle: valor patrimonial, posicionamiento y competitividad",
}

const BRAND_PRIMARY = "#003B32"   // Verde profundo Arturo Calle
const BRAND_SECONDARY = "#025F4A" // Verde intermedio
const BRAND_ACCENT = "#C4A46A"    // Dorado-beige sobrio
const BRAND_LIGHT_BG = "#F6F3EC"  // Fondo cálido claro

export default function ArturoCallePage() {
  return (
    <div className="pt-16 bg-[#F6F3EC] text-slate-900">
      {/* HERO / PORTADA */}
      <section
        className="relative overflow-hidden border-b border-black/10"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})`,
        }}
      >
        {/* Overlay sutil geométrico */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light">
          <div className="absolute -left-20 top-8 h-72 w-72 rounded-full border border-emerald-50/40" />
          <div className="absolute right-[-3rem] bottom-[-3rem] h-96 w-96 rounded-full border border-emerald-50/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-stretch gap-10">
            {/* Columna texto principal */}
            <div className="flex-1 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-[11px] font-medium tracking-[0.22em] uppercase text-emerald-50/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND_ACCENT }} />
                Caso 1 · Moda masculina formal
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-[3.1rem] leading-tight font-serif tracking-[0.28em] uppercase text-white">
                  ARTURO&nbsp;CALLE
                </h1>
                <p className="text-lg sm:text-2xl font-semibold" style={{ color: "#F0E6D4" }}>
                  Elegancia ejecutiva colombiana
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Moda masculina",
                  "Formal ejecutivo",
                  "Marca colombiana",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium"
                    style={{
                      borderColor: "rgba(255,255,255,0.24)",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      color: "#E5F4ED",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-emerald-50/90 max-w-xl">
                Desde inicios de los años ochenta, <span className="font-semibold">Arturo Calle</span> se consolida como
                referente de moda masculina formal en Colombia. La marca combina sastrería,
                accesibilidad relativa dentro del segmento premium e identidad visual sobria,
                construyendo un patrimonio marcario sólido y consistente.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1 text-[11px] sm:text-xs text-emerald-50/90">
                <div>
                  <p style={{ color: BRAND_ACCENT }} className="font-semibold uppercase tracking-[0.16em] mb-1">
                    Segmento
                  </p>
                  <p>Hombre ejecutivo urbano</p>
                </div>
                <div>
                  <p style={{ color: BRAND_ACCENT }} className="font-semibold uppercase tracking-[0.16em] mb-1">
                    Posicionamiento
                  </p>
                  <p>Premium · formal</p>
                </div>
                <div>
                  <p style={{ color: BRAND_ACCENT }} className="font-semibold uppercase tracking-[0.16em] mb-1">
                    Trayectoria
                  </p>
                  <p>40+ años en el mercado</p>
                </div>
              </div>
            </div>

            {/* Columna visual / logotipo + atmósfera */}
            <div className="flex-1 flex items-stretch">
              <div className="relative w-full rounded-3xl bg-[#F6F3EC] border border-black/10 shadow-[0_28px_70px_rgba(0,0,0,0.28)] overflow-hidden">
                {/* Franja superior tipo etiqueta */}
                <div
                  className="absolute inset-x-0 top-0 h-9 flex items-center justify-center text-[11px] font-semibold tracking-[0.26em] uppercase border-b border-black/25"
                  style={{ backgroundColor: "#111111", color: BRAND_ACCENT }}
                >
                  <span className="mr-3 h-px w-6" style={{ backgroundColor: BRAND_ACCENT }} />
                  Colección Ejecutiva
                  <span className="ml-3 h-px w-6" style={{ backgroundColor: BRAND_ACCENT }} />
                </div>

                <div className="flex h-full flex-col md:flex-row pt-9">
                  {/* Logo */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-7 border-r border-black/10">
                    <div
                      className="inline-flex items-center justify-center rounded-[22px] border px-7 py-4 bg-white/95"
                      style={{
                        borderColor: "rgba(0,0,0,0.18)",
                        boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                      }}
                    >
                      <span className="font-serif tracking-[0.42em] text-[13px] sm:text-[14px] uppercase text-[#111111]">
                        ARTURO&nbsp;CALLE
                      </span>
                    </div>
                    <p className="mt-5 text-[11px] text-slate-600 text-center max-w-[220px] leading-relaxed">
                      Logotipo denominativo en serif, composición rectangular, uso consistente sobre fondo verde oscuro o blanco.
                    </p>
                  </div>

                  {/* Imagen de ambiente de marca */}
                  <div className="flex-1 relative">
                    <img
                      src="/arturo-calle-elegant-formal-mens-business-wear-bra.jpg"
                      alt="Ambientación visual de la marca Arturo Calle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-[11px] text-emerald-50">
                      <p
                        className="font-semibold tracking-[0.2em] uppercase mb-1"
                        style={{ color: BRAND_ACCENT }}
                      >
                        Sastrería y accesorios
                      </p>
                      <p className="leading-relaxed">
                        Experiencia de tienda alineada a un código visual sobrio: maderas oscuras, iluminación cálida y
                        exhibición por coordenadas de color.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR PATRIMONIAL */}
      <section className="py-16 md:py-20 bg-[#F6F3EC] border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-slate-900">
                Valor patrimonial de la marca
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                Cómo <span className="font-semibold">Arturo Calle</span> consolida un activo intangible que supera
                ampliamente el valor de sus activos físicos.
              </p>
            </div>
            <div className="text-[11px] rounded-full border px-4 py-2 bg-white/70 text-slate-700"
              style={{ borderColor: "rgba(0,59,50,0.18)" }}
            >
              <span className="font-semibold" style={{ color: BRAND_PRIMARY }}>
                Clave:
              </span>{" "}
              la marca actúa como palanca de márgenes, fidelización y expansión a nuevas categorías.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {/* Identidad */}
            <div className="bg-white border rounded-2xl p-7 flex flex-col gap-5 shadow-sm"
              style={{ borderColor: "rgba(0,59,50,0.16)" }}
            >
              <div className="space-y-2">
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: BRAND_PRIMARY }}
                >
                  Pilar 01
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  Identidad de marca
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-semibold">Arturo Calle</span> representa elegancia, profesionalismo y distinción.
                La marca sintetiza confianza, calidad percibida y estatus en el segmento masculino ejecutivo colombiano.
              </p>
              <div className="pt-4 border-t text-sm" style={{ borderColor: "rgba(0,59,50,0.12)" }}>
                <p
                  className="text-[11px] font-semibold mb-1 uppercase tracking-[0.12em]"
                  style={{ color: BRAND_ACCENT }}
                >
                  Valor generado
                </p>
                <p className="text-slate-700">
                  Posicionamiento premium que habilita márgenes de{" "}
                  <span className="font-semibold">30–40% por encima</span> del promedio del sector formal masculino.
                </p>
              </div>
            </div>

            {/* Lealtad */}
            <div className="bg-white border rounded-2xl p-7 flex flex-col gap-5 shadow-sm"
              style={{ borderColor: "rgba(0,59,50,0.16)" }}
            >
              <div className="space-y-2">
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: BRAND_PRIMARY }}
                >
                  Pilar 02
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  Lealtad del cliente
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                La marca articula una comunidad de clientes recurrentes. Los ejecutivos retornan por hábito, confianza
                y recomendación entre pares, reforzando el posicionamiento sin depender exclusivamente de publicidad.
              </p>
              <div className="pt-4 border-t text-sm" style={{ borderColor: "rgba(0,59,50,0.12)" }}>
                <p
                  className="text-[11px] font-semibold mb-1 uppercase tracking-[0.12em]"
                  style={{ color: BRAND_ACCENT }}
                >
                  Impacto financiero
                </p>
                <p className="text-slate-700">
                  Reducción estimada del{" "}
                  <span className="font-semibold">25–35%</span> en costo de adquisición de clientes gracias a la
                  recurrencia y a referencias orgánicas.
                </p>
              </div>
            </div>

            {/* Extensión */}
            <div className="bg-white border rounded-2xl p-7 flex flex-col gap-5 shadow-sm"
              style={{ borderColor: "rgba(0,59,50,0.16)" }}
            >
              <div className="space-y-2">
                <p
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: BRAND_PRIMARY }}
                >
                  Pilar 03
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  Poder de extensión
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                El nombre <span className="font-semibold">Arturo Calle</span> facilita la expansión a categorías
                complementarias: cinturones, relojes, accesorios, fragancias y líneas casual-ejecutivas.
              </p>
              <div className="pt-4 border-t text-sm" style={{ borderColor: "rgba(0,59,50,0.12)" }}>
                <p
                  className="text-[11px] font-semibold mb-1 uppercase tracking-[0.12em]"
                  style={{ color: BRAND_ACCENT }}
                >
                  Potencial de crecimiento
                </p>
                <p className="text-slate-700">
                  Las extensiones pueden representar alrededor de{" "}
                  <span className="font-semibold">15–20%</span> de ingresos adicionales si se gestionan con coherencia
                  marcaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCA VS ACTIVOS TANGIBLES */}
      <section className="py-16 md:py-20 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-slate-900">
              Marca vs. activos tangibles
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              ¿Qué pesa más en el valor total de <span className="font-semibold">Arturo Calle</span>: las tiendas y el
              inventario, o la marca que los sostiene?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Tangibles */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                Activos tangibles
              </h3>
              <ul className="space-y-3 mb-7 text-sm text-slate-700">
                {[
                  "Inventario: prendas en tiendas, bodegas y colecciones en tránsito.",
                  "Inmuebles y locales: puntos de venta en centros comerciales estratégicos.",
                  "Manufactura: infraestructura de confección, maquinaria y equipos.",
                  "Tecnología: sistemas logísticos, ERP y plataforma e-commerce.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl border border-slate-200 p-6 text-sm">
                <p className="text-xs text-slate-500 mb-1">
                  Valor estimado (tangibles)
                </p>
                <p className="text-3xl font-bold text-slate-800">
                  USD $50–80M
                </p>
                <p className="text-[11px] text-slate-500 mt-2">
                  Activos depreciables y relativamente reemplazables.
                </p>
              </div>
            </div>

            {/* Marca / Intangibles */}
            <div
              className="rounded-2xl p-8 border bg-gradient-to-br from-[#F6F0E4] via-[#F2E6CF] to-[#F4E9D4]"
              style={{ borderColor: BRAND_ACCENT }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                Activos intangibles (marca)
              </h3>
              <ul className="space-y-3 mb-7 text-sm text-slate-800">
                {[
                  "Reputación: más de 40 años de confianza y consistencia en calidad percibida.",
                  "Posicionamiento: sinónimo de elegancia masculina formal en Colombia.",
                  "Premium pricing: capacidad de cobrar entre 30–40% más que marcas masivas.",
                  "Barreras de entrada: alta recordación en el segmento ejecutivo formal.",
                  "Potencial de expansión: proyección hacia mercados internacionales y nuevas líneas.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: BRAND_ACCENT }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl border p-6 text-sm"
                style={{ borderColor: BRAND_ACCENT }}
              >
                <p className="text-xs text-slate-600 mb-1">
                  Valor estimado (marca)
                </p>
                <p className="text-3xl font-bold" style={{ color: BRAND_ACCENT }}>
                  USD $150–250M+
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Principal generador de flujo de caja futuro y de diferenciación competitiva.
                </p>
              </div>
            </div>
          </div>

          {/* Barra comparativa */}
          <div className="bg-[#111111] text-white rounded-2xl p-8 md:p-10 space-y-7">
            <h3 className="text-xl md:text-2xl font-semibold text-center font-serif">
              Peso relativo en el valor total de la empresa
            </h3>

            <div className="space-y-4">
              <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="flex h-full">
                  <div
                    className="bg-slate-300"
                    style={{ width: "32%" }}
                    aria-hidden
                  />
                  <div
                    className="bg-[rgba(196,164,106,1)]"
                    style={{ width: "68%" }}
                    aria-hidden
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 text-center text-sm">
                <div>
                  <p className="text-3xl font-bold text-slate-300">30–35%</p>
                  <p className="mt-1">Activos tangibles</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Depreciables, vendibles y sustituibles.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: BRAND_ACCENT }}>
                    65–70%
                  </p>
                  <p className="mt-1">Marca e intangibles</p>
                  <p className="mt-1 text-[11px] text-slate-300/80">
                    Duraderos, protegibles y núcleo de la diferenciación.
                  </p>
                </div>
              </div>

              <p className="text-center text-[13px] text-slate-200">
                La marca <span className="font-semibold">Arturo Calle</span> puede valer entre{" "}
                <span className="font-semibold">2 y 3 veces</span> más que el conjunto de sus activos físicos. Es su
                principal activo estratégico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR DE INNOVACIÓN */}
      <section className="py-16 md:py-20 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-slate-900">
              Valor de innovación
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Cómo <span className="font-semibold">Arturo Calle</span> mantiene su relevancia combinando tradición en
              sastrería con transformación digital y nuevas propuestas de producto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Innovaciones clave */}
            <div
              className="rounded-2xl border p-8 space-y-5"
              style={{ borderColor: BRAND_ACCENT, background: "linear-gradient(140deg,#F7F3EB,#F0E3CF,#E6F0E8)" }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Innovaciones clave
              </h3>
              <ul className="space-y-4 text-sm text-slate-800">
                {[
                  {
                    title: "Transformación digital (2020–2024)",
                    body:
                      "Despliegue de plataforma e-commerce omnicanal, integración de inventario en tiempo real y recomendaciones soportadas en analítica.",
                  },
                  {
                    title: "Línea formal–casual híbrida",
                    body:
                      "Colecciones que adaptan códigos formales a contextos de trabajo remoto y esquemas flexibles, sin perder el lenguaje ejecutivo.",
                  },
                  {
                    title: "Sostenibilidad en manufactura",
                    body:
                      "Introducción progresiva de telas sostenibles y procesos eco-eficientes en líneas seleccionadas, alineando la marca con nuevas sensibilidades.",
                  },
                  {
                    title: "Experiencia mobile-first",
                    body:
                      "Sitio y servicios digitales optimizados, con funcionalidades de estilismo, visualización de looks y acceso a colecciones exclusivas.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: BRAND_PRIMARY }}
                    />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-slate-700">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Métricas de innovación */}
            <div className="space-y-4">
              {[
                {
                  label: "Crecimiento digital (YoY)",
                  value: "+35–45%",
                  detail: "Ventas en canales digitales frente al retail físico tradicional.",
                },
                {
                  label: "Retención de clientes en canales digitales",
                  value: "+28%",
                  detail: "Mayor engagement mediante estrategias omnicanal y gestión de CRM.",
                },
                {
                  label: "Reconocimiento reputacional",
                  value: "Primeros lugares MERCO",
                  detail: "Presencia destacada en rankings de reputación corporativa.",
                },
                {
                  label: "Inversión anual en innovación",
                  value: "3–5% de ingresos",
                  detail: "Recursos destinados a nuevos productos, canales y experiencia de marca.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border-l-4 p-6 shadow-sm"
                  style={{ borderColor: BRAND_ACCENT }}
                >
                  <p className="text-xs text-slate-600 mb-1">{item.label}</p>
                  <p className="text-2xl font-bold" style={{ color: BRAND_ACCENT }}>
                    {item.value}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Síntesis patrimonial + innovación */}
          <div className="bg-[#111111] text-white rounded-2xl p-8 md:p-10 space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center font-serif">
              Síntesis: patrimonio + innovación = valor total
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center text-sm">
              <div>
                <p className="text-[13px] text-slate-300 mb-1">
                  Valor patrimonial estimado
                </p>
                <p className="text-3xl font-bold" style={{ color: BRAND_ACCENT }}>
                  USD $150–250M
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  Reputación, posicionamiento y lealtad de marca.
                </p>
              </div>
              <div>
                <p className="text-[13px] text-slate-300 mb-1">
                  Impulso asociado a innovación
                </p>
                <p className="text-3xl font-bold text-emerald-300">
                  +35–45%
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  Crecimientos anuales impulsados por digitalización y nuevas líneas.
                </p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                <p className="text-[13px] text-slate-300 mb-1">
                  Valor empresarial potencial
                </p>
                <p className="text-3xl font-bold text-white">
                  USD $200–350M+
                </p>
                <p className="mt-2 text-[11px] text-slate-400">
                  Integrando patrimonio marcario y capacidad de renovación sistemática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMIENTO EN EL MERCADO */}
      <section className="py-16 md:py-20 bg-[#F6F3EC] border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-slate-900">
              Posicionamiento en el mercado
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Ubicación competitiva de <span className="font-semibold">Arturo Calle</span> frente a otras propuestas de
              moda masculina y marcas globales con oferta formal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Matriz / mapa */}
            <div
              className="bg-white rounded-2xl border p-8 space-y-5"
              style={{ borderColor: "rgba(0,59,50,0.16)" }}
            >
              <h3 className="text-lg font-semibold text-slate-900">
                Matriz de posicionamiento
              </h3>
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 h-64 overflow-hidden">
                {/* Ejes */}
                <div className="absolute inset-6">
                  <div className="absolute inset-y-0 left-1/2 w-px bg-slate-300" />
                  <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300" />
                  {/* Etiquetas */}
                  <span className="absolute left-4 top-4 text-[11px] text-slate-500">
                    Precio bajo
                  </span>
                  <span className="absolute right-4 top-4 text-[11px] text-slate-500">
                    Precio alto
                  </span>
                  <span className="absolute left-4 bottom-4 text-[11px] text-slate-500">
                    Casual
                  </span>
                  <span className="absolute right-4 bottom-4 text-[11px] text-slate-500">
                    Formal
                  </span>
                </div>

                {/* AC – cuadrante premium formal */}
                <div className="absolute right-[24%] top-[26%] h-12 w-12 rounded-full border-2 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                  style={{ backgroundColor: "#111111", borderColor: BRAND_ACCENT }}
                >
                  <span className="font-serif text-[13px] tracking-[0.22em]" style={{ color: BRAND_ACCENT }}>
                    AC
                  </span>
                </div>

                {/* Competidores genéricos */}
                <div className="absolute left-[26%] bottom-[22%] h-9 w-9 rounded-full border-2 flex items-center justify-center text-[10px] font-semibold shadow-sm"
                  style={{ backgroundColor: "#E5EDF7", borderColor: "#98A7C5", color: "#394564" }}
                >
                  Fast
                </div>
                <div className="absolute right-[32%] top-[52%] h-9 w-9 rounded-full border-2 flex items-center justify-center text-[10px] font-semibold shadow-sm"
                  style={{ backgroundColor: "#DEF1E8", borderColor: "#5BA583", color: "#22513D" }}
                >
                  Suit
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-600 mt-3">
                <span className="font-semibold">Posición:</span> cuadrante de{" "}
                <span className="font-semibold">precio alto</span> y{" "}
                <span className="font-semibold">formalidad elevada</span>, donde los márgenes son mayores y la
                diferenciación marcaria es crítica.
              </p>
            </div>

            {/* KPIs y fortalezas / retos */}
            <div className="space-y-4">
              {/* KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Participación en moda formal masculina",
                    value: "18–22%",
                    detail: "Liderazgo dentro del contexto colombiano.",
                  },
                  {
                    label: "Top-of-mind en target ejecutivo",
                    value: "≈89%",
                    detail: "Recordación espontánea en hombres ejecutivos urbanos.",
                  },
                  {
                    label: "Precio promedio por prenda",
                    value: "USD $120–250",
                    detail: "Entre 3 y 4 veces por encima de marcas de moda masiva.",
                  },
                  {
                    label: "Presencia geográfica",
                    value: "15+ países",
                    detail: "Colombia, región y puntos de entrada en otros mercados.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl border-l-4 p-5 text-xs md:text-sm"
                    style={{ borderColor: BRAND_PRIMARY }}
                  >
                    <p className="text-[11px] text-slate-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Fortalezas y retos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-sm">
                <div className="rounded-2xl p-6"
                  style={{ backgroundColor: "#E5F1EB", borderLeft: `4px solid ${BRAND_SECONDARY}` }}
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Fortalezas clave
                  </h3>
                  <ul className="space-y-1.5 text-[13px] text-slate-700">
                    {[
                      "Trayectoria de más de cuatro décadas.",
                      "Posicionamiento premium claro y consistente.",
                      "Fuerte lealtad y recurrencia del cliente objetivo.",
                      "Red de distribución consolidada en Colombia.",
                      "Capacidad de lanzar líneas formal–casual coherentes.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl p-6"
                  style={{ backgroundColor: "#FFF3E4", borderLeft: "4px solid #D28B47" }}
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Retos estratégicos
                  </h3>
                  <ul className="space-y-1.5 text-[13px] text-slate-700">
                    {[
                      "Competencia de cadenas fast-fashion globales y regionales.",
                      "Cambio en códigos de vestuario (teletrabajo, casualización).",
                      "Necesidad de conectar con públicos jóvenes sin diluir la marca.",
                      "Presión de marcas europeas de lujo en el segmento premium.",
                      "Dependencia relativa del segmento ejecutivo formal clásico.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D28B47]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="py-16 md:py-20 bg-[#111111] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold">
            Conclusión: el verdadero valor de Arturo Calle
          </h2>
          <div className="space-y-5 text-sm md:text-base leading-relaxed text-slate-100">
            <p>
              <span className="font-semibold">Arturo Calle</span> muestra con claridad cómo una marca puede llegar a
              valer mucho más que el conjunto de sus activos físicos. Su patrimonio real no se concentra en bodegas,
              maquinaria o infraestructura, sino en la{" "}
              <span className="font-semibold">percepción, la confianza y el posicionamiento</span> construidos de forma
              consistente durante más de cuarenta años.
            </p>
            <p>
              Estimar que entre el <span className="font-semibold">65 y el 70%</span> del valor empresarial proviene del
              intangible marcario explica por qué resulta estratégico invertir en comunicación, experiencia de tienda y
              coherencia en el portafolio. La marca habilita precios superiores, fidelidad recurrente y una sólida
              capacidad de extenderse a nuevas categorías sin perder identidad.
            </p>
            <p>
              De cara al futuro, los desafíos clave se orientan a: (1) consolidar la presencia digital y omnicanal, (2) renovar
              el discurso y el portafolio para conectar con generaciones más jóvenes sin abandonar el núcleo ejecutivo,
              (3) profundizar en la internacionalización y (4) ampliar el territorio hacia un estilo de vida más amplio,
              donde <span className="font-semibold">Arturo Calle</span> sea sinónimo de elegancia masculina más allá del
              traje tradicional.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

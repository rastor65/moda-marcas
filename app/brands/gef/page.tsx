export const metadata = {
  title: "GEF - Análisis de Marca | Auditoría Marcaria",
  description:
    "Análisis detallado de la marca GEF: valor patrimonial, posicionamiento, innovación sostenible y competitividad.",
}

export default function GefPage() {
  return (
    <div className="pt-16 bg-white text-slate-900">
      {/* HERO · IDENTIDAD DE MARCA */}
      <section className="pt-24 md:pt-28 bg-gradient-to-br from-[#050814] via-[#0b1120] to-[#020617] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12">
            {/* Texto principal */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
                Moda joven · Marca colombiana
              </div>

              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                  GEF
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-white/80">
                  Moda juvenil accesible, vibrante y digital-first
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-white text-[#111827] uppercase tracking-wide">
                  Casual
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#dc2626] text-white uppercase tracking-wide">
                  Juvenil
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white uppercase tracking-wide border border-white/25">
                  Accesible
                </span>
              </div>

              <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">
                GEF se ha consolidado como una de las marcas juveniles más
                reconocidas del país. Combina color, diseño accesible y una
                narrativa cosmopolita orientada a una generación que se expresa
                a través de la ropa y vive principalmente en entornos digitales.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-white/80">
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Segmento
                  </p>
                  <p className="font-medium">Moda juvenil accesible</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Posicionamiento
                  </p>
                  <p className="font-medium">Casual · Trendy · Urbano</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Territorio
                  </p>
                  <p className="font-medium">Latinoamérica · Digital</p>
                </div>
              </div>
            </div>

            {/* Visual de marca */}
            <div className="flex-1 w-full">
              <div className="relative h-72 md:h-80 w-full max-w-md md:max-w-none mx-auto rounded-3xl overflow-hidden bg-[#020617] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.7)]">
                {/* Overlays suaves */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.18)_0,_transparent_45%)]" />

                <img
                  src="/gef-fashion-brand-colorful-trendy-clothing-for-you.jpg"
                  alt="GEF - Moda juvenil y colorida"
                  className="relative h-full w-full object-cover"
                />

                {/* Cinta superior */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-white tracking-[0.18em] uppercase">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#1d4ed8] via-white to-[#dc2626]" />
                  GEF brand
                </div>

                {/* Texto inferior */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-white/85">
                  <span>Generación Z · Millennials</span>
                  <span>Moda cotidiana de alto impacto visual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR PATRIMONIAL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
              Valor patrimonial de la marca
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d4ed8]">
              Cómo GEF construye valor más allá de la prenda
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              La fortaleza patrimonial de GEF se apoya en su identidad juvenil,
              la conexión emocional con su audiencia y una arquitectura de marca
              pensada para el ecosistema digital y social media.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Identidad joven */}
            <article className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 md:p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Identidad joven y expresiva
                </h3>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  GEF se asocia a juventud, color y libertad de expresión. Su
                  identidad visual, basada en contrastes fuertes y mensajes
                  directos, la posiciona como marca con tono propio dentro de la
                  moda urbana latinoamericana.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#1d4ed8]">
                  Valor generado
                </p>
                <p className="text-sm text-slate-700">
                  Construcción de una comunidad joven que reconoce la marca como
                  símbolo de pertenencia y estilo accesible.
                </p>
              </div>
            </article>

            {/* Conexión emocional */}
            <article className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 md:p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Conexión emocional y comunidad
                </h3>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  La marca se relaciona con sus usuarios mediante campañas
                  cercanas, lenguaje directo y una narrativa que integra
                  diversidad, cotidianidad y autoexpresión.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#1d4ed8]">
                  Impacto
                </p>
                <p className="text-sm text-slate-700">
                  Alto engagement orgánico en redes sociales y fuerte peso del
                  boca a boca digital en la decisión de compra.
                </p>
              </div>
            </article>

            {/* Arquitectura digital */}
            <article className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 md:p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  Arquitectura digital y omnicanalidad
                </h3>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  GEF está diseñada para operar en un entorno digital: catálogos
                  online, campañas en redes sociales y presencia consistente en
                  múltiples plataformas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#1d4ed8]">
                  Oportunidad
                </p>
                <p className="text-sm text-slate-700">
                  Escalar la marca más allá del mercado local, sin depender de
                  una red intensiva de tiendas físicas tradicionales.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MARCA VS ACTIVOS TANGIBLES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 text-center space-y-3">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: "var(--brand-gef-1)" }}
            >
              Marca vs. activos tangibles en GEF
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              En GEF, el principal generador de valor no es la infraestructura
              física, sino el activo marcario: comunidad, diseño, contenido y
              presencia digital.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Tangibles */}
            <article className="bg-white rounded-2xl border border-slate-200 p-7 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Activos tangibles
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Inventario de colecciones en tiendas, bodegas y centros
                      logísticos.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Locales físicos seleccionados, con enfoque complementario
                      al canal digital.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Estructura de manufactura y proveedores especializados en
                      moda juvenil.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>
                      Plataformas tecnológicas y sistemas logísticos para
                      operar el e-commerce.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[11px] text-slate-500 mb-1">
                  Valor estimado de tangibles (orden de magnitud)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900">
                  USD $15–25M
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Más sensibles a ciclos económicos y a cambios en el formato
                  de retail.
                </p>
              </div>
            </article>

            {/* Intangibles */}
            <article className="bg-white rounded-2xl border border-[var(--brand-gef-1)]/40 p-7 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  Activos intangibles (marca)
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-gef-3)]" />
                    <span>
                      Identidad visual coherente y reconocible en digital,
                      basada en contrastes y mensajes directos.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-gef-3)]" />
                    <span>
                      Comunidad digital amplia con alta interacción y contenido
                      generado por usuarios.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-gef-3)]" />
                    <span>
                      Posicionamiento como referente de moda casual juvenil
                      accesible en el contexto latinoamericano.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-gef-3)]" />
                    <span>
                      Capacidad de influir en tendencias y de interpretar el
                      gusto de generaciones más jóvenes.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-[11px] text-slate-600 mb-1">
                  Valor estimado de marca (orden de magnitud)
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  USD $60–100M+
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Principal motor de demanda, preferencia y repetición de compra
                  en el largo plazo.
                </p>
              </div>
            </article>
          </div>

          {/* Barra comparativa */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7">
              <p className="text-sm md:text-base text-slate-700 mb-4 text-center">
                En GEF, la marca explica una porción claramente mayor del valor
                total que los activos físicos.
              </p>
              <div className="relative h-3 rounded-full bg-slate-200 overflow-hidden mb-3">
                <div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: "24%",
                    backgroundColor: "rgba(30,64,175,0.55)",
                  }}
                />
                <div
                  className="absolute inset-y-0 left-[24%]"
                  style={{
                    width: "76%",
                    background:
                      "linear-gradient(to right,var(--brand-gef-1),var(--brand-gef-3))",
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>Tangibles · ~20–25%</span>
                <span>Marca e intangibles · ~75–80%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR DE INNOVACIÓN · SOSTENIBILIDAD */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
              Innovación y sostenibilidad
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: "var(--brand-gef-1)" }}
            >
              GEF como laboratorio de innovación sostenible
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              La marca no solo innova en diseño y comunicación, sino también en
              procesos productivos, circularidad y uso responsable de recursos.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Innovaciones clave */}
            <article className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-blue-50 to-white p-7 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                Innovaciones clave en sostenibilidad
              </h3>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <p className="text-xs font-semibold text-emerald-700 mb-1">
                    Gef Green · Portafolio sostenible
                  </p>
                  <p>
                    Amplio porcentaje de la oferta fabricado con materiales
                    reciclados o certificados (denim reciclado, algodón
                    orgánico, iniciativas BCI), integrando sostenibilidad al
                    corazón del producto.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <p className="text-xs font-semibold text-emerald-700 mb-1">
                    Energía y agua en planta
                  </p>
                  <p>
                    Implementación de paneles solares y tecnologías para
                    disminuir consumo energético, así como plantas de tratamiento
                    de agua con recuperación de calor y reutilización parcial.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-4">
                  <p className="text-xs font-semibold text-emerald-700 mb-1">
                    Economía circular
                  </p>
                  <p>
                    Programas de reaprovechamiento de excedentes textiles y
                    materiales, articulados con iniciativas sociales y de
                    construcción sostenible.
                  </p>
                </div>
              </div>
            </article>

            {/* Indicadores de impacto */}
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Proporción de portafolio sostenible
                </p>
                <p
                  className="text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  ~70%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  La sostenibilidad deja de ser una línea marginal y se integra
                  a la propuesta central de la marca.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Reducción de residuos y optimización de recursos
                </p>
                <p
                  className="text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  +40%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Mejora en indicadores ambientales gracias a tecnologías de
                  producción ecoeficientes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Peso de la sostenibilidad en la decisión de compra
                </p>
                <p
                  className="text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  &gt;60%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Creciente relevancia del criterio sostenible en el público
                  objetivo de GEF.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Inversión anual en I+D sostenible
                </p>
                <p
                  className="text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  4–6% de ingresos
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Refuerza el carácter de GEF como marca que innova no solo en
                  diseño, sino en cómo produce.
                </p>
              </div>
            </div>
          </div>

          {/* Síntesis patrimonial + innovación */}
          <div
            className="rounded-3xl p-10 md:p-12 text-white"
            style={{
              background:
                "linear-gradient(135deg,var(--brand-gef-1),var(--brand-gef-3))",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Síntesis: patrimonio de marca + innovación sostenible
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-[15px]">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Valor patrimonial aproximado
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  USD $60–100M
                </p>
                <p className="text-white/80">
                  Explicado principalmente por comunidad, identidad y peso de la
                  marca en el ecosistema digital.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Aporte de la innovación
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  +25–35% crecimiento
                </p>
                <p className="text-white/80">
                  Impulsado por la propuesta sostenible, la diferenciación
                  responsable y la comunicación coherente de estos esfuerzos.
                </p>
              </div>
              <div className="space-y-2 border-t border-white/30 pt-4 md:border-t-0 md:border-l md:pl-6">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Valor empresarial integrado
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  USD $90–150M+
                </p>
                <p className="text-white/80">
                  Resultado de combinar patrimonio marcario, comunidad digital e
                  innovación sostenible como ejes estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMIENTO EN EL MERCADO */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
              Posicionamiento competitivo
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: "var(--brand-gef-1)" }}
            >
              GEF en la matriz de moda joven accesible
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              GEF opera en un cuadrante de alto dinamismo: precios accesibles,
              orientación a tendencias y fuerte resonancia emocional en públicos
              jóvenes.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Matriz de posicionamiento */}
            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-5">
                Matriz de precio vs. estilo
              </h3>
              <div className="relative bg-slate-50 rounded-2xl border border-slate-200/80 h-64 overflow-hidden">
                {/* Ejes y etiquetas */}
                <div className="absolute inset-3 border border-dashed border-slate-300 rounded-xl" />
                <span className="absolute left-4 top-3 text-[11px] text-slate-500">
                  Accesible
                </span>
                <span className="absolute right-4 top-3 text-[11px] text-slate-500">
                  Premium
                </span>
                <span className="absolute left-4 bottom-4 text-[11px] text-slate-500">
                  Clásico
                </span>
                <span className="absolute right-4 bottom-4 text-[11px] text-slate-500">
                  Joven / Trendy
                </span>

                {/* Línea central */}
                <div className="absolute inset-y-6 left-1/2 w-px bg-slate-200" />
                <div className="absolute inset-x-6 top-1/2 h-px bg-slate-200" />

                {/* Punto GEF */}
                <div
                  className="absolute flex items-center justify-center rounded-full text-xs font-semibold text-white shadow-[0_0_0_4px_rgba(255,255,255,0.9)]"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    background:
                      "linear-gradient(to right,var(--brand-gef-1),var(--brand-gef-3))",
                    left: "65%",
                    top: "65%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  GEF
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-4">
                <span className="font-semibold">Posición:</span> precio
                accesible, estilo marcadamente joven y trendy, con énfasis en
                rotación rápida de colecciones.
              </p>
            </article>

            {/* Indicadores clave */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl border-l-4 border-[var(--brand-gef-1)]/80 p-6">
                <p className="text-xs text-slate-500 mb-1">Participación</p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  8–12%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Cuota aproximada en el segmento de moda joven casual
                  accesible, compitiendo con marcas fast-fashion.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-l-4 border-[var(--brand-gef-1)]/80 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Engagement en redes sociales
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  18–25%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Tasas de interacción muy superiores al promedio de la
                  categoría moda (2–5%).
                </p>
              </div>

              <div className="bg-white rounded-2xl border-l-4 border-[var(--brand-gef-1)]/80 p-6">
                <p className="text-xs text-slate-500 mb-1">
                  Precio promedio por prenda
                </p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  USD $20–45
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Tickets accesibles con percepción de diseño actual y buena
                  relación valor–precio.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-l-4 border-[var(--brand-gef-1)]/80 p-6">
                <p className="text-xs text-slate-500 mb-1">Peso del canal digital</p>
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--brand-gef-1)" }}
                >
                  ~70%
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  Ventas canalizadas a través de e-commerce, redes y
                  marketplaces, coherentes con su naturaleza digital-first.
                </p>
              </div>
            </div>
          </div>

          {/* Fortalezas y retos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-emerald-50 rounded-2xl border-l-4 border-emerald-600 p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-900 mb-4">
                Fortalezas de GEF como marca
              </h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>• Comunidad digital amplia, activa y comprometida.</li>
                <li>• Identidad visual clara y fácilmente reconocible.</li>
                <li>• Capacidad para capturar y traducir tendencias rápidas.</li>
                <li>• Precio accesible con alto volumen de rotación.</li>
                <li>• Apuesta consistente por sostenibilidad y circularidad.</li>
                <li>• Flexibilidad para operar con foco digital y omnicanal.</li>
              </ul>
            </article>

            <article className="bg-amber-50 rounded-2xl border-l-4 border-amber-600 p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-4">
                Retos estratégicos
              </h3>
              <ul className="space-y-2 text-sm text-slate-800">
                <li>
                  • Diferenciarse con claridad frente al fast-fashion global
                  (Shein, H&M, etc.).
                </li>
                <li>
                  • Reforzar percepción de calidad para sostener lealtad en el
                  largo plazo.
                </li>
                <li>
                  • Mantener innovación constante sin desgastar la narrativa de
                  sostenibilidad.
                </li>
                <li>
                  • Gestionar márgenes ajustados derivados del enfoque
                  accesible.
                </li>
                <li>
                  • Construir propuestas de valor más profundas (servicios,
                  experiencias, lifestyle).
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN ESTRATÉGICA */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg,#020617,var(--brand-gef-1),#020617)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Conclusión: GEF como marca juvenil digital y sostenible
          </h2>
          <div className="space-y-5 text-sm md:text-base text-white/85 leading-relaxed max-w-3xl">
            <p>
              GEF ilustra cómo una marca contemporánea puede construir la mayor
              parte de su valor desde intangibles: comunidad, identidad visual,
              narrativa de sostenibilidad y dominio del entorno digital. Sus
              activos físicos son relevantes, pero la ventaja competitiva real
              reside en su capacidad de conectar con una generación que compra
              tanto por afinidad de valores como por diseño.
            </p>
            <p>
              Frente a marcas tradicionales como Arturo Calle, GEF compite menos
              por formalidad y más por relevancia cultural, velocidad de
              respuesta a tendencias y coherencia entre discurso y prácticas
              productivas. Su desafío estratégico consiste en elevar la
              percepción de calidad y consolidar una propuesta sostenible
              creíble, evitando caer en la lógica indiferenciada del
              fast-fashion.
            </p>
            <p>
              Para potenciar su valor patrimonial, la marca debería profundizar
              en: (1) una plataforma de sostenibilidad que sea parte central del
              storytelling de marca, (2) una evolución hacia un lifestyle joven
              integral (moda, accesorios, experiencias), (3) la creación de
              sub-marcas o líneas específicas para segmentos diferenciados de la
              audiencia, y (4) una estrategia de expansión internacional apalanca
              en su fortaleza digital.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

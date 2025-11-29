export const metadata = {
  title: "Vélez - Análisis de Marca | Auditoría Marcaria",
  description:
    "Análisis de Vélez: marroquinería artesanal en cuero, sostenibilidad y posicionamiento premium.",
}

export default function VelezPage() {
  return (
    <div className="pt-16 bg-white text-slate-900">
      {/* HERO · IDENTIDAD VELEZ */}
      <section className="pt-24 md:pt-28 bg-gradient-to-br from-[#1b120c] via-[#2f2217] to-[#3e2d20] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12">
            {/* Texto principal */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] uppercase text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                Cuero · Artesanía · Colombia
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight">
                  Vélez
                </h1>
                <p className="text-xl md:text-2xl font-serif text-[#f5e7d4]">
                  Artesanía en cuero colombiano
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-[#d9a15c] text-[#19110c] tracking-[0.18em] uppercase">
                  Cuero
                </span>
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-white/5 border border-white/25 text-white tracking-[0.18em] uppercase">
                  Artesanal
                </span>
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-[#f5e7d4] text-[#3b291c] tracking-[0.18em] uppercase">
                  Herencia
                </span>
              </div>

              <p className="text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
                Vélez es sinónimo de marroquinería auténtica en cuero. La marca
                se posiciona sobre una promesa clara: piezas duraderas,
                reparables y heredables que honran el oficio artesanal colombiano
                frente al avance del fast fashion.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-white/80">
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Segmento
                  </p>
                  <p className="font-medium">Premium artesanal</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Territorio
                  </p>
                  <p className="font-medium">Cuero colombiano</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Enfoque
                  </p>
                  <p className="font-medium">Durabilidad y circularidad</p>
                </div>
              </div>
            </div>

            {/* Visual de marca */}
            <div className="flex-1 w-full">
              <div className="relative h-72 md:h-80 w-full max-w-md md:max-w-none mx-auto rounded-3xl overflow-hidden bg-[#1a120c] border border-white/18 shadow-[0_26px_90px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,161,92,0.16)_0,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.7)_0,_transparent_60%)]" />

                <img
                  src="/velez-leather-goods-artisanal-colombian-cuero-auth.jpg"
                  alt="Universo de marroquinería artesanal Vélez"
                  className="relative h-full w-full object-cover"
                />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#f5e7d4] via-[#d9a15c] to-[#f5e7d4]" />
                  Vélez
                </div>

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] text-white/85">
                  <span>Cuero auténtico · Hecho en Colombia</span>
                  <span>Artesanía y restauración como promesa de valor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR PATRIMONIAL */}
      <section className="py-16 md:py-24 bg-[#f7f1e8]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
              Valor patrimonial de la marca
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-[#321f14]">
              Cómo Vélez convierte la artesanía en patrimonio de marca
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              El corazón de Vélez está en el taller: procesos manuales, cuero
              auténtico y una promesa de longevidad que convierte cada pieza en
              un objeto que acompaña a varias generaciones.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
            {/* Artesanía auténtica */}
            <article className="bg-[#fcf7ef] rounded-2xl border border-[#d9a15c]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#321f14] mb-3">
                Artesanía auténtica en cuero
              </h3>
              <p className="text-sm md:text-[15px] text-slate-800 leading-relaxed">
                Cada pieza Vélez evidencia mano de obra experta, costuras
                visibles y terminados que celebran la textura natural del cuero.
                La marca se ha posicionado como defensora del trabajo artesanal
                frente a la producción masiva.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e3d2bd]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#8b5a2c]">
                  Valor generado
                </p>
                <p className="text-sm text-slate-900">
                  Capacidad de cobrar un premium significativo por autenticidad
                  y transparencia en el origen del producto.
                </p>
              </div>
            </article>

            {/* Sostenibilidad y longevidad */}
            <article className="bg-[#fcf7ef] rounded-2xl border border-[#d9a15c]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#321f14] mb-3">
                Longevidad como propuesta de valor
              </h3>
              <p className="text-sm md:text-[15px] text-slate-800 leading-relaxed">
                Los productos Vélez están diseñados para durar décadas y ser
                reparados. Esta lógica de “comprar una vez y conservar” se
                alinea con los principios de economía circular y refuerza la
                reputación de calidad.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e3d2bd]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#8b5a2c]">
                  Impacto
                </p>
                <p className="text-sm text-slate-900">
                  Conexión especial con consumidores conscientes que buscan
                  reducir rotación de guardarropa y huella ambiental.
                </p>
              </div>
            </article>

            {/* Identidad territorial */}
            <article className="bg-[#fcf7ef] rounded-2xl border border-[#d9a15c]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#321f14] mb-3">
                Identidad territorial colombiana
              </h3>
              <p className="text-sm md:text-[15px] text-slate-800 leading-relaxed">
                Vélez se posiciona como embajadora del cuero colombiano:
                aprovecha narrativas de origen, oficios locales y saberes
                tradicionales para construir un imaginario de marca anclado al
                territorio.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e3d2bd]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#8b5a2c]">
                  Oportunidad
                </p>
                <p className="text-sm text-slate-900">
                  Proyectar a Vélez como “Colombian leather brand” en vitrinas
                  internacionales sin perder la raíz artesanal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MARCA VS ACTIVOS TANGIBLES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-[#3b2617] mb-4">
            Marca vs. activos tangibles
          </h2>
          <p className="text-center text-sm md:text-base text-slate-600 mb-12">
            En Vélez, los talleres y el cuero son importantes, pero el diferencial
            reside en la promesa de autenticidad y reparación permanente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12">
            {/* Tangibles */}
            <article className="bg-[#f8f3ea] rounded-2xl border border-[#d9a15c]/70 p-7 md:p-8">
              <h3 className="text-xl font-semibold text-[#3b2617] mb-5">
                Activos tangibles
              </h3>
              <ul className="space-y-3 mb-8 text-sm md:text-[15px] text-slate-900">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b5a2c]" />
                  <span>
                    <strong>Cuero seleccionado:</strong> materia prima de alta
                    calidad con procesos propios de curtido.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b5a2c]" />
                  <span>
                    <strong>Talleres y plantas:</strong> infraestructura para
                    fabricación, restauración y personalización.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b5a2c]" />
                  <span>
                    <strong>Red de tiendas:</strong> boutiques y puntos de venta
                    propios en Colombia y la región.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8b5a2c]" />
                  <span>
                    <strong>Capital humano:</strong> maestros silleros y
                    restauradores especializados.
                  </span>
                </li>
              </ul>
              <div className="bg-[#e4cfb5] rounded-xl border border-[#8b5a2c] p-6">
                <p className="text-xs text-[#3b2617] mb-1">
                  Valor estimado (tangibles)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  USD $30–60M
                </p>
                <p className="text-[11px] text-[#3b2617] mt-2">
                  Estructura productiva y de retail robusta, pero inferior al
                  peso del intangible marcario.
                </p>
              </div>
            </article>

            {/* Intangibles */}
            <article className="bg-[#fcf7ef] rounded-2xl border border-[#d9a15c]/80 p-7 md:p-8">
              <h3 className="text-xl font-semibold text-[#3b2617] mb-5">
                Activos intangibles (marca)
              </h3>
              <ul className="space-y-3 mb-8 text-sm md:text-[15px] text-slate-900">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                  <span>
                    <strong>Autenticidad:</strong> posicionamiento claro en
                    100&nbsp;% cuero y rechazo explícito a materiales sintéticos.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                  <span>
                    <strong>Legado artesanal:</strong> años de construcción de
                    confianza alrededor del oficio del cuero.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                  <span>
                    <strong>Territorio de marca:</strong> “cuero colombiano”
                    como concepto distintivo frente a competidores italianos o
                    franceses.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                  <span>
                    <strong>Sostenibilidad:</strong> reparación, restauración y
                    segunda vida como parte del modelo de negocio.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d9a15c]" />
                  <span>
                    <strong>Diferenciación:</strong> narrativa anti fast fashion
                    en un mercado saturado de productos desechables.
                  </span>
                </li>
              </ul>
              <div className="bg-gradient-to-br from-[#efd2a0] to-[#d9a15c] rounded-xl border border-[#a26d33] p-6">
                <p className="text-xs text-[#3b2617] mb-1">
                  Valor estimado (marca)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  USD $100–180M+
                </p>
                <p className="text-[11px] text-[#3b2617] mt-2">
                  Motor principal de preferencia, margen y crecimiento a futuro.
                </p>
              </div>
            </article>
          </div>

          {/* Comparación visual */}
          <div className="bg-gradient-to-r from-[#4a3321] via-[#6b4a2a] to-[#8b5a2c] text-white rounded-3xl p-10 md:p-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 text-center">
              Distribución aproximada del valor total
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-[#f5e7d4] mb-2">
                  25–35%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Activos tangibles
                </p>
                <p className="text-[11px] text-[#f5e3c1] mt-2">
                  Talleres, cuero, puntos de venta.
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-yellow-100 mb-2">
                  65–75%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Marca e intangibles
                </p>
                <p className="text-[11px] text-[#fef3d5] mt-2">
                  Herencia artesanal, autenticidad y relato de sostenibilidad.
                </p>
              </div>
            </div>
            <p className="text-center text-[12px] md:text-sm text-[#fef3d5] mt-4">
              Vélez concentra la mayor parte de su valor en su rol como
              patrimonio artesanal colombiano y en su promesa de durabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* VALOR DE INNOVACIÓN */}
      <section className="py-16 md:py-24 bg-[#f7f1e8]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#3b2617]">
            Valor de innovación
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-12 max-w-2xl">
            Vélez ha convertido la restauración, la personalización y la
            economía circular en pilares de innovación, alineando el oficio del
            cuero con las nuevas expectativas de sostenibilidad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
            {/* Innovaciones confirmadas */}
            <article className="bg-gradient-to-br from-[#fdf8ef] to-[#e4f0e4] rounded-2xl border border-[#d9a15c]/70 p-7 md:p-8">
              <h3 className="text-xl font-serif font-semibold text-[#3b2617] mb-5">
                Innovaciones en economía circular
              </h3>
              <ul className="space-y-4 text-sm md:text-[15px] text-slate-900">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b7c4c]" />
                  <div>
                    <strong>Programa de restauración:</strong> miles de piezas
                    recuperadas y devueltas a circulación, prolongando su vida
                    útil y evitando residuos.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b7c4c]" />
                  <div>
                    <strong>Artesanos multidisciplinarios:</strong> equipos que
                    integran diseño, arte y oficio para intervenir productos con
                    alto nivel estético.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b7c4c]" />
                  <div>
                    <strong>Personalización y marcación:</strong> servicios de
                    grabado, pigmentación y ajuste que fortalecen el vínculo
                    emocional con cada pieza.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b7c4c]" />
                  <div>
                    <strong>Sostenibilidad como eje de comunicación:</strong>{" "}
                    la reparación y el uso prolongado pasan de ser servicios
                    tácticos a promesa central de marca.
                  </div>
                </li>
              </ul>
            </article>

            {/* Impacto numérico */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-slate-700 mb-1">
                  Productos restaurados (últimos años)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#8b5a2c]">
                  6.700+
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Cada restauración refuerza el relato de circularidad de la
                  marca.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-slate-700 mb-1">
                  Boutiques con servicios de personalización
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#8b5a2c]">
                  17 / 248
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Red en expansión que convierte tiendas en talleres abiertos.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-slate-700 mb-1">
                  Consumidores para quienes la sostenibilidad es clave
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#8b5a2c]">
                  &gt; 60%
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Segmento donde Vélez tiene ventaja frente a marcas
                  convencionales.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-slate-700 mb-1">
                  Inversión estimada en innovación circular
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#8b5a2c]">
                  4–6% de ingresos
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Focalizada en restauración, capacitación y servicios de
                  personalización.
                </p>
              </div>
            </div>
          </div>

          {/* Síntesis innovación */}
          <div className="bg-gradient-to-r from-[#4a3321] via-[#6b4a2a] to-[#8b5a2c] text-white rounded-3xl p-10 md:p-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 text-center">
              Síntesis: artesanía + innovación circular = valor total
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-[#f5e7d4] mb-2">
                  USD $100–180M
                </p>
                <p className="text-sm md:text-base font-medium">
                  Valor patrimonial artesanal
                </p>
                <p className="text-[11px] text-[#fef3d5] mt-2">
                  Basado en autenticidad, herencia y territorio.
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-green-300 mb-2">
                  +35–50%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Crecimiento atribuible a innovación circular
                </p>
                <p className="text-[11px] text-[#fef3d5] mt-2">
                  Programas de restauración y personalización.
                </p>
              </div>
              <div className="text-center border-t border-[#f5e7d4]/40 pt-4">
                <p className="text-3xl md:text-4xl font-semibold text-white mb-2">
                  USD $160–290M+
                </p>
                <p className="text-sm md:text-base font-medium">
                  Valor empresarial potencial
                </p>
                <p className="text-[11px] text-[#fef3d5] mt-2">
                  Suma de patrimonio marcario y diferenciación sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-[#3b2617]">
            Posicionamiento en el mercado
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
            {/* Matriz de posicionamiento */}
            <article className="bg-[#f8f3ea] rounded-2xl border border-[#d9a15c]/70 p-7 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-[#3b2617] mb-5">
                Mapa de posicionamiento
              </h3>
              <div
                className="bg-gradient-to-br from-[#fcf7ef] to-[#f3e2c6] rounded-xl p-8 relative"
                style={{ height: "280px" }}
              >
                <span className="absolute left-3 top-3 text-[11px] text-slate-700">
                  Materiales sintéticos
                </span>
                <span className="absolute right-3 top-3 text-[11px] text-slate-700">
                  100&nbsp;% cuero auténtico
                </span>
                <span className="absolute left-3 bottom-3 text-[11px] text-slate-700">
                  Moda rápida
                </span>
                <span className="absolute right-3 bottom-3 text-[11px] text-slate-700">
                  Artesanal / reparable
                </span>

                {/* Punto Vélez */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#6b4a2a] to-[#8b5a2c] border-4 border-[#f5e7d4] flex items-center justify-center shadow-[0_20px_60px_rgba(82,45,22,0.8)]">
                  <span className="text-[13px] font-serif font-semibold tracking-[0.18em] text-[#fdf5e4]">
                    V
                  </span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-800 mt-4">
                <strong>Posición:</strong> marroquinería premium artesanal, 100&nbsp;% cuero, con
                propuesta explícita de reparación y segunda vida.
              </p>
            </article>

            {/* Indicadores clave */}
            <div className="space-y-4">
              <div className="bg-[#fdf5e6] rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-[#8b5a2c] mb-1">Participación estimada</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  10–15&nbsp;%
                </p>
                <p className="text-[11px] text-slate-700 mt-2">
                  Segmento de marroquinería premium en Colombia.
                </p>
              </div>

              <div className="bg-[#fdf5e6] rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-[#8b5a2c] mb-1">Precio promedio</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  USD $80–200
                </p>
                <p className="text-[11px] text-slate-700 mt-2">
                  Premium apalancado en material, oficio y servicio de
                  restauración.
                </p>
              </div>

              <div className="bg-[#fdf5e6] rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-[#8b5a2c] mb-1">Durabilidad promedio</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  20–30 años
                </p>
                <p className="text-[11px] text-slate-700 mt-2">
                  Productos concebidos para reparación y herencia entre
                  generaciones.
                </p>
              </div>

              <div className="bg-[#fdf5e6] rounded-xl border-l-4 border-[#8b5a2c] p-6">
                <p className="text-xs text-[#8b5a2c] mb-1">Presencia geográfica</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#3b2617]">
                  Fuerte en Latam · expansión selectiva
                </p>
                <p className="text-[11px] text-slate-700 mt-2">
                  Crecimiento en mercados internacionales a partir del relato de
                  sostenibilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Fortalezas y retos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-[#ecfdf3] rounded-2xl border-l-4 border-emerald-600 p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-900 mb-4">
                Fortalezas
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-slate-800">
                <li>Posicionamiento claro en autenticidad y 100&nbsp;% cuero.</li>
                <li>
                  Alineación natural con tendencias globales de sostenibilidad y
                  circularidad.
                </li>
                <li>
                  Alta lealtad entre clientes que valoran durabilidad y reparación.
                </li>
                <li>Capacidad de contar historias poderosas desde el taller.</li>
                <li>
                  Portafolio heredable que funciona como “publicidad” de largo
                  plazo.
                </li>
                <li>Potencial de expansión global como marca de cuero colombiano.</li>
              </ul>
            </article>

            <article className="bg-[#fff7ed] rounded-2xl border-l-4 border-orange-600 p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-orange-900 mb-4">
                Retos
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-slate-800">
                <li>
                  Tamaño limitado del segmento de consumidores realmente
                  conscientes.
                </li>
                <li>Competencia con marcas italianas y francesas de mayor fama.</li>
                <li>
                  Escalabilidad restringida por la naturaleza artesanal de la
                  producción.
                </li>
                <li>
                  Necesidad de robustecer e-commerce y experiencia digital a la
                  altura del relato de marca.
                </li>
                <li>
                  Equilibrio entre innovación en diseño y preservación del ADN
                  clásico de cuero.
                </li>
                <li>
                  Diversificación de categorías y mercados sin diluir
                  posicionamiento.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#3b2617] via-[#4a3321] to-[#6b4a2a] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            Conclusión: Vélez como patrimonio artesanal
          </h2>
          <div className="max-w-3xl space-y-5 text-sm md:text-base leading-relaxed text-[#fdf5e4]">
            <p>
              Vélez demuestra que la artesanía puede convertirse en un activo
              estratégico de marca. Al combinar cuero auténtico, procesos
              reparables y un discurso coherente de sostenibilidad, la compañía
              ha construido un valor intangible que supera con creces sus activos
              físicos.
            </p>
            <p>
              A diferencia de un lujo aspiracional centrado en el estatus, Vélez
              compite desde la honestidad material y la durabilidad. Cada pieza
              que se restaura y continúa circulando se convierte en una vitrina
              móvil de la marca y refuerza su narrativa de respeto por el
              producto y por el oficio.
            </p>
            <p>
              El desafío hacia adelante está en escalar este modelo sin perder
              autenticidad: fortalecer la presencia digital, posicionarse como
              referente de cuero colombiano en mercados internacionales y seguir
              innovando en economía circular sin sacrificar el carácter cálido y
              humano del taller que define a Vélez.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

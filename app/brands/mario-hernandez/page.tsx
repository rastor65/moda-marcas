export const metadata = {
  title: "Mario Hernández - Análisis de Marca | Auditoría Marcaria",
  description:
    "Análisis detallado de la marca Mario Hernández: lujo, marroquinería y posicionamiento premium.",
}

export default function MarioHernandezPage() {
  return (
    <div className="pt-16 bg-white text-slate-900">
      {/* HERO · IDENTIDAD DE LUJO */}
      <section className="pt-24 md:pt-28 bg-gradient-to-br from-[#020817] via-[#061a2b] to-[#0a1724] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-12">
            {/* Texto principal */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                Marroquinería · Lujo colombiano
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight">
                  Mario Hernández
                </h1>
                <p className="text-xl md:text-2xl font-serif italic text-[#f5e6c8]">
                  Artesanía en cuero, lujo y herencia colombiana
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-[#d4af37] text-[#111827] tracking-[0.18em] uppercase">
                  Lujo
                </span>
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-[#f5e6d3] text-[#1f2933] tracking-[0.18em] uppercase">
                  Marroquinería
                </span>
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-white/5 border border-white/30 text-white tracking-[0.18em] uppercase">
                  Premium
                </span>
              </div>

              <p className="text-sm md:text-base text-white/85 max-w-xl leading-relaxed">
                Mario Hernández se ha consolidado como la referencia de lujo en
                marroquinería colombiana. La marca combina diseño clásico,
                manufactura artesanal y una narrativa de exclusividad que la
                posiciona en la cúspide del segmento premium en la región.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-white/80">
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Segmento
                  </p>
                  <p className="font-medium">Lujo en marroquinería</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Posicionamiento
                  </p>
                  <p className="font-medium">Herencia · Artesanía · Estatus</p>
                </div>
                <div className="space-y-0.5">
                  <p className="uppercase tracking-[0.18em] text-white/60">
                    Territorio
                  </p>
                  <p className="font-medium">Colombia con proyección global</p>
                </div>
              </div>
            </div>

            {/* Visual de marca */}
            <div className="flex-1 w-full">
              <div className="relative h-72 md:h-80 w-full max-w-md md:max-w-none mx-auto rounded-3xl overflow-hidden bg-[#020817] border border-white/18 shadow-[0_26px_90px_rgba(0,0,0,0.8)]">
                {/* velos dorados */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22)_0,_transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.8)_0,_transparent_60%)]" />

                <img
                  src="/mario-hernandez-luxury-leather-goods-marroquineria.jpg"
                  alt="Universo de lujo de la marca Mario Hernández"
                  className="relative h-full w-full object-cover"
                />

                {/* Cinta superior */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-white tracking-[0.18em] uppercase">
                  <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-[#d4af37] via-white to-[#d4af37]" />
                  Mario Hernández
                </div>

                {/* Leyendas inferiores */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] text-white/85">
                  <span>Marroquinería de lujo · Hecho en Colombia</span>
                  <span>Unicornio dorado · Símbolo de fantasía y estatus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR PATRIMONIAL */}
      <section className="py-16 md:py-24 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <header className="mb-10 md:mb-14 space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
              Valor patrimonial de la marca
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-[#122032]">
              Cómo Mario Hernández construye patrimonio de lujo
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl">
              La marca se erige sobre décadas de artesanía en cuero, una
              narrativa de éxito empresarial y un símbolo icónico —el unicornio
              dorado— que encapsula fantasía, exclusividad y aspiración.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
            {/* Herencia de lujo */}
            <article className="bg-[#fbf7ef] rounded-2xl border border-[#d4af37]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#122032] mb-3">
                Herencia y tradición de lujo
              </h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                El nombre Mario Hernández se asocia de inmediato con
                marroquinería de alta gama. A lo largo de los años ha
                construido un capital simbólico que combina origen colombiano,
                dominio del oficio y una estética reconocible.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e2d7c4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#b0892e]">
                  Valor generado
                </p>
                <p className="text-sm text-slate-800">
                  Capacidad de fijar precios 3–5 veces por encima de la
                  marroquinería convencional gracias al peso del apellido.
                </p>
              </div>
            </article>

            {/* Símbolo de distinción */}
            <article className="bg-[#fbf7ef] rounded-2xl border border-[#d4af37]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#122032] mb-3">
                Símbolo de distinción y estatus
              </h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                Poseer un producto Mario Hernández funciona como marca de
                estatus. Es un signo visible de pertenencia a una élite
                económica y cultural que valora la calidad y la exclusividad por
                encima de la utilidad funcional.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e2d7c4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#b0892e]">
                  Impacto
                </p>
                <p className="text-sm text-slate-800">
                  La demanda se impulsa por aspiración y prestigio, no solo por
                  necesidad de uso; cada pieza es tratada como objeto de
                  inversión.
                </p>
              </div>
            </article>

            {/* Poder de extensión */}
            <article className="bg-[#fbf7ef] rounded-2xl border border-[#d4af37]/60 p-6 md:p-7 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#122032] mb-3">
                Poder de extensión de marca
              </h3>
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                La elasticidad de la marca permite proyectarla hacia categorías
                adyacentes de lujo: accesorios, perfumería, joyería y
                experiencias exclusivas, sin perder coherencia con su ADN
                marroquinero.
              </p>
              <div className="mt-5 pt-4 border-t border-[#e2d7c4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-1 text-[#b0892e]">
                  Oportunidad
                </p>
                <p className="text-sm text-slate-800">
                  Construir un universo lifestyle de lujo colombiano anclado en
                  el unicornio dorado como eje simbólico.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MARCA VS ACTIVOS TANGIBLES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-[#122032] mb-4">
            Marca vs. activos tangibles
          </h2>
          <p className="text-center text-sm md:text-base text-slate-600 mb-12">
            En el segmento de lujo, el valor reside principalmente en el
            intangible marcario: nombre, reputación y herencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12">
            {/* Tangibles */}
            <article className="bg-[#f4f4f4] rounded-2xl border border-slate-300 p-7 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-5">
                Activos tangibles
              </h3>
              <ul className="space-y-3 mb-8 text-sm md:text-[15px] text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>
                    <strong>Cuero de alta gama:</strong> inventario de pieles
                    seleccionadas y materiales nobles.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>
                    <strong>Boutiques insignia:</strong> tiendas con diseño
                    interior alineado al universo de lujo.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>
                    <strong>Taller artesanal:</strong> infraestructura y
                    equipamiento para producción especializada.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>
                    <strong>Mano de obra calificada:</strong> maestros
                    artesanos con conocimiento técnico único.
                  </span>
                </li>
              </ul>
              <div className="bg-[#e1e1e1] rounded-xl border border-slate-500 p-6">
                <p className="text-xs text-slate-700 mb-1">
                  Valor estimado (tangibles)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-slate-900">
                  USD $20–40M
                </p>
                <p className="text-[11px] text-slate-700 mt-2">
                  Estructura costosa de mantener, pero limitada frente al peso
                  de la marca.
                </p>
              </div>
            </article>

            {/* Intangibles */}
            <article className="bg-[#fdf8ec] rounded-2xl border border-[#d4af37]/70 p-7 md:p-8">
              <h3 className="text-xl font-semibold text-[#122032] mb-5">
                Activos intangibles (marca)
              </h3>
              <ul className="space-y-3 mb-8 text-sm md:text-[15px] text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  <span>
                    <strong>Reputación:</strong> referente máximo del lujo
                    marroquinero colombiano.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  <span>
                    <strong>Maestría artesanal:</strong> asociación directa con
                    calidad y durabilidad excepcionales.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  <span>
                    <strong>Prestigio social:</strong> símbolo de éxito y buen
                    gusto en segmentos de alto poder adquisitivo.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  <span>
                    <strong>Herencia de marca:</strong> trayectoria, relatos y
                    personajes que sostienen el mito de lujo.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  <span>
                    <strong>Reconocimiento internacional:</strong> presencia en
                    vitrinas globales de lujo.
                  </span>
                </li>
              </ul>
              <div className="bg-gradient-to-br from-[#f4e1a6] to-[#d4af37] rounded-xl border border-[#b48b24] p-6">
                <p className="text-xs text-slate-900 mb-1">
                  Valor estimado (marca)
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  USD $300–500M+
                </p>
                <p className="text-[11px] text-slate-900 mt-2">
                  Principal generador de flujo de caja futuro y barrera de
                  entrada frente a competidores.
                </p>
              </div>
            </article>
          </div>

          {/* Comparación visual */}
          <div className="bg-gradient-to-r from-[#081420] via-[#061a2b] to-[#081420] text-white rounded-3xl p-10 md:p-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 text-center">
              Distribución aproximada del valor total
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-slate-200 mb-2">
                  8–12%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Activos tangibles
                </p>
                <p className="text-[11px] text-slate-300 mt-2">
                  Taller, cuero, infraestructura física.
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-[#f5e6c8] mb-2">
                  88–92%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Marca e intangibles
                </p>
                <p className="text-[11px] text-slate-200 mt-2">
                  Reputación, herencia, prestigio y simbología de lujo.
                </p>
              </div>
            </div>
            <p className="text-center text-[12px] md:text-sm text-slate-200 mt-4">
              En el universo de lujo, Mario Hernández es esencialmente marca: el
              valor real está concentrado en la percepción de excelencia y en el
              poder del nombre.
            </p>
          </div>
        </div>
      </section>

      {/* VALOR DE INNOVACIÓN */}
      <section className="py-16 md:py-24 bg-[#edf1f8]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-[#122032]">
            Valor de innovación
          </h2>
          <p className="text-sm md:text-base text-slate-700 mb-12 max-w-2xl">
            La marca complementa su herencia artesanal con procesos de
            digitalización, diseño 3D y una filosofía de reinvención constante
            que la mantiene vigente frente al lujo global.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
            {/* Innovaciones */}
            <article className="bg-gradient-to-br from-[#fdf8ec] to-[#e5edf8] rounded-2xl border border-[#d4af37]/70 p-7 md:p-8">
              <h3 className="text-xl font-serif font-semibold text-[#122032] mb-5">
                Innovaciones clave
              </h3>
              <ul className="space-y-4 text-sm md:text-[15px] text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#122032]" />
                  <div>
                    <strong>Digitalización de procesos:</strong>{" "}
                    integración de diseño, patronaje y producción en entornos
                    digitales, reduciendo tiempos y errores en la cadena de
                    valor.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#122032]" />
                  <div>
                    <strong>Diseño 3D y prototipado virtual:</strong> permite
                    visualizar colecciones antes de producir, optimizando uso de
                    materiales y tiempos de lanzamiento.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#122032]" />
                  <div>
                    <strong>Reinvención del unicornio dorado:</strong>{" "}
                    actualización del símbolo icónico para enfatizar
                    modernidad, dinamismo y mirada hacia el futuro.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#122032]" />
                  <div>
                    <strong>Filosofía de renovación permanente:</strong>{" "}
                    ajustes constantes en diseño, comunicación y experiencia en
                    tienda para sostener la relevancia en el segmento de lujo.
                  </div>
                </li>
              </ul>
            </article>

            {/* Impacto numérico */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Eficiencia en desarrollo de producto
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  +45%
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Reducción de tiempos frente a procesos 100% artesanales.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Frecuencia de nuevas colecciones
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  8–12 lanzamientos/año
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Mantiene frescura creativa sin saturar el portafolio.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Satisfacción y recompra
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  &gt; 95%
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Altos niveles de lealtad entre clientes de alto poder
                  adquisitivo.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Inversión en diseño e I+D
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  6–8% de ingresos
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Reforzando la diferenciación frente a competidores globales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#081420] to-[#121d33] text-white rounded-3xl p-10 md:pp-12 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-8 text-center">
              Síntesis: herencia + innovación = valor total
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-[#f5e6c8] mb-2">
                  USD $300–500M
                </p>
                <p className="text-sm md:text-base font-medium">
                  Valor patrimonial de marca
                </p>
                <p className="text-[11px] text-slate-200 mt-2">
                  Basado en reputación, herencia y posicionamiento en lujo.
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-semibold text-green-300 mb-2">
                  +30–45%
                </p>
                <p className="text-sm md:text-base font-medium">
                  Crecimiento apalancado en innovación
                </p>
                <p className="text-[11px] text-slate-200 mt-2">
                  Digitalización, diseño 3D y nuevas colecciones.
                </p>
              </div>
              <div className="text-center border-t border-slate-600 pt-4">
                <p className="text-3xl md:text-4xl font-semibold text-white mb-2">
                  USD $420–700M+
                </p>
                <p className="text-sm md:text-base font-medium">
                  Valor empresarial potencial
                </p>
                <p className="text-[11px] text-slate-200 mt-2">
                  Resultante de combinar patrimonio marcario e innovación
                  constante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="py-16 md:py-24 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-[#122032]">
            Posicionamiento en el mercado de lujo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
            {/* Matriz */}
            <article className="bg-white rounded-2xl border border-[#c7d2e5] p-7 md:p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold text-[#122032] mb-5">
                Mapa de posicionamiento en lujo
              </h3>
              <div
                className="bg-gradient-to-br from-[#eef2ff] to-[#e0ebff] rounded-xl p-8 relative"
                style={{ height: "280px" }}
              >
                <span className="absolute left-3 top-3 text-[11px] text-slate-600">
                  Segmento premium
                </span>
                <span className="absolute right-3 top-3 text-[11px] text-slate-600">
                  Ultra lujo
                </span>
                <span className="absolute left-3 bottom-3 text-[11px] text-slate-600">
                  Estética contemporánea
                </span>
                <span className="absolute right-3 bottom-3 text-[11px] text-slate-600">
                  Clásico atemporal
                </span>

                {/* Punto de la marca */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#0f172a] to-[#111827] border-4 border-[#d4af37] flex items-center justify-center shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
                  <span className="text-[13px] font-serif font-semibold tracking-[0.18em] text-[#f5e6c8]">
                    MH
                  </span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-slate-700 mt-4">
                <strong>Posición:</strong> lujo clásico colombiano, con
                orientación hacia el ultra lujo y fuerte énfasis en la
                artesanía atemporal.
              </p>
            </article>

            {/* Indicadores */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Precio promedio por pieza
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  USD $300–1.200+
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Valores claramente por encima de la marroquinería premium
                  estándar.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Recordación en segmento de lujo
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  &gt; 90%
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Especialmente entre consumidores de alto poder adquisitivo en
                  Colombia.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">
                  Margen bruto estimado
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  60–75%
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Coherente con el segmento de lujo basado en marca fuerte.
                </p>
              </div>

              <div className="bg-white rounded-xl border-l-4 border-[#122032] p-6">
                <p className="text-xs text-slate-600 mb-1">Presencia geográfica</p>
                <p className="text-2xl md:text-3xl font-semibold text-[#122032]">
                  Regional y global selectiva
                </p>
                <p className="text-[11px] text-slate-600 mt-2">
                  Boutiques propias y presencia en puntos clave de lujo.
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
                <li>Posicionamiento de lujo claro y consolidado.</li>
                <li>Asociación directa con artesanía de alta calidad.</li>
                <li>Capacidad de fijación de precios muy por encima del mercado.</li>
                <li>Alto nivel de lealtad entre clientes de alto ingreso.</li>
                <li>Reconocimiento internacional como marca de referencia.</li>
                <li>Productos percibidos como inversión de largo plazo.</li>
              </ul>
            </article>

            <article className="bg-[#fff7ed] rounded-2xl border-l-4 border-orange-600 p-7 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-orange-900 mb-4">
                Retos
              </h3>
              <ul className="space-y-2 text-sm md:text-[15px] text-slate-800">
                <li>Mercado objetivo reducido a segmentos de muy alto ingreso.</li>
                <li>Competencia con conglomerados globales de lujo.</li>
                <li>Capacidad productiva limitada por la naturaleza artesanal.</li>
                <li>Necesidad de diversificar riesgo geográfico.</li>
                <li>Equilibrio entre exclusividad y expansión internacional.</li>
                <li>Gestión de sucesión y continuidad del legado de marca.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#050814] via-[#07192b] to-[#050814] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
            Conclusión: Mario Hernández como activo de lujo
          </h2>
          <div className="max-w-3xl space-y-5 text-sm md:text-base leading-relaxed text-slate-100">
            <p>
              Mario Hernández ejemplifica un modelo en el que la marca concentra
              casi la totalidad del valor empresarial. El prestigio acumulado, la
              consistencia en la propuesta de lujo y la artesanía en cuero hacen
              que el capital intangible supere ampliamente el valor de los
              activos físicos.
            </p>
            <p>
              Su posición en el mercado es difícil de replicar: combina origen
              colombiano, narrativa de superación, símbolo icónico y una base de
              clientes dispuesta a pagar un sobreprecio significativo por
              pertenecer a ese universo de marca. Cada producto es simultáneamente
              objeto de uso, pieza de colección y declaración de estatus.
            </p>
            <p>
              De cara al futuro, el reto estratégico consiste en ampliar el
              universo de lujo (nuevas categorías y mercados) sin diluir la
              exclusividad, reforzando al mismo tiempo los procesos de
              innovación, sucesión y gobierno corporativo que permitan preservar
              el legado del unicornio dorado en el largo plazo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

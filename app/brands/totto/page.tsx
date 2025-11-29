export const metadata = {
  title: "Totto - Análisis de Marca | Auditoría Marcaria",
  description: "Análisis detallado de la marca Totto: valor patrimonial, posicionamiento y competitividad",
}

export default function TottoPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-16" style={{ backgroundColor: "#ffffff", borderBottom: "4px solid #f6303e" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#000000" }}>
                TOTTO
              </h1>
              <p className="text-2xl mb-6 font-bold" style={{ color: "#f6303e" }}>
                Funcionalidad y Confianza Urbana
              </p>
              <div className="flex gap-2 mb-8 flex-wrap">
                <span
                  className="inline-block px-3 py-1 text-white text-sm rounded font-bold"
                  style={{ backgroundColor: "#f6303e" }}
                >
                  Mochilas
                </span>
                <span
                  className="inline-block px-3 py-1 text-black text-sm rounded font-bold"
                  style={{ backgroundColor: "#fcce01" }}
                >
                  Maletas
                </span>
                <span
                  className="inline-block px-3 py-1 text-white text-sm rounded font-bold"
                  style={{ backgroundColor: "#000000" }}
                >
                  Funcional
                </span>
              </div>
              <p className="leading-relaxed text-lg" style={{ color: "#333333" }}>
                Marca colombiana líder en mochilas, maletas y accesorios funcionales. TOTTO es sinónimo de durabilidad,
                diseño y soluciones prácticas para estudiantes y profesionales urbanos.
              </p>
            </div>
            <div
              className="flex-1 h-80 rounded-lg flex items-center justify-center border-4 shadow-lg"
              style={{ backgroundColor: "#fcce01", borderColor: "#f6303e" }}
            >
              <img
                src="/totto-backpacks-durable-functional-bags-for-studen.jpg"
                alt="TOTTO brand backpacks"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valor Patrimonial */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Valor Patrimonial de TOTTO</h2>
          <p className="text-lg text-gray-700 mb-12">Construcción de marca en categoría de funcionalidad</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Identidad */}
            <div className="bg-white p-8 rounded-lg border-2 border-red-400 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Confiabilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                TOTTO representa durabilidad y confianza. Padres y estudiantes compran TOTTO porque saben que durará
                años. La marca es sinónimo de "mochilas que resisten".
              </p>
              <div className="mt-6 pt-6 border-t border-red-300">
                <p className="text-sm font-semibold text-red-600 mb-2">Valor Generado:</p>
                <p className="text-gray-700">Generaciones de clientes leales: niños → adultos → padres.</p>
              </div>
            </div>

            {/* Lealtad Generacional */}
            <div className="bg-white p-8 rounded-lg border-2 border-red-400 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lealtad Transgeneracional</h3>
              <p className="text-gray-700 leading-relaxed">
                TOTTO ha creado una lealtad única: padres que usaban TOTTO de estudiantes ahora compran para sus hijos.
                Ciclo de compra predecible y de alto valor del cliente.
              </p>
              <div className="mt-6 pt-6 border-t border-red-300">
                <p className="text-sm font-semibold text-red-600 mb-2">Impacto:</p>
                <p className="text-gray-700">Lifetime value de cliente 3-4x superior a competencia.</p>
              </div>
            </div>

            {/* Extensión */}
            <div className="bg-white p-8 rounded-lg border-2 border-red-400 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Poder de Extensión</h3>
              <p className="text-gray-700 leading-relaxed">
                Confianza en TOTTO para mochilas permite expansión a maletas, accesorios tech, viaje. Consumidor acepta
                marca en nuevas categorías.
              </p>
              <div className="mt-6 pt-6 border-t border-red-300">
                <p className="text-sm font-semibold text-red-600 mb-2">Oportunidad:</p>
                <p className="text-gray-700">Expansión a travel gear premium, mochilas profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valor de Innovación */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Valor de Innovación</h2>
          <p className="text-lg text-gray-600 mb-12">
            Cómo TOTTO genera valor a través de innovación en diseño, funcionalidad y manufacturero
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Innovaciones */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-lg border-2 border-red-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovaciones Clave</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">🎒</span>
                  <div>
                    <strong className="text-gray-900">Diseño Ergonómico (Patentado)</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Sistemas de distribución de peso, soportes lumbares, correas ergonómicas que reducen fatiga en
                      estudiantes
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🧬</span>
                  <div>
                    <strong className="text-gray-900">Materiales Innovadores</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Desarrollo de textiles resistentes al agua, bolsillos inteligentes, compartimentos anti-shock para
                      tecnología
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🔬</span>
                  <div>
                    <strong className="text-gray-900">Manufactura Avanzada</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Costuras reforzadas de múltiples capas, técnicas de cosido automático de precisión, control de
                      calidad 6-sigma
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <strong className="text-gray-900">Tech-Forward Designs</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Compartimentos para laptops, powerbanks integrados, puntos de carga, diseños para híbrido
                      presencial-remoto
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Impacto */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-gray-600 mb-1">Patentes y Propiedad Intelectual</p>
                <p className="text-3xl font-bold text-red-600">8-12</p>
                <p className="text-xs text-gray-500 mt-2">Patentes vigentes en diseño y durabilidad</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-gray-600 mb-1">Reducción Retornos por Defecto</p>
                <p className="text-3xl font-bold text-red-600">-85%</p>
                <p className="text-xs text-gray-500 mt-2">Vs industria estándar por control de calidad</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-gray-600 mb-1">Satisfacción del Cliente</p>
                <p className="text-3xl font-bold text-red-600">94%</p>
                <p className="text-xs text-gray-500 mt-2">Recomendación y recompra por durabilidad</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-gray-600 mb-1">Inversión Anual en I+D</p>
                <p className="text-3xl font-bold text-red-600">5-7% Ingresos</p>
                <p className="text-xs text-gray-500 mt-2">Destinada a innovación en diseño y durabilidad</p>
              </div>
            </div>
          </div>

          {/* Síntesis */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Síntesis: Patrimonio + Innovación en Durabilidad = Valor Total
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-200 mb-2">USD $200-300M</div>
                <p className="text-lg font-semibold">Valor Patrimonial</p>
                <p className="text-sm text-red-100 mt-2">Lealtad transgeneracional y confianza</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-200 mb-2">+20-28%</div>
                <p className="text-lg font-semibold">Crecimiento por Innovación</p>
                <p className="text-sm text-red-100 mt-2">Anual en categorías tech-forward</p>
              </div>
              <div className="text-center border-t border-red-700 pt-4">
                <div className="text-4xl font-bold text-white mb-2">USD $280-420M+</div>
                <p className="text-lg font-semibold">Valor Empresarial Total</p>
                <p className="text-sm text-red-100 mt-2">Patrimonio + innovador líder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marca vs Tangibles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Marca vs. Activos Tangibles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Tangibles */}
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Activos Tangibles</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-xl">📦</span>
                  <span>
                    <strong>Inventario:</strong> Mochilas, maletas en tienda y almacenes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🏬</span>
                  <span>
                    <strong>Locales:</strong> Tiendas físicas en centros comerciales
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🏭</span>
                  <span>
                    <strong>Manufactura:</strong> Fábricas, maquinaria confección
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🚛</span>
                  <span>
                    <strong>Logística:</strong> Distribución, almacenes regionales
                  </span>
                </li>
              </ul>
              <div className="bg-gray-200 p-6 rounded-lg border-2 border-gray-500">
                <p className="text-sm text-gray-700 mb-2">Valor estimado (Tangibles):</p>
                <p className="text-3xl font-bold text-gray-900">USD $80-120M</p>
                <p className="text-xs text-gray-600 mt-2">Activos manufactureros significativos</p>
              </div>
            </div>

            {/* Intangibles */}
            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Activos Intangibles (Marca)</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-xl">🏆</span>
                  <span>
                    <strong>Reputación:</strong> 50+ años en mercado, sinónimo de durabilidad
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                  <span>
                    <strong>Lealtad Multi-generacional:</strong> Abuelos → padres → hijos
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">💎</span>
                  <span>
                    <strong>Premium Pricing Power:</strong> 20-30% sobre competencia
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <span>
                    <strong>Top-of-Mind:</strong> Primera opción en categoría mochilas
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-xl">🌍</span>
                  <span>
                    <strong>Presencia Global:</strong> Latinoamérica, España, USA
                  </span>
                </li>
              </ul>
              <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500">
                <p className="text-sm text-gray-700 mb-2">Valor estimado (Marca):</p>
                <p className="text-3xl font-bold text-red-600">USD $200-300M+</p>
                <p className="text-xs text-gray-700 mt-2">Generador principal de margen y diferenciación</p>
              </div>
            </div>
          </div>

          {/* Comparación */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">Distribución de Valor Total</h3>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-200 mb-2">25-30%</div>
                <p className="text-lg font-semibold">Tangibles</p>
                <p className="text-sm text-red-100 mt-2">Fábricas, almacenes, equipos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-100 mb-2">70-75%</div>
                <p className="text-lg font-semibold">Marca (Intangibles)</p>
                <p className="text-sm text-red-100 mt-2">Confianza y posicionamiento</p>
              </div>
            </div>
            <p className="text-center text-red-50">
              La marca TOTTO vale 2.5-3x más que sus activos manufactureros. Generaciones de confianza comprimidas en
              identidad de marca.
            </p>
          </div>
        </div>
      </section>

      {/* Posicionamiento */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Posicionamiento en el Mercado</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Matriz */}
            <div className="bg-white p-8 rounded-lg border-2 border-red-400">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Matriz Posicionamiento</h3>
              <div className="bg-gray-100 p-8 rounded-lg relative" style={{ height: "300px" }}>
                <div className="absolute inset-0 text-xs text-gray-500">
                  <span className="absolute left-2 top-2">Económico</span>
                  <span className="absolute right-2 top-2">Premium</span>
                  <span className="absolute left-2 bottom-2">Moda</span>
                  <span className="absolute right-2 bottom-2">Función</span>
                </div>
                {/* TOTTO */}
                <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-yellow-400 shadow-lg">
                  TOTTO
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-4">
                <strong>Posición:</strong> Premium Funcional - Precio medio-alto por valor y durabilidad percibida
              </p>
            </div>

            {/* Indicadores */}
            <div className="space-y-4">
              <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-red-800 mb-1">Market Share</p>
                <p className="text-2xl font-bold text-red-900">35-45%</p>
                <p className="text-xs text-gray-700 mt-2">Liderazgo indiscutible en mochilas escolares</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-red-800 mb-1">Top-of-Mind Awareness</p>
                <p className="text-2xl font-bold text-red-900">92%</p>
                <p className="text-xs text-gray-700 mt-2">Entre padres y estudiantes en región</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-red-800 mb-1">Precio Promedio</p>
                <p className="text-2xl font-bold text-red-900">USD $60-120</p>
                <p className="text-xs text-gray-700 mt-2">Premium sobre competencia masiva</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-sm text-red-800 mb-1">Rotación Inventory</p>
                <p className="text-2xl font-bold text-red-900">8-10x/año</p>
                <p className="text-xs text-gray-700 mt-2">Demanda predecible (ciclo escolar)</p>
              </div>
            </div>
          </div>

          {/* Fortalezas y Retos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4">Fortalezas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Posicionamiento casi inquebrantable</li>
                <li>✓ Lealtad transgeneracional única</li>
                <li>✓ Demanda predecible (ciclo escolar)</li>
                <li>✓ Márgenes superiores por premium position</li>
                <li>✓ Distribución amplia en región</li>
                <li>✓ Durabilidad = bajo retorno de productos</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Retos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>⚠ Dependencia de ciclo escolar</li>
                <li>⚠ Competencia de marcas globales (Nike, Samsonite)</li>
                <li>⚠ Necesidad de innovación en diseño/tech</li>
                <li>⚠ E-commerce vs retail físico</li>
                <li>⚠ Generación Z busca moda + función</li>
                <li>⚠ Expansión a adultos profesionales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-8">Conclusión: TOTTO como Marca de Confianza</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              TOTTO ejemplifica cómo una marca de funcionalidad puede generar 70-75% de su valor en intangibles. A
              diferencia de moda, la categoría de accesorios funcionales permite construir lealtad basada en performance
              y confianza.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Su mayor fortaleza es la lealtad multi-generacional: abuelos → padres → hijos compran TOTTO. Este ciclo
              genera lifetime value extraordinario y defensibilidad competitiva alta.
            </p>
            <p className="text-lg leading-relaxed">
              Para mantener liderazgo, TOTTO debe: (1) innovar en diseño sin perder durabilidad, (2) expandir a
              profesionales y lifestyle adulto, (3) integrar tecnología (smart bags), (4) competir en mercado digital
              global.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

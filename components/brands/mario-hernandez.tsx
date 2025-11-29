export default function MarioHernandez() {
  return (
    <section
      id="mario-hernandez"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, #001a4d 0%, #003d99 50%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header con oro y azul */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full opacity-20 blur-xl"></div>
              <div className="relative text-6xl">🦄</div>
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-amber-400 mb-2 tracking-tight drop-shadow-lg">
            MARIO HERNÁNDEZ
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-amber-200 italic font-light">Marroquinería de Lujo y Fantasía Colombiana</p>
        </div>

        {/* Grid de lujo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Lado izquierdo: Unicornio símbolo de lujo */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 rounded-lg bg-gradient-to-br from-blue-900 via-indigo-900 to-black border-4 border-amber-500 flex items-center justify-center mb-8 shadow-2xl overflow-hidden">
              {/* Efecto de lujo */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent"></div>
              <div className="relative text-center z-10">
                <div className="text-9xl mb-4 filter drop-shadow-lg">✨</div>
                <div className="text-6xl font-serif font-bold text-amber-300 mb-2">MH</div>
                <p className="text-amber-200 text-xs font-semibold tracking-widest">LUXURY</p>
              </div>
            </div>
            <p className="text-amber-300 text-center text-sm max-w-xs font-light">
              Identidad visual: Sofisticada, exclusiva y aspiracional
            </p>
          </div>

          {/* Lado derecho: Información premium */}
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-blue-950/50 rounded-r-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-2">Tipo de Marca</h3>
              <p className="text-amber-100">Mixta (Nominativa + Figurativa con Unicornio)</p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-blue-950/50 rounded-r-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-2">Productos Principales</h3>
              <ul className="text-amber-100 space-y-1">
                <li>• Bolsos en cuero de lujo</li>
                <li>• Carteras y maletines de cuero</li>
                <li>• Accesorios de marroquinería premium</li>
                <li>• Prendas de moda de lujo</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-blue-950/50 rounded-r-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-2">Público Objetivo</h3>
              <p className="text-amber-100">
                Personas de alto poder adquisitivo, ejecutivas, profesionales de lujo, mujeres sofisticadas
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-4 bg-blue-950/50 rounded-r-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-2">Clases Niza</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-600/40 border border-amber-500 text-amber-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Clase 18
                </span>
                <span className="bg-amber-600/40 border border-amber-500 text-amber-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Clase 25
                </span>
                <span className="bg-amber-600/40 border border-amber-500 text-amber-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Clase 35
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de distintividad con efecto premium */}
        <div className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-blue-900/30 border-2 border-amber-500/50 rounded-lg p-8 backdrop-blur-md shadow-2xl">
          <h3 className="text-2xl font-bold text-amber-300 mb-4 font-serif">Elementos Emblemáticos</h3>
          <p className="text-amber-100 leading-relaxed">
            Mario Hernández es la marca de lujo más icónica en marroquinería colombiana. El unicornio dorado es un
            símbolo de fantasía, exclusividad y aspiración. Su paleta de colores (azul oscuro con oro) evoca
            sofisticación y poder. La marca ha consolidado una posición premium en el mercado, siendo sinónimo de
            calidad en cuero y artesanía de alto nivel. Su distintividad es excepcional y muy fuerte en el mercado de
            lujo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function GefBrand() {
  return (
    <section
      id="gef"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a1a 100%)",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header con banderas de Francia */}
        <div className="mb-16 text-center">
          <div className="flex justify-center gap-3 mb-6">
            <div className="w-12 h-8 bg-blue-600 rounded-sm"></div>
            <div className="w-12 h-8 bg-white border border-gray-300 rounded-sm"></div>
            <div className="w-12 h-8 bg-red-600 rounded-sm"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-widest">GEF</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-white to-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 italic font-light">Moda Casual Juvenil Accesible e Internacional</p>
        </div>

        {/* Grid animado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Lado izquierdo: Visual */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 rounded-lg bg-black border-2 border-white/30 flex items-center justify-center mb-8 overflow-hidden">
              {/* Patrón de bandera */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-blue-600"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-red-600"></div>
              </div>
              <div className="relative text-center z-10">
                <div className="text-6xl font-black text-white drop-shadow-lg">GEF</div>
                <p className="text-white text-xs mt-2 font-bold">FRENCH VIBES</p>
              </div>
            </div>
            <p className="text-gray-400 text-center text-sm max-w-xs">
              Identidad visual: Colorida, juvenil y cosmopolita
            </p>
          </div>

          {/* Lado derecho: Información */}
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Tipo de Marca</h3>
              <p className="text-gray-300">Mixta (Nominativa + Figurativa)</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Productos Principales</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Ropa casual y urbana</li>
                <li>• Prendas para jóvenes</li>
                <li>• Accesorios y complementos</li>
                <li>• Calzado deportivo casual</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Público Objetivo</h3>
              <p className="text-gray-300">
                Jóvenes, universitarios, personas que buscan moda accesible con estilo europeo
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Clases Niza</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/30 border border-blue-500 text-blue-100 px-3 py-1 rounded-full text-sm">
                  Clase 25
                </span>
                <span className="bg-blue-600/30 border border-blue-500 text-blue-100 px-3 py-1 rounded-full text-sm">
                  Clase 35
                </span>
                <span className="bg-blue-600/30 border border-blue-500 text-blue-100 px-3 py-1 rounded-full text-sm">
                  Clase 18
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de distintividad */}
        <div className="bg-gradient-to-r from-blue-600/10 via-white/5 to-red-600/10 border border-white/20 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Elementos Emblemáticos</h3>
          <p className="text-gray-300 leading-relaxed">
            GEF juega con una identidad jovial y cosmopolita, evocando la sofisticación francesa mediante su paleta de
            colores (azul, blanco y rojo). La marca es fresca, dinámica y accesible, dirigida a un público que busca
            estar a la moda sin comprometer el presupuesto. Su distintividad radica en la combinación de colores
            vibrantes y la tipografía moderna y geométrica.
          </p>
        </div>
      </div>
    </section>
  )
}

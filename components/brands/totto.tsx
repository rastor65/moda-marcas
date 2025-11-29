export default function TottoBrand() {
  return (
    <section
      id="totto"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header con círculos de marca */}
        <div className="mb-16 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg"></div>
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-red-600 mb-2 tracking-wide">TOTTO</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 italic font-light">Mochilas, Maletas y Funcionalidad Urbana Colombiana</p>
        </div>

        {/* Grid con énfasis en funcionalidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Lado izquierdo: Logo marca con estilo deportivo */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-50 border-4 border-red-500 flex items-center justify-center mb-8 shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center gap-3 mb-4">
                    <div className="w-20 h-20 rounded-full bg-red-500 shadow-md"></div>
                    <div className="w-20 h-20 rounded-full bg-yellow-400 shadow-md"></div>
                  </div>
                  <div className="text-5xl font-black text-gray-800">TOTTO</div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-center text-sm max-w-xs">
              Identidad visual: Dinámica, energética y funcional
            </p>
          </div>

          {/* Lado derecho: Información */}
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-white/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Tipo de Marca</h3>
              <p className="text-gray-700">Nominativa (con elementos figurativos)</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-white/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Productos Principales</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Mochilas escolares y urbanas</li>
                <li>• Maletas y trolleys</li>
                <li>• Morrales funcionales</li>
                <li>• Accesorios de viaje</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-4 bg-white/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Público Objetivo</h3>
              <p className="text-gray-700">Estudiantes, profesionales jóvenes, viajeros urbanos, familias</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-white/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Clases Niza</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/20 border border-red-500 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  Clase 18
                </span>
                <span className="bg-yellow-400/20 border border-yellow-500 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  Clase 25
                </span>
                <span className="bg-red-500/20 border border-red-500 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  Clase 35
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de distintividad */}
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-red-500 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Elementos Emblemáticos</h3>
          <p className="text-gray-700 leading-relaxed">
            Totto se destaca por su energía visual y su funcionalidad práctica. Los dos círculos (rojo y amarillo) son
            icónicos y reconocibles al instante en Colombia y Latinoamérica. La marca comunica confiabilidad,
            durabilidad y estilo juvenil. Su distintividad es muy fuerte gracias a la combinación de colores primarios y
            su presencia consolidada en el mercado de accesorios escolares y de viaje.
          </p>
        </div>
      </div>
    </section>
  )
}

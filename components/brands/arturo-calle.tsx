export default function ArturoCalle() {
  return (
    <section
      id="arturo-calle"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header elegante */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">ARTURO CALLE</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-700 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 italic font-light">Moda Masculina Ejecutiva de Excelencia Colombiana</p>
        </div>

        {/* Contenedor de dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Lado izquierdo: Logo y elementos visuales */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-lg bg-white/5 border-2 border-amber-700/50 flex items-center justify-center mb-8 hover:border-amber-600 transition-colors duration-300">
              <div className="text-center">
                <div className="text-7xl font-bold text-amber-700 mb-2">AC</div>
                <p className="text-gray-400 text-sm">Logo Arturo Calle</p>
              </div>
            </div>
            <p className="text-gray-400 text-center text-sm max-w-xs">
              Identidad visual: Sobriedad, elegancia y poder ejecutivo
            </p>
          </div>

          {/* Lado derecho: Información */}
          <div className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Tipo de Marca</h3>
              <p className="text-gray-300">Nominativa</p>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Productos Principales</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Trajes y camisas formales</li>
                <li>• Prendas de vestir ejecutivas</li>
                <li>• Accesorios en cuero</li>
                <li>• Calzado formal de lujo</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Público Objetivo</h3>
              <p className="text-gray-300">Hombres ejecutivos, profesionales de alto nivel, empresarios colombianos</p>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Clases Niza</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-700/30 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 25
                </span>
                <span className="bg-amber-700/30 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 35
                </span>
                <span className="bg-amber-700/30 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 18
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de distintividad */}
        <div className="bg-white/5 border border-amber-700/30 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Elementos Emblemáticos</h3>
          <p className="text-gray-300 leading-relaxed">
            La marca Arturo Calle es sinónimo de elegancia, formalidad y excelencia en la moda masculina colombiana. Su
            nombre es el elemento más fuerte de la marca, asociado directamente al concepto de "traje perfecto" y
            profesionalismo. La identidad visual se caracteriza por la sobriedad, el uso de tonos oscuros y la
            tipografía clara, reflejando la seriedad del público ejecutivo al que se dirige.
          </p>
        </div>
      </div>
    </section>
  )
}

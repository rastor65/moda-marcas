export default function VelezBrand() {
  return (
    <section
      id="velez"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8"
      style={{
        background: "linear-gradient(135deg, #3d2817 0%, #5a4a3a 50%, #2a2416 100%)",
      }}
    >
      <div className="max-w-6xl w-full">
        {/* Header artesanal minimalista */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-800 to-amber-900"></div>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-700 to-amber-900 mx-4 my-auto"></div>
            <div className="w-1 h-12 bg-gradient-to-b from-amber-900 to-amber-800"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-amber-100 mb-2 tracking-widest">VÉLEZ</h2>
          <div className="h-0.5 w-48 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 mx-auto mb-6"></div>
          <p className="text-lg text-amber-200 italic font-light tracking-wide">
            Marroquinería Artesanal en Cuero Colombiano Auténtico
          </p>
        </div>

        {/* Grid artesanal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Lado izquierdo: Textura de cuero */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative w-72 h-72 rounded-lg overflow-hidden border-2 border-amber-800 flex items-center justify-center mb-8 shadow-2xl"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #3d2817 0px, #3d2817 2px, #4a3426 2px, #4a3426 4px)",
              }}
            >
              {/* Textura de cuero artesanal */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(168,132,94,0.4) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              ></div>
              <div className="relative text-center z-10">
                <div className="text-7xl mb-4 opacity-70">🧵</div>
                <div className="text-5xl font-serif font-bold text-amber-200 tracking-widest">VÉLEZ</div>
                <p className="text-amber-300/70 text-xs mt-3 font-semibold tracking-[3px]">EST. 1947</p>
              </div>
            </div>
            <p className="text-amber-300 text-center text-sm max-w-xs font-light">
              Identidad visual: Artesanal, auténtica y de raíces profundas
            </p>
          </div>

          {/* Lado derecho: Información artesanal */}
          <div className="space-y-6">
            <div className="border-l-4 border-amber-700 pl-6 py-4 bg-amber-950/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-amber-200 mb-2 font-serif">Tipo de Marca</h3>
              <p className="text-amber-100">Mixta (Nominativa, tipografía distintiva y minimalista)</p>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4 bg-amber-950/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-amber-200 mb-2 font-serif">Productos Principales</h3>
              <ul className="text-amber-100 space-y-1">
                <li>• Bolsos y carteras en cuero</li>
                <li>• Calzado artesanal de cuero</li>
                <li>• Accesorios de marroquinería</li>
                <li>• Cinturones y complementos</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4 bg-amber-950/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-amber-200 mb-2 font-serif">Público Objetivo</h3>
              <p className="text-amber-100">
                Personas que valoran la artesanía, lo auténtico, lo colombiano, profesionales conscientes
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 py-4 bg-amber-950/50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-amber-200 mb-2 font-serif">Clases Niza</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-700/50 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 18
                </span>
                <span className="bg-amber-700/50 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 25
                </span>
                <span className="bg-amber-700/50 border border-amber-700 text-amber-100 px-3 py-1 rounded-full text-sm">
                  Clase 35
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento de distintividad artesanal */}
        <div
          className="border-2 border-amber-700 rounded-lg p-8 bg-amber-900/20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(168,132,94,0.1) 35px, rgba(168,132,94,0.1) 70px)",
          }}
        >
          <h3 className="text-2xl font-bold text-amber-200 mb-4 font-serif">Elementos Emblemáticos</h3>
          <p className="text-amber-100 leading-relaxed">
            Vélez representa la artesanía colombiana pura. Su nombre, elegancia minimalista y enfoque en la textura
            natural del cuero hablan de autenticidad y tradición. La marca no necesita elementos gráficos complejos; su
            fuerza radica en la calidad del cuero y la herencia de más de 70 años de trayectoria. Su distintividad es
            muy fuerte en el segmento de marroquinería artesanal y sostenible.
          </p>
        </div>
      </div>
    </section>
  )
}

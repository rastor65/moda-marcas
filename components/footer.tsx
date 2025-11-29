export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Maestría</h3>
            <p className="text-background/80 text-sm">Gestión de la Tecnología y la Innovación</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Equipo C</h3>
            <p className="text-background/80 text-sm">
              Robert Damian Quintero Laverde
              <br />
              Laura Taminéz
              <br />
              Bryan J. Otero Arrieta
              <br />
              Kevin Yair Cantillo Ojeda
              <br />
              Yair Andrés Sarmiento Gil
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Actividad</h3>
            <p className="text-background/80 text-sm">
              Hoja de Trabajo – Mapa Marcario
              <br />
              Auditoría Marcaria Express
              <br />
              28 de noviembre, 2025
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-background/70 text-sm text-center">
            © 2025 Auditoría Marcaria Express. Actividad 1 - Maestría en Gestión de la Tecnología y la Innovación
          </p>
        </div>
      </div>
    </footer>
  )
}

import BrandCard from "./brand-card"

const brands = [
  {
    name: "Arturo Calle",
    description: "Moda masculina ejecutiva",
    products: "Trajes, camisas formales, accesorios",
    positioning: "Elegancia y formalidad colombiana",
    elements: ["Nombre icónico", "Tipografía serif elegante", "Asociación a calidad premium"],
  },
  {
    name: "gef",
    description: "Ropa casual y juvenil",
    products: "Prendas de vestir, accesorios",
    positioning: "Moda accesible y colorida",
    elements: ["Logotipo con bandera francesa", "Colores vibrantes", "Diseño moderno"],
  },
  {
    name: "Totto",
    description: "Mochilas y accesorios",
    products: "Morrales, maletas, bolsos",
    positioning: "Funcionalidad urbana y escolar",
    elements: ["Círculos distintivos (rojo y amarillo)", "Nombre corto y memorable", "Diseño robusto"],
  },
  {
    name: "Mario Hernández",
    description: "Marroquinería de lujo",
    products: "Bolsos, carteras, maletines en cuero",
    positioning: "Símbolo de lujo y fantasía",
    elements: ["Unicornio dorado", "Azul oscuro y dorado", "Tipografía serif robusta"],
  },
  {
    name: "Vélez",
    description: "Marroquinería artesanal",
    products: "Bolsos, cinturones, calzado en cuero",
    positioning: "Artesanía y autenticidad",
    elements: ["Tipografía minimalista", "Tonos tierra y naturales", "Composición limpia"],
  },
]

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Marcas Seleccionadas</h2>
          <p className="text-lg text-foreground/70">Líderes del sector moda, belleza y retail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

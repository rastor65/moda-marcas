interface Brand {
  name: string
  description: string
  products: string
  positioning: string
  elements: string[]
}

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-accent-dark/50 transition-colors h-full flex flex-col">
      {/* Logo Placeholder */}
      <div className="w-full h-32 bg-accent-light rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Logo</p>
          <p className="font-semibold text-foreground/70">{brand.name}</p>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-lg font-bold mb-1">{brand.name}</h3>
          <p className="text-sm text-accent-dark font-semibold">{brand.description}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Productos</p>
            <p className="text-foreground/80">{brand.products}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-1">Posicionamiento</p>
            <p className="text-foreground/80">{brand.positioning}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50 mb-2">Elementos emblemáticos</p>
            <div className="flex flex-wrap gap-2">
              {brand.elements.map((el) => (
                <span key={el} className="text-xs bg-background border border-border px-2 py-1 rounded">
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

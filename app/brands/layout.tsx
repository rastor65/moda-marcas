import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-background text-foreground">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

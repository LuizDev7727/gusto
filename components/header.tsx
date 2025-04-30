"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.png" alt="Pizzaria Premium" width={40} height={40} className="h-10 w-auto" /> */}
          <span className="font-serif text-2xl tracking-wider text-white">GUSTO</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0F0F0F] border-[#333] text-white">
              <nav className="flex flex-col gap-8 mt-12">
                <Link
                  href="#home"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="#menu"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Menu
                </Link>
                <Link
                  href="#sobre"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Sobre Nós
                </Link>
                <Link
                  href="#galeria"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Galeria
                </Link>
                <Link
                  href="#depoimentos"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Depoimentos
                </Link>
                <Link
                  href="#contato"
                  className="text-lg font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Contato
                </Link>
                <Button
                  className="mt-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  size="lg"
                >
                  Reserve sua Mesa
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link
                href="#home"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#menu"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Menu
              </Link>
              <Link
                href="#sobre"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Sobre Nós
              </Link>
              <Link
                href="#galeria"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Galeria
              </Link>
              <Link
                href="#depoimentos"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="font-light tracking-wider hover:text-[#D4AF37] transition-colors duration-300"
              >
                Contato
              </Link>
            </nav>
            <Button
              className="bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              size="lg"
            >
              Reserve sua Mesa
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

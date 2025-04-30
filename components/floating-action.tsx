"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingCart } from "lucide-react"

export function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
        <Button size="icon" className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg">
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Peça pelo WhatsApp</span>
        </Button>
      </Link>

      <Link href="#cardapio">
        <Button size="icon" className="h-14 w-14 rounded-full bg-[#D62300] hover:bg-[#B51E00] shadow-lg">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Ver Cardápio</span>
        </Button>
      </Link>
    </div>
  )
}

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-wider text-white">GUSTO</span>
            </Link>
          </div>

          <div className="flex gap-8 mb-6 md:mb-0">
            <Link
              href="#home"
              className="text-sm font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="text-sm font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Menu
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="#galeria"
              className="text-sm font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Galeria
            </Link>
            <Link
              href="#contato"
              className="text-sm font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Contato
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#333] my-8"></div>

        <div className="text-center text-sm text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Gusto Pizzaria Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

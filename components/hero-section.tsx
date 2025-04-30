"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="Pizzaria Premium" fill className="object-cover brightness-[0.3]" priority />
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10"></div>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6">
          Uma experiência além do sabor
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-2xl mx-auto">
          Descubra o prazer de uma verdadeira pizza artesanal, preparada com ingredientes selecionados e técnicas
          tradicionais italianas.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-[#D4AF37] hover:bg-[#B8960C] text-black text-lg font-light tracking-wider transition-all duration-300"
          >
            Reserve sua Mesa
          </Button>
          <button className="border-white text-black text-lg font-light h-11 rounded-md px-8 border border-input bg-white hover:bg-white/75 hover:border-white/75">
            Veja o Menu
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center pt-4">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

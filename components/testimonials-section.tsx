"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    position: "Chef Executivo",
    image: "/avatars/carlos.png",
    text: "Uma experiência gastronômica única. A combinação de ingredientes premium e técnicas tradicionais resulta em pizzas que são verdadeiras obras de arte culinárias.",
  },
  {
    id: 2,
    name: "Ana Beatriz",
    position: "Crítica Gastronômica",
    image: "/avatars/ana.png",
    text: "Gusto redefine o conceito de pizza gourmet. O ambiente sofisticado, o atendimento impecável e, principalmente, o sabor incomparável das pizzas fazem deste lugar uma referência.",
  },
  {
    id: 3,
    name: "Ricardo Almeida",
    position: "Sommelier",
    image: "/avatars/ricardo.png",
    text: "A carta de vinhos é tão excepcional quanto as pizzas. A seleção cuidadosa de rótulos italianos complementa perfeitamente cada sabor, elevando a experiência a outro patamar.",
  },
  {
    id: 4,
    name: "Juliana Costa",
    position: "Cliente Frequente",
    image: "/avatars/juliana.png",
    text: "Frequento o Gusto há anos e nunca me decepcionei. A consistência na qualidade e a constante inovação no menu mantêm a experiência sempre surpreendente e memorável.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="depoimentos" className="py-24 bg-[#8C1C13]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider mb-6 text-white">
            O que <span className="text-[#D4AF37]">Dizem</span> sobre nós
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            A opinião de quem já experimentou nossa gastronomia exclusiva
          </p>
        </div>

        <div className="max-w-full mx-auto relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-[#D4AF37]">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xl font-light italic text-white mb-8 leading-relaxed">
                      "{testimonials[current].text}"
                    </p>
                    <h4 className="font-serif text-xl text-[#D4AF37]">{testimonials[current].name}</h4>
                    <p className="text-gray-300 font-light">{testimonials[current].position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-colors duration-300"
            aria-label="Depoimento anterior"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-colors duration-300"
            aria-label="Próximo depoimento"
          >
            &#8594;
          </button>
        </div>

        <div className="flex justify-center mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1)
                setCurrent(index)
              }}
              className={`w-3 h-3 rounded-full mx-2 ${index === current ? "bg-[#D4AF37]" : "bg-white/30"}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

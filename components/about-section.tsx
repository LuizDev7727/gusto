"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

export function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/chefe-preparando.webp" alt="Chef preparando pizza" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#1A1A1A] p-6 shadow-xl hidden lg:block">
              <div className="border border-[#D4AF37] h-full w-full flex items-center justify-center p-4">
                <p className="font-serif text-xl text-center text-[#D4AF37]">
                  "A perfeição está nos detalhes e na paixão pelo que fazemos"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              ...variants,
              visible: {
                ...variants.visible,
                transition: {
                  ...variants.visible.transition,
                  delay: 0.3,
                },
              },
            }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider mb-6 text-white">
              Nossa <span className="text-[#D4AF37]">História</span>
            </h2>
            <div className="h-[1px] w-24 bg-[#D4AF37] mb-8"></div>
            <div className="space-y-6 text-lg font-light text-gray-300">
              <p>
                Fundada em 2010 pelo chef renomado Alessandro Rossi, a Gusto nasceu da paixão por unir a tradição
                italiana com técnicas contemporâneas, criando uma experiência gastronômica única.
              </p>
              <p>
                Nossa filosofia é simples: ingredientes excepcionais, técnicas impecáveis e atenção meticulosa aos
                detalhes. Cada pizza que servimos é uma obra de arte, preparada com ingredientes selecionados das
                melhores procedências.
              </p>
              <p>
                Nossos chefs são mestres pizzaiolos formados nas mais prestigiadas escolas da Itália, trazendo consigo o
                conhecimento ancestral da verdadeira pizza napolitana, mas com um toque de inovação que nos diferencia.
              </p>
              <p>
                A massa, fermentada naturalmente por 48 horas, é assada em forno a lenha importado de Nápoles,
                garantindo aquela textura e sabor inconfundíveis que só uma autêntica pizza italiana pode oferecer.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="border border-[#333] p-6">
                <p className="text-3xl font-serif text-[#D4AF37] mb-2">2010</p>
                <p className="text-gray-400 font-light">Ano de Fundação</p>
              </div>
              <div className="border border-[#333] p-6">
                <p className="text-3xl font-serif text-[#D4AF37] mb-2">48h</p>
                <p className="text-gray-400 font-light">Fermentação Natural</p>
              </div>
              <div className="border border-[#333] p-6">
                <p className="text-3xl font-serif text-[#D4AF37] mb-2">100%</p>
                <p className="text-gray-400 font-light">Ingredientes Premium</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

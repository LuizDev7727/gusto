"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const menuItems = {
  pizzas: [
    {
      id: 1,
      name: "Tartufo Nero",
      description: "Massa artesanal, mussarela de búfala, cogumelos porcini, trufa negra e azeite trufado",
      price: 89.9,
      image: "/gourmet/pizza-1.avif",
    },
    {
      id: 2,
      name: "Prosciutto di Parma",
      description: "Massa artesanal, mussarela de búfala, presunto de Parma, rúcula selvagem e parmesão envelhecido",
      price: 79.9,
      image: "/gourmet/pizza-2.jpg",
    },
    {
      id: 3,
      name: "Quattro Formaggi",
      description: "Massa artesanal, mussarela de búfala, gorgonzola DOP, pecorino romano e parmesão 36 meses",
      price: 75.9,
      image: "/gourmet/pizza-3.avif",
    },
    {
      id: 4,
      name: "Margherita D.O.C.",
      description: "Massa artesanal, molho de tomate San Marzano, mussarela de búfala e manjericão fresco",
      price: 69.9,
      image: "/gourmet/pizza-4.jpg",
    },
  ],
  entradas: [
    {
      id: 1,
      name: "Burrata Fresca",
      description: "Burrata cremosa servida com tomates confitados, pesto de manjericão e pão artesanal",
      price: 59.9,
      image: "/gourmet/pizza-5.avif",
    },
    {
      id: 2,
      name: "Carpaccio di Manzo",
      description: "Finas fatias de filé mignon, alcaparras, rúcula, lascas de parmesão e molho de mostarda Dijon",
      price: 62.9,
      image: "/gourmet/pizza-6.webp",
    },
    {
      id: 3,
      name: "Antipasto Misto",
      description: "Seleção de embutidos italianos, queijos artesanais, azeitonas e grissini",
      price: 89.9,
      image: "/gourmet/pizza-7.jpg",
    },
  ],
  sobremesas: [
    {
      id: 1,
      name: "Tiramisù Classico",
      description: "Clássico tiramisù italiano com café especial, mascarpone e cacau em pó",
      price: 39.9,
      image: "/gourmet/pizza-8.jpg",
    },
    {
      id: 2,
      name: "Panna Cotta",
      description: "Panna cotta de baunilha com calda de frutas vermelhas e hortelã",
      price: 36.9,
      image: "/gourmet/pizza-9.avif",
    },
  ],
  vinhos: [
    {
      id: 1,
      name: "Chianti Classico DOCG",
      description: "Vinho tinto italiano da região da Toscana, encorpado com notas de cereja e especiarias",
      price: 189.9,
      image: "/gourmet/pizza-10.webp",
    },
    {
      id: 2,
      name: "Barolo DOCG",
      description: "Vinho tinto italiano premium da região do Piemonte, complexo e elegante",
      price: 349.9,
      image: "/gourmet/pizza-11.jpg",
    },
    {
      id: 3,
      name: "Prosecco Superiore DOCG",
      description: "Espumante italiano fresco e frutado, perfeito como aperitivo",
      price: 159.9,
      image: "/gourmet/pizza-12.jpg",
    },
  ],
}

export function MenuSection() {
  const [selectedTab, setSelectedTab] = useState("pizzas")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="menu" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider mb-6 text-white">
            Menu <span className="text-[#D4AF37]">Gourmet</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Nossa seleção de pratos exclusivos, preparados com ingredientes premium e técnicas artesanais italianas
          </p>
        </div>

        <Tabs defaultValue="pizzas" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-[#1A1A1A] h-full">
            <TabsTrigger
              value="pizzas"
              className="text-lg font-light tracking-wider data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] data-[state=active]:rounded-none data-[state=active]:shadow-none py-4"
            >
              Pizzas Especiais
            </TabsTrigger>
            <TabsTrigger
              value="entradas"
              className="text-lg font-light tracking-wider data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] data-[state=active]:rounded-none data-[state=active]:shadow-none py-4"
            >
              Entradas
            </TabsTrigger>
            <TabsTrigger
              value="sobremesas"
              className="text-lg font-light tracking-wider data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] data-[state=active]:rounded-none data-[state=active]:shadow-none py-4"
            >
              Sobremesas
            </TabsTrigger>
            <TabsTrigger
              value="vinhos"
              className="text-lg font-light tracking-wider data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] data-[state=active]:rounded-none data-[state=active]:shadow-none py-4"
            >
              Vinhos
            </TabsTrigger>
          </TabsList>

          {Object.keys(menuItems).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {menuItems[category as keyof typeof menuItems].map((item) => (
                  <motion.div key={item.id} variants={item}>
                    <Card className="overflow-hidden border-none bg-[#1A1A1A] shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] h-full">
                        <div className="relative h-48 md:h-full">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-serif tracking-wider">{item.name}</h3>
                              <span className="text-xl font-light text-[#D4AF37]">
                                R$ {item.price.toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                            <p className="text-gray-400 font-light">{item.description}</p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

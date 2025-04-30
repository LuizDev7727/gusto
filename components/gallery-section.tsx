"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  {
    id: 1,
    src: "/lado-interno.jpg",
    alt: "Interior da pizzaria",
    category: "ambiente",
  },
  {
    id: 2,
    src: "/chefe-preparando.webp",
    alt: "Chef preparando pizza",
    category: "preparo",
  },
  {
    id: 3,
    src: "/pizza-gourmet.jpg",
    alt: "Pizza gourmet",
    category: "pratos",
  },
  {
    id: 4,
    src: "/detalhes-da-massa.webp",
    alt: "Detalhe da massa",
    category: "preparo",
  },
  {
    id: 5,
    src: "/area-de-jantar.jpg",
    alt: "Área de jantar",
    category: "ambiente",
  },
  {
    id: 6,
    src: "/selecao-ingredientes.webp",
    alt: "Seleção de ingredientes",
    category: "ingredientes",
  },
  {
    id: 7,
    src: "/pizza-forno.jpg",
    alt: "Pizza saindo do forno",
    category: "preparo",
  },
  {
    id: 8,
    src: "/decoração.jpg",
    alt: "Detalhe da decoração",
    category: "ambiente",
  },
]

export function GallerySection() {
  const [filter, setFilter] = useState<string>("todos")

  const filteredImages = filter === "todos" ? galleryImages : galleryImages.filter((img) => img.category === filter)

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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="galeria" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider mb-6 text-white">
            Nossa <span className="text-[#D4AF37]">Galeria</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Conheça nosso ambiente sofisticado, o processo de preparo das nossas pizzas e a seleção de ingredientes
            premium
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter("todos")}
              className={`px-6 py-2 font-light tracking-wider transition-colors ${
                filter === "todos" ? "text-[#D4AF37] border-b border-[#D4AF37]" : "text-gray-400 hover:text-white"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("ambiente")}
              className={`px-6 py-2 font-light tracking-wider transition-colors ${
                filter === "ambiente" ? "text-[#D4AF37] border-b border-[#D4AF37]" : "text-gray-400 hover:text-white"
              }`}
            >
              Ambiente
            </button>
            <button
              onClick={() => setFilter("preparo")}
              className={`px-6 py-2 font-light tracking-wider transition-colors ${
                filter === "preparo" ? "text-[#D4AF37] border-b border-[#D4AF37]" : "text-gray-400 hover:text-white"
              }`}
            >
              Preparo
            </button>
            <button
              onClick={() => setFilter("pratos")}
              className={`px-6 py-2 font-light tracking-wider transition-colors ${
                filter === "pratos" ? "text-[#D4AF37] border-b border-[#D4AF37]" : "text-gray-400 hover:text-white"
              }`}
            >
              Pratos
            </button>
            <button
              onClick={() => setFilter("ingredientes")}
              className={`px-6 py-2 font-light tracking-wider transition-colors ${
                filter === "ingredientes"
                  ? "text-[#D4AF37] border-b border-[#D4AF37]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Ingredientes
            </button>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="relative overflow-hidden group cursor-pointer h-64"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-md"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-serif tracking-wider text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

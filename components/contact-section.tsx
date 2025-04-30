"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    toast({
      title: "Reserva solicitada!",
      description: "Entraremos em contato para confirmar sua reserva.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    })
  }

  return (
    <section id="contato" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider mb-6 text-white">
            Reservas & <span className="text-[#D4AF37]">Contato</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Reserve sua mesa e prepare-se para uma experiência gastronômica inesquecível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Faça sua Reserva</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="bg-[#1A1A1A] border-[#333] text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-[#1A1A1A] border-[#333] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="bg-[#1A1A1A] border-[#333] text-white"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-2 text-gray-300">
                    Número de Pessoas
                  </label>
                  <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                    <SelectTrigger className="bg-[#1A1A1A] border-[#333] text-white">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
                      <SelectItem value="1">1 pessoa</SelectItem>
                      <SelectItem value="2">2 pessoas</SelectItem>
                      <SelectItem value="3">3 pessoas</SelectItem>
                      <SelectItem value="4">4 pessoas</SelectItem>
                      <SelectItem value="5">5 pessoas</SelectItem>
                      <SelectItem value="6">6 pessoas</SelectItem>
                      <SelectItem value="7+">7 ou mais pessoas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-gray-300">
                    Data
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-[#1A1A1A] border-[#333] text-white"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2 text-gray-300">
                    Horário
                  </label>
                  <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                    <SelectTrigger className="bg-[#1A1A1A] border-[#333] text-white">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="19:30">19:30</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="20:30">20:30</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                      <SelectItem value="21:30">21:30</SelectItem>
                      <SelectItem value="22:00">22:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Observações Especiais
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Alguma solicitação especial?"
                  className="bg-[#1A1A1A] border-[#333] text-white min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-light tracking-wider transition-all duration-300"
                size="lg"
              >
                Solicitar Reserva
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-xl overflow-hidden h-[300px] relative">
              <div className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.8288439391881!2d-46.642894299999995!3d-23.5448113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584e382ca5d7%3A0x66d01427bee2423b!2sEsther%20Rooftop!5e0!3m2!1sen!2sbr!4v1746013567563!5m2!1sen!2sbr"
                  width="600"
                  height="450"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-6">
                <div className="bg-[#1A1A1A] p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Endereço</h4>
                  <p className="text-gray-300 font-light">
                    Rua das Oliveiras, 123
                    <br />
                    Jardins - São Paulo/SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#1A1A1A] p-4 rounded-full">
                  <Phone className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Reservas</h4>
                  <p className="text-gray-300 font-light">
                    +55 (11) 3456-7890
                    <br />
                    reservas@gustopizzaria.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#1A1A1A] p-4 rounded-full">
                  <Clock className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-300 font-light">
                    Terça a Domingo
                    <br />
                    19h às 23h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#1A1A1A] p-4 rounded-full">
                  <Mail className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Contato</h4>
                  <p className="text-gray-300 font-light">
                    contato@gustopizzaria.com
                    <br />
                    +55 (11) 98765-4321
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageCircle, Clock, Zap, Shield, Users, ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">CalendarBot</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#funciones" className="text-muted-foreground hover:text-foreground transition-colors">
              Funciones
            </Link>
            <Link href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors">
              Testimonios
            </Link>
            <Link href="/politica-privacidad" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Button variant="outline" asChild>
              <Link href="/condiciones-servicio">Términos</Link>
            </Button>
            <Button asChild>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const whatsappUrl = prompt("Ingresa el enlace de tu agente de WhatsApp:")
                  if (whatsappUrl) {
                    window.open(whatsappUrl, "_blank")
                  }
                }}
              >
                Probar Ahora
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            🚀 Automatización Inteligente
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Agenda Eventos en tu <span className="text-primary">Google Calendar</span> desde WhatsApp
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Nuestro agente de IA convierte tus mensajes de WhatsApp en eventos organizados automáticamente. Sin
            aplicaciones adicionales, sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const whatsappUrl = prompt("Ingresa el enlace de tu agente de WhatsApp:")
                  if (whatsappUrl) {
                    window.open(whatsappUrl, "_blank")
                  }
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Comenzar Gratis
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="#funciones">
                Ver Funciones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funciones" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funciones Principales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo nuestro agente simplifica la gestión de tu calendario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Integración con Google Calendar</CardTitle>
                <CardDescription>Conexión directa y segura con tu calendario personal</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sincronización automática
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Detección de conflictos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Recordatorios inteligentes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Interfaz de WhatsApp</CardTitle>
                <CardDescription>Agenda eventos con mensajes naturales en español</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Lenguaje natural
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Confirmación instantánea
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sin instalaciones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Automatización Inteligente</CardTitle>
                <CardDescription>IA que entiende contexto y preferencias personales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Aprendizaje adaptativo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sugerencias inteligentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Optimización de horarios
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Próximamente
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funciones Futuras</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos trabajando en nuevas características para hacer tu experiencia aún mejor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-dashed border-2 border-muted-foreground/20">
              <CardHeader>
                <Users className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Reuniones Grupales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Coordina eventos con múltiples participantes</p>
              </CardContent>
            </Card>

            <Card className="text-center border-dashed border-2 border-muted-foreground/20">
              <CardHeader>
                <Clock className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Recordatorios Avanzados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Notificaciones personalizadas y seguimiento</p>
              </CardContent>
            </Card>

            <Card className="text-center border-dashed border-2 border-muted-foreground/20">
              <CardHeader>
                <Shield className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Integración Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Conecta con Slack, Teams y más herramientas</p>
              </CardContent>
            </Card>

            <Card className="text-center border-dashed border-2 border-muted-foreground/20">
              <CardHeader>
                <Star className="h-10 w-10 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Análisis de Productividad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Reportes y métricas de tu gestión del tiempo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-muted-foreground">
              Testimonios reales de personas que han transformado su productividad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Increíble cómo algo tan simple puede cambiar completamente mi organización diaria. Ya no olvido
                  ninguna cita importante."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">María Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Consultora</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "La integración con Google Calendar es perfecta. Ahorro al menos 30 minutos diarios en organización de
                  agenda."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">CL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Carlos López</p>
                    <p className="text-sm text-muted-foreground">Emprendedor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Perfecto para equipos remotos. Coordinar reuniones nunca había sido tan fácil. Lo recomiendo
                  totalmente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Silva</p>
                    <p className="text-sm text-muted-foreground">Gerente de Proyecto</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para automatizar tu calendario?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya han transformado su productividad con nuestro agente de WhatsApp
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                const whatsappUrl = prompt("Ingresa el enlace de tu agente de WhatsApp:")
                if (whatsappUrl) {
                  window.open(whatsappUrl, "_blank")
                }
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Comenzar Ahora - Es Gratis
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">CalendarBot</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Automatiza tu calendario con inteligencia artificial y WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#funciones" className="text-muted-foreground hover:text-foreground">
                    Funciones
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="text-muted-foreground hover:text-foreground">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Estado del Servicio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/politica-privacidad" className="text-muted-foreground hover:text-foreground">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/condiciones-servicio" className="text-muted-foreground hover:text-foreground">
                    Condiciones del Servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CalendarBot. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

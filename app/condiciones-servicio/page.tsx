import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Condiciones del Servicio - CalendarBot",
  description: "Condiciones del servicio del agente de WhatsApp para Google Calendar",
}

export default function CondicionesServicio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Condiciones del Servicio - CalendarBot
          </h1>
          <p className="text-muted-foreground text-lg">
            Última actualización: {new Date().toLocaleDateString("es-ES")}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceptación de los Términos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Al acceder y utilizar esta aplicación, usted acepta estar sujeto a estos Términos y Condiciones de Uso y
                a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe
                utilizar esta aplicación.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                CalendarBot es un agente de inteligencia artificial que permite crear y gestionar eventos en su Google
                Calendar personal a través de mensajes de WhatsApp. El servicio actualmente incluye:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Procesamiento de lenguaje natural para crear eventos</li>
                <li>Integración automática con Google Calendar personal</li>
                <li>Confirmaciones y recordatorios por WhatsApp</li>
                <li>Detección de conflictos de horarios</li>
                <li>Sugerencias inteligentes de programación</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Estamos desarrollando constantemente nuevas funcionalidades que se añadirán al servicio en el futuro.
                Nos reservamos el derecho de modificar o discontinuar funcionalidades según sea necesario para mejorar
                el servicio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Requisitos y Configuración</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Requisitos del Usuario</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Cuenta activa de WhatsApp</li>
                    <li>Cuenta de Google con Google Calendar personal habilitado</li>
                    <li>Autorización para acceder a su Google Calendar personal</li>
                    <li>Número de teléfono verificado</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Responsabilidades del Usuario</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Proporcionar información precisa y actualizada</li>
                    <li>Mantener la confidencialidad de sus credenciales</li>
                    <li>Notificar inmediatamente cualquier uso no autorizado</li>
                    <li>Ser responsable de toda actividad en su cuenta</li>
                    <li>Mantener la seguridad de su cuenta de WhatsApp</li>
                    <li>Proporcionar información clara para crear eventos</li>
                    <li>Verificar eventos creados en su calendario</li>
                    <li>Notificar problemas o errores del servicio</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Uso Aceptable del Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Al utilizar CalendarBot, usted se compromete a NO:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violar cualquier ley local, estatal, nacional o internacional</li>
                <li>Transmitir contenido ofensivo, difamatorio o inapropiado</li>
                <li>Intentar obtener acceso no autorizado a otros sistemas</li>
                <li>Interferir con el funcionamiento normal del servicio</li>
                <li>Utilizar el servicio para actividades comerciales no autorizadas</li>
                <li>Crear cuentas falsas o suplantar identidades</li>
                <li>Enviar spam o mensajes masivos no relacionados con eventos</li>
                <li>Intentar sobrecargar el sistema con solicitudes excesivas</li>
                <li>Compartir su acceso con terceros no autorizados</li>
                <li>Usar el servicio para actividades ilegales o fraudulentas</li>
                <li>Intentar acceder a calendarios de otros usuarios</li>
                <li>Crear eventos falsos o engañosos intencionalmente</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Nuestros Derechos</h4>
                  <p className="text-muted-foreground">
                    Todo el contenido, características y funcionalidad de la aplicación son propiedad exclusiva nuestra
                    y están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Su Contenido</h4>
                  <p className="text-muted-foreground">
                    Usted conserva los derechos sobre el contenido que crea, pero nos otorga una licencia para usar,
                    mostrar y distribuir dicho contenido en relación con el servicio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Privacidad y Protección de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Su privacidad es importante para nosotros. El uso de su información personal se rige por nuestra
                Política de Privacidad, que forma parte integral de estos términos. Le recomendamos revisar nuestra
                Política de Privacidad regularmente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitaciones del Servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Disponibilidad</h4>
                  <p className="text-muted-foreground">
                    El servicio depende de la disponibilidad de WhatsApp y Google Calendar. No garantizamos
                    disponibilidad 24/7 y pueden ocurrir interrupciones por mantenimiento o problemas técnicos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Precisión</h4>
                  <p className="text-muted-foreground">
                    Aunque nuestro sistema de IA es avanzado, recomendamos verificar siempre los eventos creados. No
                    somos responsables por malentendidos en la interpretación de mensajes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">En la máxima medida permitida por la ley:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>El servicio se proporciona "tal como está" sin garantías</li>
                <li>No seremos responsables por daños indirectos o consecuentes</li>
                <li>Nuestra responsabilidad total no excederá el monto pagado por el servicio</li>
                <li>No garantizamos disponibilidad ininterrumpida del servicio</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos
                serán notificados con al menos 30 días de anticipación. El uso continuado del servicio después de los
                cambios constituye su aceptación de los nuevos términos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Ley Aplicable y Jurisdicción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estos términos se rigen por las leyes de España sin considerar conflictos de principios legales.
                Cualquier disputa será resuelta en los tribunales competentes de Madrid.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos:
              </p>
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="font-medium">Email: soporte@calendarbot.com</p>
                <p className="font-medium">WhatsApp: +34 XXX XXX XXX</p>
                <p className="text-muted-foreground">Horario de atención: Lunes a Viernes, 9:00 - 18:00 CET</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

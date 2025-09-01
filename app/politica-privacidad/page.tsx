import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad - CalendarBot",
  description: "Política de privacidad del agente de WhatsApp para Google Calendar",
}

export default function PoliticaPrivacidad() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Política de Privacidad - CalendarBot</h1>
          <p className="text-muted-foreground text-lg">
            Última actualización: {new Date().toLocaleDateString("es-ES")}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Información Personal</h4>
                <p className="text-muted-foreground">
                  Recopilamos información que usted nos proporciona a través de WhatsApp y Google Calendar:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Número de teléfono de WhatsApp</li>
                  <li>Mensajes enviados al agente para crear eventos</li>
                  <li>Información de eventos del calendario (fechas, horarios, descripciones)</li>
                  <li>Datos de acceso a Google Calendar (con su autorización)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Información de Uso</h4>
                <p className="text-muted-foreground">
                  Recopilamos automáticamente información sobre cómo utiliza nuestro agente:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Frecuencia y horarios de uso del agente</li>
                  <li>Tipos de eventos creados más frecuentemente</li>
                  <li>Patrones de programación y preferencias</li>
                  <li>Logs de interacciones para mejorar el servicio</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Cómo Utilizamos su Información</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Crear y gestionar eventos en su Google Calendar personal</li>
                <li>Procesar y entender sus solicitudes de programación</li>
                <li>Enviar confirmaciones y recordatorios por WhatsApp</li>
                <li>Mejorar la precisión del procesamiento de lenguaje natural</li>
                <li>Personalizar sugerencias de horarios y eventos</li>
                <li>Proporcionar soporte técnico cuando sea necesario</li>
                <li>Desarrollar nuevas funcionalidades que se añadirán en el futuro</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Integración con Servicios Externos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground">
                    Utilizamos la API de WhatsApp Business para recibir y enviar mensajes. WhatsApp tiene sus propias
                    políticas de privacidad que también se aplican.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Google Calendar</h4>
                  <p className="text-muted-foreground">
                    Accedemos únicamente a su Google Calendar personal con su autorización explícita para crear,
                    modificar y consultar eventos. Cumplimos con las políticas de Google para desarrolladores.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Funcionalidades Futuras</h4>
                  <p className="text-muted-foreground">
                    En el futuro, planificamos integrar funcionalidades adicionales que podrían requerir acceso a otros
                    servicios. Siempre solicitaremos su consentimiento explícito antes de implementar nuevas
                    integraciones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Seguridad de los Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad específicas para proteger sus datos de calendario y conversaciones:
                cifrado end-to-end para mensajes, tokens de acceso seguros para Google Calendar, y almacenamiento
                temporal limitado de información de eventos. Sus datos se procesan únicamente para cumplir con sus
                solicitudes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Sus Derechos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Acceder a su información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Limitar el procesamiento de su información</li>
                <li>Portabilidad de datos</li>
                <li>Oponerse al procesamiento</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de la aplicación
                y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede
                afectar la funcionalidad de la aplicación.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios
                significativos publicando la nueva política en esta página y actualizando la fecha de "última
                actualización".
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información personal,
                puede contactarnos en:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-medium">Email: privacidad@calendarbot.com</p>
                <p className="font-medium">WhatsApp: +34 XXX XXX XXX</p>
                <p className="text-muted-foreground">Responderemos a su consulta dentro de 48 horas.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

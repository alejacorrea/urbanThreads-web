import { useState } from 'react'

const STORAGE_KEY = 'urban_threads_contact_messages'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'DIRECCIÓN',
    lines: ['Calle Urban Style 123', '28001 Madrid, España'],
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'TELÉFONO',
    lines: ['+34 91 123 45 67'],
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'EMAIL',
    lines: ['info@urbanthreads.com'],
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'HORARIO',
    lines: ['Lun - Vie: 9:00 - 18:00', 'Sáb: 10:00 - 14:00'],
  },
]

const initialForm = { nombre: '', apellidos: '', email: '', asunto: '', mensaje: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.email.trim()) e.email = 'Requerido'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.asunto) e.asunto = 'Selecciona un asunto'
    if (!form.mensaje.trim()) e.mensaje = 'Requerido'
    return e
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

   
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    const newMessage = { ...form, timestamp: new Date().toISOString() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newMessage]))

    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-[#1a1a1a] mb-2">
            Contacto
          </h1>
          <p className="text-gray-500 text-sm">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="font-extrabold text-sm tracking-widest uppercase text-[#1a1a1a] mb-8">
              Información de Contacto
            </h2>
            <div className="space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="bg-[#1e2a3a] p-3 flex-shrink-0 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xs tracking-widest text-[#1a1a1a] mb-1">{c.label}</p>
                    {c.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-500">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white p-8 shadow-sm">
            <h2 className="font-extrabold text-sm tracking-widest uppercase text-[#1a1a1a] mb-6">
              Envíanos un Mensaje
            </h2>

            
            <div className="bg-yellow-50 border-l-4 border-[#F5A623] p-3 mb-6">
              <p className="text-xs text-yellow-800">
                <span className="font-bold">Demo:</span> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
              </p>
            </div>

            {submitted && (
              <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-6">
                <p className="text-xs text-green-800 font-medium">
                  ✓ Mensaje guardado correctamente.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={`w-full border text-sm px-3 py-2 outline-none focus:border-[#1e2a3a] transition-colors ${
                      errors.nombre ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-1">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    className="w-full border border-gray-300 text-sm px-3 py-2 outline-none focus:border-[#1e2a3a] transition-colors"
                  />
                </div>
              </div>

             
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full border text-sm px-3 py-2 outline-none focus:border-[#1e2a3a] transition-colors ${
                    errors.email ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-1">
                  Asunto
                </label>
                <select
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  className={`w-full border text-sm px-3 py-2 outline-none focus:border-[#1e2a3a] bg-white transition-colors ${
                    errors.asunto ? 'border-red-400' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="pedido">Consulta general</option>
                  <option value="devolucion">Información de producto</option>
                  <option value="tallas">Estado de pedido</option>
                  <option value="tallas">Devoluciones</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.asunto && <p className="text-red-500 text-xs mt-1">{errors.asunto}</p>}
              </div>

              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-600 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full border text-sm px-3 py-2 outline-none focus:border-[#1e2a3a] resize-none transition-colors ${
                    errors.mensaje ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e2a3a] hover:bg-[#2c3e52] text-white font-bold text-xs tracking-widest uppercase py-4 transition-colors duration-200"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
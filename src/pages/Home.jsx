import { useNavigate } from 'react-router-dom'

function IconDesign() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  )
}

function IconQuality() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconShipping() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

const features = [
  {
    icon: <IconDesign />,
    title: 'DISEÑO ÚNICO',
    desc: 'Piezas exclusivas con estética urbana y minimalista',
  },
  {
    icon: <IconQuality />,
    title: 'CALIDAD PREMIUM',
    desc: 'Materiales de alta calidad para máxima durabilidad',
  },
  {
    icon: <IconShipping />,
    title: 'ENVÍO RÁPIDO',
    desc: 'Entrega express en 24-48 horas',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      
      <section className="bg-[#222222] text-white py-28 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight mb-3">
          Estilo Urbano
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-[#F5A623] leading-tight mb-6">
          Redefinido
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>
        <button
          onClick={() => navigate('/products')}
          className="bg-[#F5A623] hover:bg-[#e0941e] text-black font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200"
        >
          Explorar Colección
        </button>
      </section>

     
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-4">
              <div className="bg-[#1e2a3a] p-4 inline-flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-extrabold text-sm tracking-widest text-[#1a1a1a]">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
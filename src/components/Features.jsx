import { FiPenTool } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiZap } from "react-icons/fi";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <div className="icon"><FiPenTool /></div>
        <h3>DISEÑO ÚNICO</h3>
        <p>Piezas exclusivas con estética urbana y minimalista</p>
      </div>

      <div className="feature">
        <div className="icon"><FiCheckCircle /></div>
        <h3>CALIDAD PREMIUM</h3>
        <p>Materiales de alta calidad para máxima durabilidad</p>
      </div>

      <div className="feature">
        <div className="icon"><FiZap /></div>
        <h3>ENVÍO RÁPIDO</h3>
        <p>Entrega express en 24-48 horas</p>
      </div>
    </section>
  )
}

export default Features;
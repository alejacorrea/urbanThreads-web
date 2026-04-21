import "../index.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          ESTILO URBANO
          <span className="hero__title--accent">REDEFINIDO</span>
        </h1>
        <p className="hero__subtitle">
          Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>
        <a href="#" className="hero__btn">EXPLORAR COLECCIÓN</a>
      </div>
    </section>
  );
}
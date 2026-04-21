import ProductCard from "../components/ProductCard"

const products = [
  {
    title: "Camiseta Básica Urban",
    description: "Algodón 100% orgánico",
    price: "€29",
  },
  {
    title: "Jeans Slim Fit",
    description: "Denim premium stretch",
    price: "€89",
  },
  {
    title: "Sudadera Oversize",
    description: "Algodón French Terry",
    price: "€65",
  },
  {
    title: "Chaqueta Bomber",
    description: "Nylon resistente al agua",
    price: "€120",
  },
  {
    title: "Gorra Snapback",
    description: "Bordado Premium",
    price: "€35",
  },
  {
    title: "Zapatillas Urban",
    description: "Suela de goma antideslizante",
    price: "€95",
  },
]

const Products = () => {
  return (
    <section className="products">
      <h2>NUESTRA COLECCIÓN</h2>
      <p className="subtitle">Estilo urbano para cada ocasión</p>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Products
const ProductCard = ({ title, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {}
      </div>

      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="product-footer">
          <span className="price">{price}</span>
          <button>AÑADIR</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
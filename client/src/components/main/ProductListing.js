import Product from "./Product"

const ProductListing = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <Product 
          key={product.title}
          product={product} 
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
        />
      })}
    </div>
  )
}

export default ProductListing
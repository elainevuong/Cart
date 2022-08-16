import Product from "./Product"

const ProductListing = ({ products, onDeleteProduct }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <Product 
          product={product} 
          onDeleteProduct={onDeleteProduct}
        />
      })}
    </div>
  )
}

export default ProductListing
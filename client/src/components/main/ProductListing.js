import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../features/products/products"

import Product from "./Product"

const ProductListing = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <Product 
          key={product.title}
          product={product} 
        />
      })}
    </div>
  )
}

export default ProductListing
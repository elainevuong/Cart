import axios from "axios"
import Product from "./Product"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { productsReceived } from "../../actions/productActions"

const ProductListing = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      const products = response.data;
      dispatch(productsReceived(products))
    }

    fetchProducts()
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
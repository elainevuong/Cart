import axios from "axios";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import EditForm from "./EditForm";
import { deleteProduct, addToCart } from "../../actions/productActions";

const Product = ({ product }) => {
  const dispatch = useDispatch()

  const [ editFormVisible, setEditFormVisible ] = useState(false)
  
  const handleDeleteProduct = async () => {    
    if (window.confirm(`Are you sure you want to delete ${product.title}?`)) {
      await axios.delete(`/api/products/${product._id}`)
      dispatch(deleteProduct(product._id))
    }
  }  

  const handleAddToCart = async (event) => {
    event.preventDefault()

    const response = await axios.post('/api/add-to-cart', { productId: product._id })
    const data = response.data;
    dispatch(addToCart(data))
  }

  if (editFormVisible) {
    return (
      <div className="product">
        <div className="product-details">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="quantity">{product.quantity} left in stock</p>
          <div className="actions product-actions">
            <button 
              className={`button add-to-cart ${product.quantity <= 0 ? 'disabled' : ''}`}
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </button>
            <button className="button edit">Edit</button>
          </div>
          <a 
          className="delete-button"
          onClick={() => handleDeleteProduct()}><span>X</span></a>
        </div>
        <EditForm 
          setEditFormVisible={setEditFormVisible}
          product={product}
        />
      </div>
    )
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <button 
            className={`button add-to-cart ${product.quantity <= 0 ? 'disabled' : ''}`}
            onClick={(e) => handleAddToCart(e)}
          >
            Add to Cart
          </button>
          <button 
            className="button edit"
            onClick={() => setEditFormVisible(true)}
          >Edit</button>
        </div>
        <a 
          className="delete-button"
          onClick={() => handleDeleteProduct()}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product
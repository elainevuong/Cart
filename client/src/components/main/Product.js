import { useState } from "react";
import EditForm from "./EditForm";

const Product = ({ product, onDeleteProduct, onEditProduct, onAddToCart }) => {
  const [ editFormVisible, setEditFormVisible ] = useState(false)

  const handleDeleteProduct = event => {
    event.preventDefault();
    
    if (window.confirm(`Are you sure you want to delete ${product.title}?`)) {
      onDeleteProduct(product._id)
    }
  }  

  const handleAddToCart = event => {
    event.preventDefault();

    onAddToCart(product._id)
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
              className="button add-to-cart"
              onClick={(e) => handleAddToCart(e)}
            >
              Add to Cart
            </button>
            <button className="button edit">Edit</button>
          </div>
          <button
            className="delete-button"
            onClick={(e) => handleDeleteProduct(e)}  
          ><span>X</span>
          </button>
        </div>
        <EditForm 
          setEditFormVisible={setEditFormVisible}
          product={product}
          onEditProduct={onEditProduct}
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
            className="button add-to-cart"
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
          onClick={(e) => handleDeleteProduct(e)}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product
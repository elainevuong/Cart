import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editProduct } from "../../actions/productActions";

// const handleEditProduct = async (updateProduct, productId, callback) => {
//   await axios.put(`/api/products/${productId}`, updateProduct)
//   // const updatedProduct = response.data
//   // setProducts(products.map(product => productId === product._id ? updatedProduct : product))

//   // if (callback) {
//   //   callback()
//   // }
// }

const EditForm = ({ setEditFormVisible, product, onEditProduct }) => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState(product.title);
  const [ price, setPrice ] = useState(product.price);
  const [ quantity, setQuantity ] = useState(product.quantity);

  const handleEditProduct = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      title,
      price,
      quantity,
    }

    const productId = product._id

    const response = await axios.put(`/api/products/${productId}`, updatedProduct)
    const editedProduct = response.data;
    dispatch(editProduct(editedProduct))
    clearInputs()
  }

  const clearInputs = () => {
    setEditFormVisible(false);
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
      <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input 
            type="text" 
            id="product-name" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input 
            type="text" 
            id="product-price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input 
            type="text" 
            id="product-quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button className="button" onClick={(e) => handleEditProduct(e)}>
            Update
          </button>
          <button className="button" onClick={() => setEditFormVisible(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
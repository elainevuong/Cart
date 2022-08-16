import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../features/products/products";

// const handleEditProduct = async (updateProduct, productId, callback) => {
//   const response = await axios.put(`/api/products/${productId}`, updateProduct)
//   const updatedProduct = response.data
//   // setProducts(products.map(product => productId === product._id ? updatedProduct : product))

//   if (callback) {
//     callback()
//   }
// }

const EditForm = ({ setEditFormVisible, product }) => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState(product.title);
  const [ price, setPrice ] = useState(product.price);
  const [ quantity, setQuantity ] = useState(product.quantity);

  const handleEditProduct = event => {
    event.preventDefault();

    const updateProduct = {
      title,
      price,
      quantity,
    }

    dispatch(editProduct({
      productId: product._id,
      updateProduct: updateProduct,
      callback: clearInputs
    }))
    // onEditProduct(updatedProduct, productId, clearInputs)
  }

  const clearInputs = () => {
    setEditFormVisible(false);
  }

  const handleCancelEditForm = event => {
    event.preventDefault();
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
          <button className="button" onClick={(e) => handleCancelEditForm(e)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
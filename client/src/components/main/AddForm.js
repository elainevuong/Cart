import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/productActions';

const AddForm = () => {
  const dispatch = useDispatch()

  const [ addFormVisible, setAddFormVisible ] = useState(false)
  
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ quantity, setQuantity ] = useState('');

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const newProduct = {
      title,
      quantity,
      price,
    }

    const response = await axios.post('/api/products', newProduct);
    const product = response.data
    dispatch(addProduct(product))
    clearFormInputs()
  }

  const clearFormInputs = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
    setAddFormVisible(false)
  }

  return (
    <div className={`add-form ${addFormVisible ? 'visible' : ''}`}>
      <p>
        <button
          className="button add-product-button"
          onClick={() => setAddFormVisible(!addFormVisible)}
        >
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
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
          <button
            className="button"
            onClick={(e) => handleAddProduct(e)}
          >
            Add
          </button>
          <button
            className="button"
            onClick={() => setAddFormVisible(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddForm
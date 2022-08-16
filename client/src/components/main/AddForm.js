import { useState } from 'react'

const AddForm = ({ onAddProduct }) => {
  const [ addFormVisible, setAddFormVisible ] = useState(false)
  const [ title, setTitle ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ quantity, setQuantity ] = useState('');


  const handleAddProduct = event => {
    event.preventDefault();
    const newProduct = {
      title,
      quantity,
      price,
    }

    onAddProduct(newProduct, clearFormInputs)
  }

  const clearFormInputs = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
    setAddFormVisible(false)
  }

  return (
    <div class={`add-form ${addFormVisible ? 'visible' : ''}`}>
      <p>
        <a 
          class="button add-product-button"
          onClick={() => setAddFormVisible(!addFormVisible)}
        >
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input 
            type="text" 
            id="product-name" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input 
            type="text" 
            id="product-price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input 
            type="text" 
            id="product-quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div class="actions form-actions">
          <a 
            class="button"
            onClick={(e) => handleAddProduct(e)}
          >
            Add
          </a>
          <a 
            class="button"
            onClick={() => setAddFormVisible(false)}
          >Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddForm
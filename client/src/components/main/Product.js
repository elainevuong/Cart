const Product = ({ product, onDeleteProduct }) => {
  const handleDeleteProduct = event => {
    event.preventDefault();
    
    if (window.confirm(`Are you sure you want to delete ${product.title}?`)) {
      onDeleteProduct(product._id)
    }
  }  


  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit">Edit</a>
        </div>
        <a 
          class="delete-button"
          onClick={(e) => handleDeleteProduct(e)}  
        ><span>X</span></a>
      </div>
    </div>
  )
}

export default Product
const products = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload
    }

    case 'ADD_PRODUCT': {
      return state.concat(action.payload)
    }

    case 'DELETE_PRODUCT': {
      let productId = action.payload
      return state.filter(product => product._id !== productId)
    }

    case 'EDIT_PRODUCT': {
      let editedProduct = action.payload
      return state.map(product => product._id === editedProduct._id ? editedProduct : product)
    }

    case 'ADD_TO_CART': {
      let updatedProduct = action.payload.product
      return state.map(product => product._id === updatedProduct._id ? updatedProduct : product)
    }
    
    default:
      return state;
  }
};

export default products;
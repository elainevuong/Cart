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
      console.log('within the delete product reducer')
      return state.filter(product => product._id !== productId)
    }
    default:
      return state;
  }
};

export default products;
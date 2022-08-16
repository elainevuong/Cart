const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload
    }
    case 'CHECKOUT': {
      return [];
    }
    default: return state;
  }
}

export default cart
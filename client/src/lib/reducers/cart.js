const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload
    }

    case 'CHECKOUT': {
      return [];
    }

    case 'ADD_TO_CART': {
      let updatedItem = action.payload.item

      let replaced = false;
      let updatedState = state.map(item => {
        if (item._id === updatedItem._id) {
          replaced = true;
          return updatedItem
        }
        return item
      })

      if (!replaced) {
        return state.concat(updatedItem)
      }

      return updatedState
    }

    default: return state;
  }
}

export default cart

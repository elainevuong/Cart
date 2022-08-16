export const productsReceived = products => {
  return {
    type: "PRODUCTS_RECEIVED",
    payload: products
  };
};

export const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

export const deleteProduct = productId => {
  console.log('within the delete product action')
  return {
    type: "DELETE_PRODUCT",
    payload: productId
  };
};
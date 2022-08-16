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
  return {
    type: "DELETE_PRODUCT",
    payload: productId
  };
};

export const editProduct = editedProduct => {
  return {
    type: "EDIT_PRODUCT",
    payload: editedProduct
  }
}
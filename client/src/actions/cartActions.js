export const cartReceived = cart => {
  return {
    type: "CART_RECEIVED",
    payload: cart
  };
};

export const checkoutCart = () => {
  return {
    type: "CHECKOUT"
  }
}
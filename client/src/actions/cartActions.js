export const cartReceived = cart => {
  return {
    type: "CART_RECEIVED",
    payload: cart
  };
};

export const checkoutCart = () => {
  console.log('within checkout cart action')
  return {
    type: "CHECKOUT"
  }
}
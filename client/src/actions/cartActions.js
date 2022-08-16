export const cartReceived = cart => {
  return {
    type: "CART_RECEIVED",
    payload: cart
  };
};
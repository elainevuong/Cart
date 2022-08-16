import CartItems from "./CartItems"

const HeaderCartSummary = ({ cart, onHandleCheckout }) => {
  const handleCheckout = () => {
    if (window.confirm(`Are you sure you want to checkout?`)) {
      onHandleCheckout()
    }
  }

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="button checkout disabled">Checkout</button>
      </div>
    )
  } else {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <CartItems 
          cart={cart}
        />
        <button
          className="button checkout"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    )
  }
}

export default HeaderCartSummary
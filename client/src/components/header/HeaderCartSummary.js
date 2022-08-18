import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart, checkout } from "../../features/cart/cart"
import CartItems from "./CartItems"

const HeaderCartSummary = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  const handleCheckout = () => {
    if (window.confirm(`Are you sure you want to checkout?`)) {
      dispatch(checkout())
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
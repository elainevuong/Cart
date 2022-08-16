import axios from "axios"
import CartItems from "./CartItems"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { cartReceived } from "../../actions/cartActions"

const HeaderCartSummary = ({ onHandleCheckout }) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart');
      const cart = response.data;
      dispatch(cartReceived(cart))
    }
    fetchCart();
  }, [dispatch])


  const handleCheckout = () => {
    onHandleCheckout()
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
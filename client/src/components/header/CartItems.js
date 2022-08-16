import CartItem from "./CartItem"

const CartItems = ({ cart }) => {
  let cartTotal = cart.reduce((total, current) => total + (current.price * current.quantity), 0)

  return (
    <table className="cart-items">
      <tbody>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map(item => 
          <CartItem 
            item={item} 
            key={item._id}
          />
        )}
        <tr>
          <td colSpan="3" className="total">Total: ${cartTotal.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CartItems
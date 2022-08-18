const CartItem = ({ item }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>${item.price.toFixed(2)}</td>
    </tr>
  )
}

export default CartItem
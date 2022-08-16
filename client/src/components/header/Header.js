import HeaderCartSummary from "./HeaderCartSummary"

const Header = ({ cart, onHandleCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <HeaderCartSummary 
        cart={cart}
        onHandleCheckout={onHandleCheckout}
      />
    </header>
  )
}

export default Header
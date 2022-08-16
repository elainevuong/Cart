import HeaderCartSummary from "./HeaderCartSummary"

const Header = ({ onHandleCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <HeaderCartSummary 
        onHandleCheckout={onHandleCheckout}
      />
    </header>
  )
}

export default Header
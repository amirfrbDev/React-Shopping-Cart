import CheckoutCard from "../components/CheckoutCard";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { useCart } from "../context/CartProvider"

function CheckoutPage() {

  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload })
  }

  if (!state.itemsCounter) {
    return <div>
      <p>Empty</p>
    </div>
  }

  return (
    <div>
      <CheckoutSidebar state={state} clickHandler={clickHandler} />
      <div>{state.selectedItems.map(product =>
        <CheckoutCard key={product.id} product={product} clickHandler={clickHandler} />
      )}</div>
    </div>
  )
}

export default CheckoutPage
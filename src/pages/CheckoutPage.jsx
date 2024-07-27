import CheckoutCard from "../components/CheckoutCard";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { useCart } from "../context/CartProvider"

import styles from "../styles/CheckoutPage.module.css"

function CheckoutPage() {

  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload })
  }

  if (!state.itemsCounter) {
    return <div className={styles.container}>
      <p>Empty</p>
    </div>
  }

  return (
    <div className={styles.container}>
      <CheckoutSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {
          state.selectedItems.map(product =>
            <CheckoutCard key={product.id} product={product} clickHandler={clickHandler} />
          )
        }
      </div>
    </div>
  )
}

export default CheckoutPage
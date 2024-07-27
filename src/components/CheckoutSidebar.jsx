import { BsPatchCheck } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { TbChecklist } from "react-icons/tb"

import styles from "../styles/CheckoutSidebar.module.css"

function CheckoutSidebar({ state, clickHandler }) {
    return (
        <div>
            <div>
                <TbChecklist />
                <p>Total:</p>
                <span>{state.total}</span>
            </div>
            <div>
                <FaHashtag />
                <p>Quantity:</p>
                <span>{state.quantity}</span>
            </div>
            <div>
                <BsPatchCheck />
                <p>Status:</p>
                <span>{!state.checkout && "Pending..."}</span>
            </div>
            <button onClick={() => clickHandler("CHECKOUT", null)}>Checkout</button>
        </div>
    )
}

export default CheckoutSidebar
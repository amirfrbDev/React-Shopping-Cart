import React from 'react'
import { shortenText } from '../helpers/helper'
import { MdDeleteOutline } from 'react-icons/md'
import styles from "../styles/CheckoutCard.module.css"

function CheckoutCard({ product, clickHandler }) {

    const { image, title, quantity } = product

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{shortenText(title)}</p>
            <div className={styles.actions}>
                {quantity === 1 && (
                    <button onClick={() => clickHandler("REMOVE_ITEM", product)}>
                        <MdDeleteOutline />
                    </button>
                )}
                {quantity > 1 && (<button onClick={() => clickHandler("DECREASE_ITEM", product)}>-</button>)}
                <span>{quantity}</span>
                <button onClick={() => clickHandler("INCREASE_ITEM", product)}>+</button>
            </div>
        </div>
    )
}

export default CheckoutCard
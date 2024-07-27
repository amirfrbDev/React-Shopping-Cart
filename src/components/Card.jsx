import React from 'react'

import { Link } from 'react-router-dom'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { MdDeleteOutline } from 'react-icons/md'

import { productQuantity, shortenText } from '../helpers/helper'

import styles from "../styles/Card.module.css"
import { useCart } from '../context/CartProvider'

function Card({ product }) {

    const { id, title, image, price } = product
    const [state, dispatch] = useCart();



    const quantity = productQuantity(state.selectedItems, id);

    const clickHandler = (type) => {
        dispatch({ type, payload: product })
    }


    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shortenText(title)}</h3>
            <p>${price}</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div>


                    {quantity === 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM")}>
                            <MdDeleteOutline />
                        </button>

                    )}
                    {quantity > 1 && (<button onClick={() => clickHandler("DECREASE_ITEM")}>
                        -
                    </button>)}

                    {!!quantity && <span>{quantity}</span>}

                    {
                        quantity === 0 ? (<button onClick={() => clickHandler("ADD_ITEM")}>
                            <TbShoppingBagCheck />
                        </button>) :
                            (<button onClick={() => clickHandler("INCREASE_ITEM")}>
                                +
                            </button>)
                    }






                </div>
            </div>
        </div>
    )
}

export default Card
import React from 'react'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

import styles from "../styles/Layout.module.css"

function Layout({ children }) {

    const [state] = useCart()
    
    return (
        <>
            <header className={styles.header}>
                <Link to="/products">My Shop</Link>
                <Link to="/checkout">
                    <div>
                        <PiShoppingCartSimpleBold />
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>
                </Link>
            </header>
            {children}
            <footer className={styles.footer}>
                <p> Made With ❤️ By <a href='#'>Amir Mahdi Farajbakhsh</a></p>
            </footer>
        </>
    )
}

export default Layout
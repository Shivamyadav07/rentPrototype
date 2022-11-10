import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linkBox}>
                <img className={styles.iconImage} src='./estatery.png' alt='websitIcon' />
                <h3>Estatery</h3>
                <Link className={styles.link} to="/">Rent</Link>
                <p>Buy</p>
                <p>Sell</p>
                <p>Manage Property</p>
                <p>Resources</p>
                <Link className={styles.link} to="/favorites">Favorites</Link>
            </div>
            <div className={styles.buttonBox}>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>
    )
}

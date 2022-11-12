import React from 'react'
import styles from './DataCard.module.css'

export const DataCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <img src={data.image} alt='cardImage' />
      <div className={styles.information}>
        <div className={styles.price}>
          <p>
            <label>
              ₹{data.price}
            </label>
            /months
          </p>
          <img src='./heart.png' alt='wishlistIcon' />
        </div>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.address}>{data.adress}</p>
        <div className={styles.lastDiv}>
          <div className={styles.beds}>
            <img src='./single-bed.png' alt='icon' />
            <p>{data.beds} Beds</p>
          </div>
          <div className={styles.bathroom}>
            <img src='./bathroom.png' alt='icon' />
            <p>{data.bathroom} Bathroom</p>
          </div>
          <div className={styles.area}>
            <img src='./area-with-pins.png' alt='icon' />
            <p>{data.area} sqr</p>
          </div>
        </div>
      </div>

    </div>
  )
}

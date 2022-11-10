import React from 'react'
import styles from './RentPage.module.css'

export const RentPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchDiv}>
                <h1>Search properties to rent</h1>
                <input type={"text"} placeholder="Search with Search Bar" />
            </div>
            <div className={styles.filterDiv}>
                <div>
                    <select placeholder='Filter by location'>
                        <option value="varanasi">Varanasi</option>
                        <option value="noida">Noida</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>
                
                <div>
                    <input type={"date"} name="moveinDate" />
                </div>

                <div>
                    <select placeholder='Filter by price'>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </div>
    )
}

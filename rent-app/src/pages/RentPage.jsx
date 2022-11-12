import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataCard } from '../components/DataCard'
import { getdata } from '../redux/action'
import styles from './RentPage.module.css'

export const RentPage = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getdata());
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.searchDiv}>
                <h1>Search properties to rent</h1>
                <input type={"text"} placeholder="Search with Search Bar" />
            </div>
            <div className={styles.filterDiv}>
                <div className={styles.location}> Location
                    <select >
                        <option value="varanasi">Varanasi</option>
                        <option value="noida">Noida</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>

                <div className={styles.date}>When
                    <input type={"date"} />
                </div>

                <div className={styles.price}>Price
                    <select style={{ "display": "block" }}>
                        <option value="500">500</option>
                        <option value="2500">2500</option>
                        <option value="5000">5000</option>
                    </select>
                </div>
                <div className={styles.type}>Property Type
                    <select style={{ "display": "block" }}>
                        <option value="houses">Houses</option>
                        <option value="banglo">Banglo</option>
                        <option value="apartments">Apartments</option>
                    </select>
                </div>
                <button>Search</button>
            </div>
            <div className={styles.datadiv}>
                {data.map((e) => {
                    return <DataCard key={e.id} data={e} />
                })}
            </div>
        </div>
    )
}

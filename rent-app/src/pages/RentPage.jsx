import React from 'react'
import { useState } from 'react'
import { DataCard } from '../components/DataCard'
import styles from './RentPage.module.css'

export const RentPage = () => {
    const [data]=useState([{
        "name":"shivam",
        "price":2000,
        "location":"varanasi",
        "address":"chandpur mustafadad varanasi",
        "date":"01/10/22",
        "beds":4,
        "bathroom":2,
        "area":"8*2m",
        "image":"https://media.istockphoto.com/id/83802508/photo/stairs-leading-to-craftsman-house.jpg?s=612x612&w=0&k=20&c=Ai2VREsZR-l8XPf0Cn5VKputzmv0bSk4CoUUW3DZf1I=",
        "id":1
    }])
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
            <div>
                {data.map((e)=>{
                    return <DataCard key={e.id} data={e} />
                })}
            </div>
        </div>
    )
}

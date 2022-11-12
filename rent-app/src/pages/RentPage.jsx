import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataCard } from '../components/DataCard'
import { getdata } from '../redux/action'
import styles from './RentPage.module.css'

export const RentPage = () => {
    const mydata = useSelector((state) => state.data);
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("");
    const [type, setType] = useState("")
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useDispatch();

    function handleSearch(){
        axios.get(`https://shivam-yadav-json-server-data.herokuapp.com/property?location=${location}&type=${type}`)
        .then((res)=>{
            setData(res.data);
        })
    }

    async function mygetdata() {
        let data = await fetch("https://shivam-yadav-json-server-data.herokuapp.com/property")
        data = await data.json();
        console.log(data)
        setData(data);
    }

    useEffect(() => {
        mygetdata();
        dispatch(getdata());
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.searchDiv}>
                <h1>Search properties to rent</h1>
                <input
                    type={"text"}
                    placeholder="Search with Search Bar"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={styles.filterDiv}>
                <div className={styles.location}> Location
                    <select onChange={(e) => setLocation(e.target.value)} >
                        <option value="varanasi">Varanasi</option>
                        <option value="noida">Noida</option>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>

                <div className={styles.date}>When
                    <input type={"date"} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className={styles.price}>Price
                    <select onChange={(e) => setPrice(e.target.value)} style={{ "display": "block" }}>
                        <option value="500">500</option>
                        <option value="2500">2500</option>
                        <option value="5000">5000</option>
                    </select>
                </div>
                <div className={styles.type}>Property Type
                    <select style={{ "display": "block" }} onChange={(e) => setType(e.target.value)}>
                        <option value="duplex">Duplex</option>
                        <option value="apartment">Apartment</option>
                    </select>
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className={styles.datadiv}>
                {data.map((e) => {
                    return <DataCard key={e.id} data={e} />
                })}
            </div>
        </div>
    )
}

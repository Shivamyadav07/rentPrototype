import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { DataCard } from '../components/DataCard';
import styles from './FavoritesPage.module.css'

export const FavoritesPage = () => {
  const [data, setData] = useState([]);
  const getFavoriteData = () => {
    axios.get('https://shivam-yadav-json-server-data.herokuapp.com/favorites')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    getFavoriteData();
  }, []);

  return (
    <div className={styles.datadiv}>
      {data.map((e) => {
        return <DataCard key={e.id} data={e} />
      })}
    </div>

  )
}

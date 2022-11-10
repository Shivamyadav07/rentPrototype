import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from './FavoritesPage'
import { RentPage } from './RentPage'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<RentPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
    )
}

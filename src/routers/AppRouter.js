import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { LandingPage } from '../components/landignpage/LandingPage'
import { Shop } from '../components/landignpage/components/Shop'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<LandingPage />} />
                <Route path='/shop' element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}

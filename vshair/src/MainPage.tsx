import React, { useState } from 'react'
import './MainPage.css';
import { Navbar } from './Navbar.tsx';
import { Aboutme } from './Aboutme.tsx';
import { Pricing } from './Pricing.tsx';
import { Booking } from './Booking.tsx';
export const MainPage = () => {
    const page = useState(0);
    
  return (
    <div className="background">
        <Navbar />
        <Aboutme />
        <Booking />
        <Pricing />
    </div>
  )
}

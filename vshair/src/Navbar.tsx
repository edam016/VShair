import React from 'react'

export const Navbar = () => {

    const navbarData = ([['1', 'Home'],['2', 'About Me'], ['3', 'Bookings']]);
    return (
        <div style={{ display: 'flex', margin: '30px', justifyContent: "flex-end"}}>
            {navbarData.map((value, key) => (
                <div id={value[0]} key={key} style={{ paddingRight: "30px"}}>
                    {value[1]}
                </div>
            ))}
        </div>
    )
}

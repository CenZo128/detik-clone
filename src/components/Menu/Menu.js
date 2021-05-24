import React, { useState } from 'react'

export default function Menu() {

    const initialState = [
        "detikNews", "detikFinance", "detikWow", "detikOto", "detikInet",
        "detikHot", "detikSport", "detikTravel", "detikFood", "detikHealth"
    ]

    const [menus, setMenus] = useState(initialState)

    return (
        <div className="menu bg-gradient py-3">
            {
                menus.map(menu => {
                    return (
                    <div className="menu-item">
                        <a href="#">{menu}</a>
                    </div>
                    )
                })
            }
            
        </div>
    )
}

import React from 'react'
import Logo from '../../images/logo-detikcom.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img className="img-fluid" src={Logo} alt="Logo"/> 
            </div>
            <div className="header-banner">
                <img className="img-fluid" src="https://via.placeholder.com/750x100?text=Banner+Ads" alt="Banner" />
            </div>
        </div>
    )
}

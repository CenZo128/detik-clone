import React from 'react'
import './FixedMenu.css'

export default function FixedMenu() {
    return (
        <div className="container-fluid sticky-top">
            <div className="fixed-menu">
                <div className="fixed-menu-logo">
                    <button className="btn btn-blue">
                        <i className="fa fa-bars me-3 "></i>MENU
                    </button>
                </div>
                <div className="fixed-menu-search">

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Cari Berita" aria-label="Cari Berita" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                    </div>
                </div>
                <div className="fixed-menu-login">
                    <button className="btn btn-blue me-3">Daftar detikID</button>
                    <button className="btn btn-outline-blue">Masuk</button>
                </div>
            </div>
        </div>
    )
}

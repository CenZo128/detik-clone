import React from 'react'

export default function Headline() {
    return (
        <div className="headline card">
            {/* <div className="card-header"> */}
                <img className="card-img-top" src="https://via.placeholder.com/694x390?text=Headline+News" />
            {/* </div> */}
            <div className="card-body bg-gradient">
                <div className="row">
                    <div className="col-3">
                    <small className="text-orange">Berita Terkait</small>
                        
                    </div>
                    <div className="col-9 d-flex align-items-center justify-content-center">
                        <div className="line-white"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipis</p>
                    </div>
                    <div className="col-6">
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

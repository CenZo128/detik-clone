import React from 'react'

function CardItem(props) {

    const { image, title, date } = props.news;
    return (
        <div className="card mb-3">
            <div className="row">

                <div className="col-5">
                    <img className="img-fluid" src={image} />

                </div>
                <div className="col-7">
                    <p className="fw-bold">{title}</p>
                    <small className="text-muted">{date}</small>
                </div>

            </div>
        </div>
    )
}

export default CardItem

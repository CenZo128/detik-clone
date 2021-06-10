import React, { useState } from 'react'

function Tags() {

    const [tags, setTags] = useState([
        {
            name: "Elon Musk",
            tweets: 1000000
        },
        {
            name: "Sembako",
            tweets: 500000
        },
        {
            name: "Ppn 12 persen",
            tweets: 700000
        },
        {
            name: "MCD X BTS",
            tweets: 350000
        },
        {
            name: "Tesla Goes to Indonesia",
            tweets: 1200000
        }
    ])
    return (
        <>
            <h3 className="text-blue mb-3">Tag Terpopuler</h3>
            {
                tags.map(tag => {
                    const { name, tweets } = tag;
                    return (
                        <p className="fs-5 fw-bold"><span className="text-muted mr-3">#</span> <span>{name}</span></p>

                    )
                })
            }
        </>
    )
}

export default Tags

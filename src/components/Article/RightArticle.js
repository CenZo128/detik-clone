import React, { useState } from 'react'
import CardItem from './CardItem'
import TableData from './TableData'
import Tags from './Tags'


function RightArticle() {

    const [news, setNews] = useState([
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+1",
            title: "Lorem ipsum is a dummy text 1",
            date: "10 Juni 2021"
        },
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+2",
            title: "Lorem ipsum is a dummy text 2",
            date: "9 Juni 2021"
        },
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+3",
            title: "Lorem ipsum is a dummy text 3",
            date: "12 Juni 2021"
        }
    ])

    return (
        <>
            {news.map(berita => {
                // const { title, date } = berita;
                return (
                    <CardItem news={berita}></CardItem>
                )
            })}
            <hr></hr>
            <TableData></TableData>
            <hr></hr>
            <Tags></Tags>
        </>
    )
}

export default RightArticle

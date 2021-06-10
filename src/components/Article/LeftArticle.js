import React, { useState } from 'react'
import Headline from './Headline'
import NewsFeed from './NewsFeed'
function LeftArticle() {

    const [newsFeeds, setNewsFeeds] = useState([
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+1",
            title: "Lorem ipsum is a dummy text 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "10 Juni 2021"
        },
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+2",
            title: "Lorem ipsum is a dummy text 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "9 Juni 2021"
        },
        {
            image: "https://via.placeholder.com/694x390?text=Headline+News+3",
            title: "Lorem ipsum is a dummy text 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "12 Juni 2021"
        }
    ])

    return (
        <>
            <Headline></Headline>
            <hr></hr>
            <NewsFeed newsFeeds={newsFeeds}></NewsFeed>
        </>
    )
}

export default LeftArticle

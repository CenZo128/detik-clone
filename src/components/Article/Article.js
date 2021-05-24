import React from 'react'
import Headline from './Headline'

function Article() {
    return (
        <div className="article py-3">
            <div className="row">
                <div className="col-md-8">
                    <Headline></Headline>
                </div>
                <div className="col-md-4">
                    Lorem Ipsum
                </div>
            </div>
        </div>
    )
}

export default Article

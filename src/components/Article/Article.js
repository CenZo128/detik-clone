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
                    <div className="row">
                        <div className="col-12">
                            <p className="text-blue">Do Your Magic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article

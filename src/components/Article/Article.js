import React from 'react'
import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'

function Article() {
    return (
        <div className="article py-3">
            <div className="row">
                <div className="col-md-8">
                    <LeftArticle></LeftArticle>
                </div>
                <div className="col-md-4 right-article">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-blue">Do Your Magic</p>
                            <RightArticle></RightArticle>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article

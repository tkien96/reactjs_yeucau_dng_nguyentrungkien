import './../css/article-item.css'
import Button from './shared/Button'

function ArticleItem (props) {

    const { type } = props

    if(type === 2 || type === 3){
        return (
            <div className="popular-news__list--card">
                <article className={ type === 2 ? 'article-item style-card' : 'article-item style-card style-row' }>
                    <div className="article-item__thumbnail">
                        <a href="#"> <img src="./images/blog-1.jpg" alt="./images/blog-1.jpg" /></a>
                    </div>
                    <div className="article-item__content">
                        <ul className="article-item__categories">
                            <li><Button href="#" btn="btn btn-category" text="News" type={1} show={true} /></li>
                            <li><Button href="#" btn="btn btn-category" text="News" type={1} show={true} /></li>
                        </ul>
                        <ul className="article-item__stats">
                            <li>
                                <i className="icons ion-ios-eye" />
                                <span className="text">Views</span>
                            </li>
                        </ul>
                        <h2 className="article-item__title">
                        <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                        </h2>
                        <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting
                        syntax. Its design allows it to…</p>
                        <div className="article-item__info">
                        <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                            <img src="./images/john-doe.png" alt="john-doe" />
                            </a>
                        </div>
                        <div className="article-item__info-right">
                            <div className="article-item__author-name">
                            <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                            <div className="date">June 02, 2020</div>
                            <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                </path>
                                </svg>
                                1 min</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }

    if(type === 4){
        return (
            <div className="tcl-col-12 tcl-col-md-6">
                <article className="article-item style-card">
                    <div className="article-item__thumbnail">
                        <a href="#">
                        <img src="./images/blog-1.jpg" alt="./images/blog-1.jpg" />
                        </a>
                    </div>
                    <div className="article-item__content">
                        <h2 className="article-item__title">
                        <a href="/post-detail.html">Only Someone Who's Seen The Mummy Will Pass This</a>
                        </h2>
                        <div className="article-item__info">
                        <div className="article-item__info-right">
                            <div className="article-item__author-name">
                            <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                            <div className="date">June 02, 2020</div>
                            <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                </path>
                                </svg>
                                1 min</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }

    return (
        <div className="latest-news__card">
            <article className="article-item">
                <div className="article-item__thumbnail">
                    <a href="#"><img src="./images/blog-1.jpg" alt="./images/blog-1.jpg" /></a>
                </div>
                <div className="article-item__content">
                    <h2 className="article-item__title">
                    <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
                        Pass This</a>
                    </h2>
                    <div className="article-item__info">
                        <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                            <img src="./images/john-doe.png" alt="john-doe" />
                            </a>
                        </div>
                        <div className="article-item__info-right">
                            <div className="article-item__author-name">
                            <a href="#"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                            <div className="date">June 02, 2020</div>
                            <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                </path>
                                </svg>
                                1 min</div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ArticleItem
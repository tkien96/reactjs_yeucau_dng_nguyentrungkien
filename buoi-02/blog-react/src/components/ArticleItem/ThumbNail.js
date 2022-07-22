import cls from 'classnames';

function ThumbNail({ href, src, alt }){
    return (
        <div className="article-item__thumbnail">
            <a href={ href }>
                <img src={ src } alt={ alt } />
            </a>
        </div>
    )
}

export default ThumbNail
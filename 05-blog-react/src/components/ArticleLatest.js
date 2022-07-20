import './../css/latest-news-list.css'
import ArticleItem from './ArticleItem'
import MainTitle from './shared/MainTitle'

function ArticleLatest () {
    return (
        <div className="latest-news section">
            <div className="tcl-container">
                <MainTitle title="Latest Articles" viewmore={false} />
                <div className="latest-news__list spacing">
                    <ArticleItem type={1} />
                    <ArticleItem type={1} />
                    <ArticleItem type={1} />
                </div>
            </div>
        </div>
    )
}

export default ArticleLatest
import './../css/latest-news-list.css'
import ArticleItem from './ArticleItem'
import Button from './shared/Button'
import MainTitle from './shared/MainTitle'

function ArticleList(){
    return (
        <div className="articles-list section">
            <div className="tcl-container">
                <MainTitle title="News List" viewmore={true} />
                <div className="tcl-row">
                    <ArticleItem type={4} />
                    <ArticleItem type={4} />
                    <ArticleItem type={4} />
                    <ArticleItem type={4} />
                    <ArticleItem type={4} />
                    <ArticleItem type={4} />
                </div>
                <Button text="Load more" btn="btn btn-primary btn-size-large" type={2} show={true} />
            </div>
            </div>

    )
}

export default ArticleList
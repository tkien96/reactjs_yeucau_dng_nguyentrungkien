import './../css/popular-news-list.css';
import MainTitle from './shared/MainTitle';
import ArticleItem from './ArticleItem';

function ArticlePopular () {

    return (
        <div className="popular-news section bg-white-blue">
            <div className="tcl-container">
                <MainTitle title="Popular Articles" viewmore={true} />
                <div className="popular-news__list spacing">
                <div className="popular-news__list--left">
                    <div className="popular-news__list--row">
                        <ArticleItem type={2} />
                        <ArticleItem type={2} />
                    </div>
                </div>
                <div className="popular-news__list--right">
                    <div className="popular-news__list--row">
                        <ArticleItem type={3} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePopular
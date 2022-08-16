import './popular-news-list.css'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchArticlePopularAsync } from '../../store/post/actions';

function ArticlePopular() {
  const dispatch = useDispatch()
  const populars = useSelector(state => state.Post.articlePopular)
  useEffect(() => {
    dispatch(actFetchArticlePopularAsync())
  }, [dispatch])
  
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="View More" 
          btnProps={{ 
            type: 'default', 
            title: 'View More',
            target: '_blank',
            href: './'
          }}>Popular Articles</MainTitle>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {
                <>
                  <div key={0} className="popular-news__list--card">
                    <ArticleItem post={populars[0]} isStyleCard isShowCategoies isShowDesc />
                  </div>
                  <div key={1} className="popular-news__list--card">
                    <ArticleItem post={populars[1]} isStyleCard isShowCategoies isShowDesc />
                  </div>
                </>
              }
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {
                <div className="popular-news__list--card">
                  <ArticleItem post={populars[2]} isStyleCard isStyleRow isShowDesc />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ArticlePopular
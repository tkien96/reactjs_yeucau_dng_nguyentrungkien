import './popular-news-list.css'
import ArticleItem from '../ArticleItem'
import MainTitle from '../shared/MainTitle';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchArticlePopularAsync } from '../../store/post/actions';
import { actFetchCategoriesAsync } from '../../store/category/actions';
import { setCategoriesData } from "../../helpers";

function ArticlePopular() {
  const dispatch = useDispatch()
  
  const populars = useSelector(state => state.Post.articlePopular)
  const categories = useSelector(state => state.Category.categories)
  const list = setCategoriesData(populars, categories)
  const last = list.pop()

  useEffect(() => {
    dispatch(actFetchArticlePopularAsync())
    dispatch(actFetchCategoriesAsync())
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
                list.map((item, index) => {
                  return (
                    <div key={index} className="popular-news__list--card">
                      <ArticleItem post={item} isStyleCard isShowCategoies isShowDesc />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {
                <div className="popular-news__list--card">
                  <ArticleItem post={last} isStyleCard isStyleRow isShowDesc />
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
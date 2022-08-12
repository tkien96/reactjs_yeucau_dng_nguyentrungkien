import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchArticleLatestAsync } from '../../store/post/actions';

function ArticleLatest() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.Post.articleLatest);

  useEffect(() => {
    dispatch(actFetchArticleLatestAsync());
  }, [dispatch]);

  return (
    <div className="latest-news section">
      <div className="tcl-container">

        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className="latest-news__list spacing">
          {
            posts.map((post, index) => {
              return (
                <div key={index+1} className="latest-news__card">
                  <ArticleItem post={post} />
                </div>
              )
            })
          }

        </div>
      </div>
    </div>

  )
}

export default ArticleLatest
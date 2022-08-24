import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticleGeneralAsync } from "../store/post/actions";

function SearchPage() {
  const queryStr = getQueryStr('q')

  const dispatch = useDispatch();
  const { list: posts, currentPage, totalPages, total } = useSelector(state => state.Post.articlePaging);
  const [loading, setLoading] = useState(false);
  const hasMorePost = currentPage < totalPages;

  useEffect(() => {
    handleLoadMore();
  }, [dispatch]);

  function handleLoadMore() {
    if (loading) return;
    setLoading(true);
    const params = { currentPage: currentPage + 1, search: queryStr };
    dispatch(actFetchArticleGeneralAsync(params)).then(() => {
      setLoading(false);
    })
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
  
        <MainTitle type="search">{total} kết quả tìm kiếm với từ khóa "{ queryStr }"</MainTitle>
        <div className="tcl-row tcl-jc-center">
          {
            posts.map(item => {
              return (
                <div className="tcl-col-12 tcl-col-md-8" key={item.id}>
                  <ArticleItem 
                    isStyleCard 
                    isShowCategoies 
                    isShowAvatar={false} 
                    isShowDesc={false} 
                    post={item}
                  />
                </div>
              )
            })
          }
        </div>
        {
          hasMorePost && (
            <div className="text-center">
              <Button type="primary" size="large" loading={loading} onClick={handleLoadMore}>Tải thêm</Button>
            </div>
          )
        }
      </div>
    </div>

  )
}

export default SearchPage
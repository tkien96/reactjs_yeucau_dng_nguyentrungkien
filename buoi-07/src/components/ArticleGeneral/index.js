import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { actFetchArticleGeneralAsync } from '../../store/post/actions';

function ArticleGeneral() {

  const dispatch = useDispatch()
  const generals = useSelector(state => state.Post.articleGeneral)
  const total   = useSelector(state => state.Post.totalGeneral)

  //const [perPage, setPerPage] = useState(2)
  const [curentPage, setCurentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showLoad, setShowLoad] = useState(true)

  useEffect(() => {
    dispatch(actFetchArticleGeneralAsync(2, curentPage))
    .then( ()=> {
      setLoading(false)
      if(generals.length > 0 && (generals.length + 1) >= total){ 
        setShowLoad(false)
      }
    })
  }, [curentPage])

  function handleClick() {
    setCurentPage(curentPage + 1)
    setLoading(true)
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        <div className="tcl-row">
          {
            generals.map((item, index) => {
              return (
                <div key={index+1} className="tcl-col-12 tcl-col-md-6">
                  <ArticleItem post={item} isStyleCard isShowAvatar={false} />
                </div>
              )
            })
          }
        </div>
        <div className="text-center">{ showLoad && <Button onClick={handleClick} type="primary" size="large" loading={loading}>Tải thêm</Button> }</div>
      </div>
    </div>
  )
}

export default ArticleGeneral
import { actGetListPostsAsync } from './store/actions'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actGetListPostsAsync())
  }, []);
  const posts = useSelector(state => state.listPosts)
  
  posts.map(item => `<div className="card" style={{width: '18rem'}}>
      <img src="${ item.url_image }" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">${ item.fullname }</h5>
        <p className="card-text">${ item.post_content }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>`)
}

export default App;
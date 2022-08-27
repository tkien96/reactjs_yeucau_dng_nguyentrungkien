
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"

import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailAsync } from "../store/post/actions";

function PostDetailPage() {
  const params = useParams()
  const dispatch = useDispatch();
  
  const result = useSelector(state => state.Post.detail);
  const detail = result[0];

  useEffect(() => {
    dispatch(actFetchDetailAsync(params)).then(() => {})
  }, [dispatch]);

  return (
    <main className="post-detail">
      <div className="spacing" />
      <PostDetailHead title={ detail?.title.rendered } author={ detail?.author_data } date={detail?.date} commentCount={detail?.comment_count} viewCount={detail?.view_count} />
      <div className="spacing" />
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent content={ detail?.content } />
            <PostDetailSidebar userId={detail?.author} />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage
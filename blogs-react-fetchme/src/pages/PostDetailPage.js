
import { useParams } from "react-router-dom"
import PostDetailContent from "../components/PostDetail/PostDetailContent"
import PostDetailHead from "../components/PostDetail/PostDetailHead"
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar"

import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetail } from "../store/post/actions";

function PostDetailPage() {
  const params = useParams()
  const dispatch = useDispatch();
  
  const {detail} = useSelector(state => state.Post.detail);

  useEffect(() => {
    dispatch(actFetchDetail(params)).then(() => {})
  }, [dispatch]);

  return (
    <main className="post-detail">
      <div className="spacing" />
      
      <PostDetailHead />
      
      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>

  )
}

export default PostDetailPage
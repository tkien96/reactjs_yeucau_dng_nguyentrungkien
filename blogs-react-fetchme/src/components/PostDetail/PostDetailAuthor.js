import './post-author.css'
import { actGetInfoAsync } from "../../store/auth/actions";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PostDetailAuthor({
  userId
}) {

  const dispatch = useDispatch();
  const info = useSelector(state => state.Auth.info);

  useEffect(() => {
    dispatch(actGetInfoAsync(userId)).then(() => {})
  }, [dispatch]);

  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src="/assets/images/blog-detail.jpg" alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">John Smith</a>
      </div>
      <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
    </div>

  )
}

export default PostDetailAuthor
import dayjs from 'dayjs';
import { DATE_DETAIL } from '../../constants';

function PostDetailHead({
  title,
  author,
  date,
  commentCount,
  viewCount
}) {
  const createdDateObj = dayjs(date);
  const dateFormatted = createdDateObj.format(DATE_DETAIL);

  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{ title }</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="/"><strong>{ author?.nickname }</strong></a>
          </li>
          <li className="item date">
            { dateFormatted }
          </li>
          <li className="item views">
            { viewCount } <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            { commentCount } <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead
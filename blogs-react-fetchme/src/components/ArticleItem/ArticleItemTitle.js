import { Link } from 'react-router-dom';
import { getQueryStr, RegExpKey } from "../../helpers";

export default function ArticleItemTitle({ title, slugLink }) {
  const queryStr = getQueryStr('q')
  if(queryStr !== ""){
    title = RegExpKey(title, queryStr)
  }

  return (
    <h2 className="article-item__title">
      <Link to={slugLink} dangerouslySetInnerHTML={{__html: title}}></Link>
    </h2>
  )
}
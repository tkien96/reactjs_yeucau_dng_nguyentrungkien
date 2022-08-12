// import { Link } from 'react-router-dom';

export default function ArticleItemCategories({categories}) {
  return (
    <ul className="article-item__categories">
      {
        categories.map((item, index) => {
          return (
            <li key={index+1}><a href={item.slug} className="btn btn-category">{item.name}</a></li>
          )
        })
      }
    </ul>
  )
}
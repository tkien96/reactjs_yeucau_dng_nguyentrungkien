import { useSelector } from 'react-redux';

export default function ArticleItemCategories({categories}) {
  const dataCategories = useSelector(state => state.Category.categories)
  return (
    <ul className="article-item__categories">
      { 
        categories.map((item, index) => {
          if(!dataCategories[item]) return null
          return (
            <li key={index+1}><a className="btn btn-category">{dataCategories[item].name}</a></li>
          )
        })
      }
    </ul>
  )
}
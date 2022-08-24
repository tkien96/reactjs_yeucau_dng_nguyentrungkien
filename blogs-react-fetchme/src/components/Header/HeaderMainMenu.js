import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

function HeaderMainMenu() {
  const { menu } = useSelector(state => state.Menu);

  function renderMenu (item) {
    return (
        <li key={item.id}>
          <Link to={item.url}>{ item.title }</Link>
          { item.childItems.length > 0 && <ul>{ item.childItems.map(renderMenu) }</ul> }
        </li>
    )
  }

  return (
    <ul className="header-nav__lists">
      {
        menu.map(renderMenu)
      }
    </ul>
  )
}

export default HeaderMainMenu
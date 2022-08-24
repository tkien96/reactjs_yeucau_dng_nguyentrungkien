import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { actLogout } from "../../store/auth/actions";
import HeaderMainMenu from "./HeaderMainMenu";

function HeaderMenus() {
  const dispatch = useDispatch();
  const { currentUser } =  useSelector(state => state.Auth);

  function handleLogout(){
    dispatch(actLogout())
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <HeaderMainMenu />
        <ul className="header-nav__lists">
            {
              currentUser && <li className="user"><Link to="/account"><i className="icons ion-person" />{ currentUser.name }</Link><ul><li><a onClick={handleLogout} className="logout">Đăng xuất</a></li></ul></li>
            }
            {
              !currentUser && <li className="user"><Link to="/login"><i className="icons ion-person" />Login</Link></li>
            }
        </ul>
      </div>
    </div>
  )
}

export default HeaderMenus
import MainTitle from '../components/shared/MainTitle'
import ArticleItem from '../components/ArticleItem'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
  useLocation
} from "react-router-dom"
function Search() {
  const {search} = useLocation()
  let params = new URLSearchParams(search)

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle type="search">4 Results found for "{params.get("key")}"</MainTitle>
        {/* End Main Title */}
        
        {/* End Row News List */}
        <div className="tcl-row tcl-jc-center">
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem isStyleCard isShowCategoies isShowDesc />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem isStyleCard isShowCategoies isShowDesc />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem isStyleCard isShowCategoies isShowDesc />
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-size-large">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
              </circle>
            </svg>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search
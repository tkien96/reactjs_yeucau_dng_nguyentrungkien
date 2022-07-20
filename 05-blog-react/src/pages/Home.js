import ArticleLatest from '../components/ArticleLatest'
import ArticlePopular from '../components/ArticlePopular'
import ArticleList from '../components/ArticleList';

function Home() {
  return (
    <div className="wrapper-content">
      <ArticleLatest />
      <ArticlePopular />
      <ArticleList />
    </div>
  );
}

export default Home;

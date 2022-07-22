import './article-item.css';
import cls from 'classnames';
import ThumbNail from './ThumbNail';
import Info from './Info';
import Categories from './Categories';
import Stats from './Stats';

function ArticleItem({style, categories, desc, stats}) {

  const classes = cls('article-item', {
    'style-card': style === 'card',
    'style-card style-row': style === 'row',
  })

  return (
    <article className={ classes }>
      <ThumbNail href="/" src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
      <div className="article-item__content">
        { categories && <Categories /> }
        {  stats && <Stats /> }
        <h2 className="article-item__title">
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will Pass This</a>
        </h2>
        { desc && <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>}
        <Info />
      </div>
    </article>
  );
}

export default ArticleItem;
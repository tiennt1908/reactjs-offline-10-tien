import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategories = false,
  isShowAvatar = true,
  post
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  });

  if (!post) {
    return <></>
  }

  return (
    <article className={classes}>
      <ArticleItemThumb mediaURL={post.mediaURL} to={"/post/" + post.slug} />
      <div className="article-item__content">
        {isShowCategories && <ArticleItemCategories categoriesId={post.categories} />}
        {isShowCategories && <ArticleItemStats viewCount={post.viewCount} />}

        <ArticleItemTitle to={"/post/" + post.slug}>{post.title}</ArticleItemTitle>

        {isShowDesc && <ArticleItemDesc excerpt={post.excerpt} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} date={post.date} author={post.author} />
      </div>
    </article>
  );

}

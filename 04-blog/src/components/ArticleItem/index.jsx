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
      <ArticleItemThumb featured_media_url={post.featured_media_url} link={post.link} />
      <div className="article-item__content">
        {isShowCategories && <ArticleItemCategories categoriesId={post.categories} />}
        {isShowCategories && <ArticleItemStats view_count={post.view_count} />}

        <ArticleItemTitle href={post.link}>{post.title.rendered}</ArticleItemTitle>

        {isShowDesc && <ArticleItemDesc excerpt={post.excerpt.rendered} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} date={post.date} author_data={post.author_data} />
      </div>
    </article>
  );

}

import { useParams } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import MainTitle from '../components/shared/MainTitle';
import usePostPaging from '../customHook/usePostPaging';

function SearchPage() {

  const { searchValue } = useParams();
  const { posts, buttonLoadMore, totalPost } = usePostPaging({ extraParam: { per_page: 2, search:searchValue } });

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">{totalPost} kết quả tìm kiếm với từ khóa "{searchValue}"</MainTitle>

        <div className="tcl-row tcl-jc-center">
          {posts.map((e) => {
            return <div className="tcl-col-12 tcl-col-md-8" key={e.id}>
              <ArticleItem isStyleCard isShowCategoies isShowAvatar={false} isShowDesc={false} post={e} />
            </div>
          })}

        </div>

        <div className="text-center">
          {
            buttonLoadMore
          }
        </div>
      </div>
    </div>
  );
}

export default SearchPage;

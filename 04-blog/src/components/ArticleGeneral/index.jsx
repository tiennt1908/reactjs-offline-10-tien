import usePostPaging from '../../customHook/usePostPaging';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {

  const { posts, buttonLoadMore } = usePostPaging({ extraParam: { per_page: 2 } });

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            posts.map((p) => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={p.id}>
                  <ArticleItem post={p} isStyleCard isShowAvatar={false} />
                </div>
              )
            })
          }
        </div>
        {/* End Row News List */}
        <div className="text-center">
          {
            buttonLoadMore
          }
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;

import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import IconLoading from "../shared/IconLoading";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle isButton={true} button={<Button type="primary" loading={false}>View more</Button>}>News List</MainTitle>
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <ArticleItem style="card" desc={false} />
          </div>
        </div>
        <div className="text-center">
          <Button type="primary" size="large"><IconLoading /> Load more</Button>
        </div>  
        
      </div>
    </div>
  );
}

export default ArticleGeneral;
import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
// import InfiniteScroll from "react-infinite-scroll-component";

class News extends React.Component {
  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      currArticles: 0
    };
  }

  capitalize = (word) => {
    let upperCase = word.toUpperCase().slice(0,1);
    let lower = word.slice(1);
    return upperCase + lower;

  }

  updateNews = async (page = this.state.page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5292c38a4eb14d82b115fd1eb59e5c1f&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false});
  };

  async componentDidMount() {
    // if (this.state.page >= Math.ceil(this.state.articles/this.pageSize)){}else{//below}
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5292c38a4eb14d82b115fd1eb59e5c1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    this.setState({
      articles: parsedData.articles,
      currArticles: parsedData.totalResults,
      // page: this.state.page + 1,
      loading: false
    });
  }

  // handleScrolling = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5292c38a4eb14d82b115fd1eb59e5c1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: this.state.articles.concat(parsedData.articles)
  //   });
  // };


  prevClickHandler = async () => {
    this.updateNews(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
      currArticles: this.state.currArticles + this.props.pageSize,
      loading: false
    });
  };

  nextClickHandler = async () => {
    this.updateNews(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
      currArticles: this.state.currArticles - this.props.pageSize,
    });
  };

  render() {
    return (
      <>
          <h1 className="my-5 text-m-left text-center">
            NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
          </h1>
          {this.state.loading && <Spinner />}
          {/* <InfiniteScroll
                                    dataLength={this.state.articles.length}
                                    next={this.handleScrolling}
                                    hasMore={this.state.articles.length !== this.state.currArticles}
                                    loader={<Spinner/>}
                                    > */}
          <div className="container">
          <div className="row">
                            
            {!this.state.loading &&
              this.state.articles.map((element) => {
                //  d-flex align-items-center justify-content-center
                return (
                  <div
                    className="col-lg-4 col-md-6 my-3 d-flex align-items-center justify-content-md-start justify-content-center"
                    key={element.url}
                  >
                    <NewsItem
                      title={`${
                        element.title
                          ? element.title === ""
                            ? "Read More..."
                            : element.title.slice(0, 40) + `...`
                          : ""
                      }`}
                      description={`${
                        element.description
                          ? element.description === ""
                            ? "Read More..."
                            : element.description.slice(0, 88) + `...`
                          : "READ MORE..."
                      }`}
                      // .slice(0,40) can be used to slice the title into shorter form  .slice(0,80)
                      imageUrl={element.urlToImage}
                      date={new Date(element.publishedAt).toUTCString()}
                      url={element.url}
                    />
                  </div>
                );
              })}
          </div>
          </div>
          {/* </InfiniteScroll> */}
          
        

        <div className="container d-flex justify-content-between py-5">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark btn-sm"
            onClick={this.prevClickHandler}
          >
            Previous
          </button>
          <button
            disabled={this.state.currArticles <= this.props.pageSize}
            className="btn btn-dark btn-sm"
            onClick={this.nextClickHandler}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default News;

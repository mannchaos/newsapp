import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';

export class News extends Component {
  articles = [];

  static defaultProps = {
    country : "in",
    pageSize : 30,
    category : "general"
  }
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News `
  }

  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=549bc58bb2fd419088ac863611e7339e&page=1SS&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);
  }

  handleNext = async () => {
    console.log("next button clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=549bc58bb2fd419088ac863611e7339e&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
    })

  }

  handlePrevious = async () => {
    console.log("previous button clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=549bc58bb2fd419088ac863611e7339e&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          <h1> News of the day - in Nutshell({this.capitalizeFirstLetter(this.props.category)})  </h1>
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} discription={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
              </div>;
            })}
          </div>
        </div>
        <div className="container my-1 d-flex justify-content-around">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-success" onClick={this.handlePrevious} >&#8592;  Previous </button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}className="btn btn-danger" onClick={this.handleNext} >Next &#8594;</button>
        </div>
      </>
    )
  }
}

export default News
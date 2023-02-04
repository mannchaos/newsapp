import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let { title, discription, imgUrl, newsUrl, publishedAt, author } = this.props;

    return (
      <div><div className="card">
        <img src={!imgUrl ? "https://img.etimg.com/thumb/msid-90069192,width-1070,height-580,imgsize-68000,overlay-etmarkets/photo.jpg" : imgUrl} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {publishedAt}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div></div>
    )
  }
}

export default Newsitem
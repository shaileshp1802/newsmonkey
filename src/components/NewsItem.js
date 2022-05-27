import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
      let {title, description, urlToImage, newsUrl} = this.props;
      return (
      <>
        <div className="my-3">

        <div className="card my-3" style={{width : "18rem" , height : "25rem"}}>
          <img src={!urlToImage?"https://img.etimg.com/thumb/msid-91836063,width-1070,height-580,imgsize-20830,overlay-etmarkets/photo.jpg":urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target= "_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default NewsItem;

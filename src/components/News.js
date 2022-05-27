import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [ ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f40b84c556c491c9b12e1c4584cebd9"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  handlePrevClick = async ()=> {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f40b84c556c491c9b12e1c4584cebd9&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
    this.setState({
      page : this.page - 1
    })
  }
  handleNextClick = async ()=> {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f40b84c556c491c9b12e1c4584cebd9&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
    this.setState({
      page : this.page + 1
    })

  }


  render() {
    return (
      <>
        <div className='container my-3'>
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} urlToImage={element.urlToImage} newsUrl={element.url} />
                </div>
                ;
            })}
          </div>
          <div className="conatiner d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News
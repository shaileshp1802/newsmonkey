import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [ ]
  constructor() {
    super();
    console.log("Hellollll from news comp");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f40b84c556c491c9b12e1c4584cebd9"
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({articles: parsedData.articles})
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
        </div>
      </>
    )
  }
}

export default News
import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

console.log(BooksAPI.getAll());


class SearchBook extends React.Component {
  state = {
    myBooks:[],
    searchResult: ""
  }

  componentDidMount(){
      BooksAPI.getAll().then((books)=>{
          this.setState({myBooks : books})
      })
  }

  getSearchResult = (query)=>{
      this.setState({searchResult : query})
  } 

  render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.searchResult}
                    onChange={(event) => this.getSearchResult(event.target.value)}
                />
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid"></ol>
            </div>
        </div>
    )
  }
}

export default SearchBook

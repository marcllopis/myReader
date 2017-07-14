import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

import SearchBook from './Components/SearchBook'
import BookLibrary from './Components/BookLibrary'


class BooksApp extends React.Component {
  state = {
    myBooks:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books })
      console.log(books);
      
    })
  }

  render() {
    if (this.state.myBooks.length === 0) {
      return (
        <div><h2>Loading books...</h2></div>
      )
    } else {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookLibrary 
                      myBooks={this.state.myBooks}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBook />
        )}/>
      </div>
    )
  }
  }
}

export default BooksApp

import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

import SearchBook from './Components/SearchBook'
import BookLibrary from './Components/BookLibrary'

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';



class App extends React.Component {
  state = {
    myBooks: [],
    myShelfs: [
      {
        displayed: "Currently Reading",
        coded: "currentlyReading"
      },
      {
        displayed: "Want to Read",
        coded: "wantToRead"
      },
      {
        displayed: "Read",
        coded: "read"
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books })
    })
  }

  searched = (query, id) => {
    BooksAPI.update(id, query).then((res) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ myBooks: books })
        Alert.success('Book added', {
          position: 'top-right',
          effect: 'slide',
          beep: false,
          timeout: 1000
        });
      })
    })
  }

  addBook = (bookID) => {
    BooksAPI.update(bookID, "wantToRead").then((res) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ myBooks: books })
      })
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
          <Alert stack={{ limit: 2 }} />
          <Route exact path='/' render={() => (
            <BookLibrary
              myBooks={this.state.myBooks}
              myShelfs={this.state.myShelfs}
            />
          )} />
          <Route path='/search' render={({ history }) => (
            <SearchBook
              addBook={(bookID) => {
                this.addBook(bookID)
                history.push('/')
              }}
              myBooks={this.state.myBooks}
              myShelfs={this.state.myShelfs}
              searched={this.searched}
            />
          )} />
        </div>
      )
    }
  }
}

export default App

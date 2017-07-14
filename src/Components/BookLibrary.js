import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

import BookShelf from './BookShelf'

class BookLibrary extends Component {

  constructor() {
    super()
    console.log(this.props);

    this.state = {
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
  }

  componentDidMount() {
    this.setState({ myBooks: this.props.myBooks })
  }

  getSelectValue = (query, id) => {
    if (query !== "none") {
      BooksAPI.update(id, query).then((res) => {
        BooksAPI.getAll().then((books) => {
          this.setState({ myBooks: books })
        })
      })
    } else {
      console.log("You select nothing");
    }
  }



  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.myShelfs.map((shelf) => {
              return (
                <BookShelf
                  shelf={shelf}
                  key={shelf.coded}
                  myBooks={this.state.myBooks}
                  getSelectValue={this.getSelectValue}
                />
              )

            })}

          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Close</Link>
        </div>
      </div>
    )

  }
}

export default BookLibrary
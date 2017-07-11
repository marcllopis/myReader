import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

import Book from './Book'


class BookShelf extends Component {
  
    constructor(){
      super()
        this.state = {
            myBooks:[]
        }
    }

    componentDidMount(){
        BooksAPI.getAll().then((books)=>{
            this.setState({myBooks : books})
        })
    }

    render () {
      if(this.state.myBooks.length === 0){
        
        return (
          <div><h2>Loading books...</h2></div>
        )
      }else {

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.myBooks.map((book) => {
                        if (book.shelf === "currentlyReading") { 
                          return(
                            <li key={book.title}>
                              <Book info ={book} />
                            </li>
                          )
                        }
                      })}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.myBooks.map((book) => {
                        if (book.shelf === "wantToRead") { 
                          return(
                            <li key={book.title}>
                              <Book info ={book} />
                            </li>
                          )
                        }
                      })}                    
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.myBooks.map((book) => {
                        if (book.shelf === "read") { 
                          return(
                            <li key={book.title}>
                              <Book info ={book} />
                            </li>
                          )
                        }
                      })}                    
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Close</Link>
            </div>
          </div>
        )
      }
    }
}

export default BookShelf
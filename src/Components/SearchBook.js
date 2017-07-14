import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

import BooksSearched from './BooksSearched'

console.log(BooksAPI.getAll());


class SearchBook extends React.Component {
    state = {
        myBooks: [],
        searchResult: "",
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ myBooks: books })
        })
    }

    getSearchResult = (query) => {
        this.setState({ searchResult: query })
        BooksAPI.search(query, 3).then((res) => {
            console.log(res);
            this.setState({ searchedBooks: res })
        })
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
                    <ol className="books-grid">
                        {this.state.searchedBooks.map((book)=>{
                            return (
                                <BooksSearched book={book}
                                               key={book.id}
                                />
                            )
                        })

                        }
                        
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook

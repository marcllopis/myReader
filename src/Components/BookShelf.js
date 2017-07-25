import React from 'react'
import '../App.css'
import Book from './Book'

const BookShelf = (props) => (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.displayed}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.myBooks.map((book) => {

                    if (book.shelf === props.shelf.coded) {
                        return (
                            <li key={book.title}>
                                <Book myBook={book} myShelf={props.myShelfs} shelf={props.shelf} getSelectValue={props.getSelectValue} />
                            </li>
                        )
                    }
                })}
            </ol>
        </div>
    </div>
);

export default BookShelf
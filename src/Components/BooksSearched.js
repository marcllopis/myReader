import React, { Component } from 'react'
import '../App.css'

class BooksSearched extends Component {

    addBook(){
        console.log('BOOOOOKKKK');
        
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')' }}></div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors[0]}</div>
                <div className="add-book">
                    <button onClick={this.addBook} className="add-book-btn">Add Book</button>
                </div>
            </div>
        )
    }
}

export default BooksSearched
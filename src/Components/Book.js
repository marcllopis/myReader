import React from 'react'
import '../App.css'

const Book = (props) => (
    
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + props.myBook.imageLinks.smallThumbnail + ')' }}></div>
            <div className="book-shelf-changer">
                <select value={props.shelf.coded} onChange={(event) => props.getSelectValue(event.target.value, props.myBook.id)}>
                    <option value="none" disabled>Move to...</option>
                    {props.myShelf.map((shelf, index) => {
                        return (
                            <option key={index} value={shelf.coded}>{shelf.displayed}</option>
                        )
                    })}
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{props.myBook.title}</div>
        <div className="book-authors">{props.myBook.authors[0]}</div>
    </div>
);

export default Book
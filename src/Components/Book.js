import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'


class Book extends Component {

    getSelectValue = (query)=>{
        console.log(this.props.info.id, query);
        BooksAPI.update(this.props.info.id, query).then((res)=>{
            console.log('UPDATED');
            console.log(res);
            
        })
    } 

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.info.imageLinks.smallThumbnail + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.getSelectValue(event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="empty"></option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.info.title}</div>
                <div className="book-authors">{this.props.info.authors[0]}</div>
            </div>
        )
    }
}

export default Book
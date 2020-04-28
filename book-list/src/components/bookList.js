import React, { useContext } from 'react';
import { BookContext } from '../contexts/bookContext';
import BookDetails from './bookDetails';


const Booklist = ()=>{
    const { books }=useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book=>{
                    return(
                        <BookDetails
                        book={book}
                        key={book.id}/>
                    );
                })}
            </ul>
        </div>
    ) 
    :
    (<div className="empty">
        No books to read. Hello free time :)
    </div>);
};

export default Booklist;
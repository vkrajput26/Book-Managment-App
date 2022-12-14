

import React from 'react';
import { Link } from 'react-router-dom';
const BookCard=({bookData}) =>{
    return (
        <div>
            <img src="https://helios-i.mashable.com/imagery/articles/0140f0lKtPHiH5GeeCZaT5f/hero-image.fill.size_1200x900.v1623369333.jpg"
            width="100px" alt="" />
            <div>{bookData.book_name}</div>
            <div>{bookData.category}</div>
            <div>
                <div>
                {bookData.release_year}
                </div>
            <Link to={`/books/${bookData.id}/edit`}>
            <button>Edit</button>
            </Link>    

            <Link to={`/books/${bookData.id}`}>
            <button>SinglePage</button>
            </Link> 
            </div>
        </div>
    );
}

export default BookCard;

// author: "Masai"
// book_name: "Full-Stack Web Development"
// category: "Novel"
// chapters: (2) [{…}, {…}]
// cover_photo: ""
// id: 1
// no_of_chapters: 6
// release_year: 2019
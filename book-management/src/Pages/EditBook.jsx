

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getBook } from '../Redux/app/action';

const EditBook=() =>{
    const {id}=useParams()
    // console.log(id)
    const [currentBook,setCurrentBook] = useState({});
    const dispatch = useDispatch();
    const books=useSelector((state)=>state.appReducer.books)
    
    console.log("books",books)

    useEffect(()=>{
        if(books.length===0){
            dispatch(getBook())
        }
    },[books.length,dispatch])

    useEffect(()=>{
        if(id){
            const bookById = books.find((book) => book.id === Number(id));
        bookById && setCurrentBook(bookById)
        }
    },[books,id])
    console.log("currentBook",currentBook)
    return (
        <div>
           <h2> EditBook</h2>
            <div> 
                {currentBook.book_name ? currentBook.book_name : "" }
            </div>
        </div>
    );
}

export default EditBook;
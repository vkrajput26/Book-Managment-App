

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getBook, updateBook } from '../Redux/app/action';

const EditBook=() =>{
    const {id}=useParams()
    // console.log(id)
    const [currentBook,setCurrentBook] = useState({});
    const dispatch = useDispatch();
    const books=useSelector((state)=>state.appReducer.books)
    const [bookName, setBookName]=useState('');
    const [bookAuthor, setBookAuthor]=useState('');
    const navigate=useNavigate()
    console.log("books",books)

    const updateBookData=()=>{
        const payload={
            book_name:bookName,
            author: bookAuthor
        }
        dispatch(updateBook(id,payload))
        // .then(()=>{
        //     dispatch(getBook())
        // })
        .then(()=>{
            navigate("/")
        })
    }

    useEffect(()=>{
        if(books.length===0){
            dispatch(getBook())
        }
    },[books.length,dispatch])

    useEffect(()=>{
        if(id){
            const bookById = books.find((book) => book.id === Number(id));
      //  bookById && setCurrentBook(bookById)
      bookById && setBookName(bookById.book_name)
      bookById && setBookAuthor(bookById.author)
        }
    },[books,id])
    console.log("currentBook",currentBook)
    return (
        <div>
           <h2> EditBook</h2>
            <div> 
                <input type="text" value={bookName} onChange={(e)=> setBookName(e.target.value)} />
            </div>

            <div> 
                <input type="text" value={bookAuthor} onChange={(e)=> setBookAuthor(e.target.value)} />
            </div>

            <button onClick={updateBookData}>Update</button>
        </div>
    );
}

export default EditBook;
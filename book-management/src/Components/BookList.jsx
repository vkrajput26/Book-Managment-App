

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../Redux/app/action';
import BookCard from './BookCard';

const  BookList=() =>{
  
    const books=useSelector((state)=>state.appReducer.books)

    const dispatch=useDispatch()
    useEffect(()=>{
      //  if(books.length===0)
       // {
            dispatch(getBook())
      //  }
    },[])
    console.log(books)
    return (
        <div>
          {
          books?.map(item=>{
                return(
                    <BookCard key={item.id} bookData={item}/>
                )
            })
          }

        </div>
    );
}

export default BookList;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getBook } from '../Redux/app/action';
import BookCard from './BookCard';

const  BookList=() =>{
  
    const books=useSelector((state)=>state.appReducer.books)

    const dispatch=useDispatch()
    const [searchParams]=useSearchParams()

    const location=useLocation()

    useEffect(()=>{
      //  if(books.length===0)
       // {
        const sortBy=searchParams.get("sortBy")
        let getBookParams={

            params:{
                category:searchParams.getAll('category'),
                _sort:sortBy && "release_year",
                _order:sortBy,
            },
        }
            dispatch(getBook(getBookParams))
          //  console.log("gg",getBookParams)
      //  }
    },[location.search])
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
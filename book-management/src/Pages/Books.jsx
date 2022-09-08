


import React from 'react';
import BookList from '../Components/BookList';
import FilterComp from '../Components/FilterComp';
import styled from "styled-components"

const Books=()=> {
    return (
        <div>
            <h3>book page</h3>
            <BookWraper>
           <FilterComp/>
           <BookList/>
           </BookWraper>
        </div>
    );
}

const BookWraper =styled.div`
display:flex;
color:red
`

export default Books;
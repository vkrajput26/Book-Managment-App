import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterComp=()=> {

    const [searchParams,setSearchParam]=useSearchParams()
    const initialCategoryFilter=searchParams.getAll('category') //it help in refreshing the page data not lose
    const [category,setCategory]=useState(initialCategoryFilter||[])
    const initialSortBy=searchParams.getAll('sortBy')
    const[sortBy,setSortBy]=useState(initialSortBy[0] || [])

    const handleSort=(e)=>{
            setSortBy(e.target.value)
    }

    const handleFilterCheckbox=(e)=>{
        // console.log(e.target.value)
        const newCategories=[...category]

        if(newCategories.includes(e.target.value))
        {
            newCategories.splice(newCategories.indexOf(e.target.value),1)
        }
        else{
            newCategories.push(e.target.value)
        }

        setCategory(newCategories)
      //  console.log(newCategories)
    }
    //console.log(category)


    useEffect(()=>{

        if(category || sortBy){
            let params={}
            category && (params.category=category)
            sortBy && (params.sortBy=sortBy)
            setSearchParam(params)         
        }

    },[category,setSearchParam,sortBy])
    return (
        <div>
          
            <h3>FilterComp</h3>
            <div>
                <div>
                    <input type="checkbox" value="Novel"
                    checked={category.includes('Novel')}
                    onChange={handleFilterCheckbox} />
                    <label>Novel</label>
                </div>
                <div>
                    <input type="checkbox" value="Motivational"
                      checked={category.includes('Motivational')}
                    onChange={handleFilterCheckbox} />
                    <label>Motivational</label>
                </div>
                <div>
                    <input type="checkbox" value="Science_Fiction"
                      checked={category.includes('Science_Fiction')}
                    onChange={handleFilterCheckbox} />
                    <label>Science_Friction</label>
                </div>
                <div>
                    <input type="checkbox" value="Thriller"
                      checked={category.includes('Thriller')}
                    onChange={handleFilterCheckbox} />
                    <label>Thriller</label>
                </div>
            </div>

            <h3>Sort compo</h3>
            <div onChange={handleSort} >
                <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy=="asc"} />
                <label >Ascending</label>
                <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy=="desc"} />
                <label >Descending</label>
            </div>

        </div>
    );
}

export default FilterComp;
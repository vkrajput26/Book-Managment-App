import React, { useState } from 'react';

const FilterComp=()=> {
    const [category,setCategory]=useState([])


    const handleFilterCheckbox=(e)=>{
        // console.log(e.target.value)
        const newCategories=[...category]

        if(newCategories.includes(e.target.value))
        {
            newCategories.splice(newCategories.indexOf(e.target.value))
        }
        else{
            newCategories.push(e.target.value)
        }

        setCategory(newCategories)
      //  console.log(newCategories)
    }
    //console.log(category)
    return (
        <div>
          
            <h3>FilterComp</h3>
            <div>
                <div>
                    <input type="checkbox" value="Novel" onChange={handleFilterCheckbox} />
                    <label>Novel</label>
                </div>
                <div>
                    <input type="checkbox" value="Motivational" onChange={handleFilterCheckbox} />
                    <label>Motivational</label>
                </div>
                <div>
                    <input type="checkbox" value="Science_Fiction" onChange={handleFilterCheckbox} />
                    <label>Science_Friction</label>
                </div>
                <div>
                    <input type="checkbox" value="Thriller" onChange={handleFilterCheckbox} />
                    <label>Thriller</label>
                </div>
            </div>
        </div>
    );
}

export default FilterComp;
import React, { useState } from 'react';
import './GlobalSearch.css';


const GlobalSearch = ({searchData}) =>{
    const [keyWord,setKeyWord] = useState();


    const findData=()=>{
        searchData(keyWord);
    }
    return(
    <div className="d-flex justify-content-center container-search">
      <div className="searchbar">
        <input className="search_input" type="text" name="" placeholder="Enter you skills...." onChange={(e)=> setKeyWord(e.target.value)}/>
        <i className="fas fa-search fa-align" onClick={()=> findData()}></i>
      </div>
    
  </div>)
}


export default GlobalSearch;
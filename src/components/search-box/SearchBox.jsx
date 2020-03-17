import React from "react"

const SearchBox = (props) => {
  return(
    <input type="text" placeholder="Search Monsters" onChange={props.onInputChange} className="search" />  
  )
}

export default SearchBox
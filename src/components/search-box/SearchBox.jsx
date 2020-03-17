import React from "react"

const SearchBox = (props) => {
  return(
    <input type="text" placeholder={ props.placeholder } onChange={props.onInputChange} className="search" />  
  )
}

export default SearchBox
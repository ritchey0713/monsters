import React from "react"
import Card from "../card/Card"

const CardList = (props) => {
  return(
    <div className='card-list'>
      {
        props.monsters.map(monster => (
          <Card monster={monster} />
        ))
      }
    </div>
  )
}

export default CardList
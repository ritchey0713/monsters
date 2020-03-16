import React from "react"

const CardList = (props) => {
  return(
    <div className='card-list'>
      {
        props.monsters.map(monster => (
          <div  key={ monster.id }>{ monster.name }</div>
        ))
      }
    </div>
  )
}

export default CardList
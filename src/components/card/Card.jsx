import React from "react"

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2=180x180`}/>
      <h2  key={ props.monster.id }>
        { props.monster.name }
      </h2>
      <p>
        {props.monster.email}
      </p>

    </div>
  )
}

export default Card
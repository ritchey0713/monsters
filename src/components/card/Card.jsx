import React from "react"

const Card = (props) => {
  return (
    <h1  key={ props.monster.id }>
            { props.monster.name }
    </h1>
  )
}

export default Card
import React from 'react'
import Joke from "./Joke"
const Dog = (props) => {
    // console.log(props.dogimage)
    // console.log(props.dogjoke)
    return (
        <div>
          <p>{props.dogimage}</p>
          <Joke joke={props.dogjoke}></Joke>
        </div>
    )
}

export default Dog

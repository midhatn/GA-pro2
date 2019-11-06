import React from 'react'
import Joke from "./Joke"
import { ResponsiveEmbed, } from 'react-bootstrap';
const Dog = (props) => {

  // console.log(props.dogimage)
  // console.log(props.dogjoke)
  return (
    <div>

      <div style={{ width: "auto", height: "auto" }}>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src={props.dogimage} />
        </ResponsiveEmbed>
      </div>
      <Joke joke={props.dogjoke}></Joke>
    </div>
  )
}

export default Dog

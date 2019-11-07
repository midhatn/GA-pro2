import React from 'react'
import "./index.css"

const Joke = (props) => {
    return (
        <div>
           <div className="container">
  <div className="quote-box">
    <div className="quote">
      <blockquote>
        "{props.joke}"
      </blockquote>
    </div>
    <div className="name">
      Random Joke
    </div>
  </div>
</div>
        </div>
    )
}

export default Joke

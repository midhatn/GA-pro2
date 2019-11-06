import React from 'react'
import Quiz from "./Quiz"
const Cat = (props) => {
    return (
        <div>
            <img src={props.catimage} alt="cute cat"></img>
            
            <Quiz quiz={props.catquiz}></Quiz>
        </div>
    )
}

export default Cat

import React from 'react'
import Quiz from "./Quiz"
const Cat = (props) => {
    return (
        <div>
            {props.catimage}
            <Quiz quiz={props.catquiz}></Quiz>
        </div>
    )
}

export default Cat

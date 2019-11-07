import React from 'react'
import Quiz from "./Quiz"
import { Image, Jumbotron, Container} from 'react-bootstrap';

const Cat = (props) => {
    return (
        <div>
            <Jumbotron fluid>
  <Container>
            <Image  src={props.catimage} fluid/>
           <br/> 
           <br/> 
          
            <Quiz quiz={props.catquiz}></Quiz>
            </Container>
</Jumbotron>

        </div>
    )
}

export default Cat

import React from 'react'


import { Popover, OverlayTrigger,  Button, } from 'react-bootstrap';


const Quiz = (props) => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Answer</Popover.Title>
          <Popover.Content>
          {props.quiz.correct_answer}
          </Popover.Content>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">{props.quiz.question}?</Button>
        </OverlayTrigger>
      );
      
          
          

    return (
        <div>
           <Example />
        </div>
    )
}

export default Quiz

import React from 'react'
import Joke from "./Joke"
import { ResponsiveEmbed, Jumbotron, Container} from 'react-bootstrap';
const Dog = (props) => {
  return (
    <div>
<Jumbotron fluid>
  <Container>
      <div style={{ width: "auto", height: "auto" }}>
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src={props.dogimage} />
        </ResponsiveEmbed>
      </div>
      <br/>      <br/>

      <Joke joke={props.dogjoke}></Joke>

      </Container>
</Jumbotron>




    </div>
  )
}

export default Dog

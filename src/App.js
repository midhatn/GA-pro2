import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar, Nav,} from 'react-bootstrap';
import Dog from "./Dog"
import Cat from "./Cat"


import Home from "./Home"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null,
      dog: null,
      joke: null,
      quiz: null

    };
  }
  componentDidMount() {
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(cat => this.setState({ cat }));

    fetch('https://random.dog/woof.json')
      .then(response => response.json())
      .then(dog => this.setState({ dog }));

    fetch('http://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(joke => this.setState({ joke }));

    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean')
      .then(response => response.json())
      .then(quiz => this.setState({ quiz }));
  }

  render() {



    return (
      <>
  

        <Router>
          <div>
        


  <Navbar  variant="dark">
    <Navbar.Brand href="/">Boring</Navbar.Brand>
    <Nav className="mr-auto">
  <Nav.Link href="/DogJ">Dog</Nav.Link>
  <Nav.Link href="/CatQ">Cat</Nav.Link>
  </Nav>
    
    </Navbar>


            <Switch>
              <Route path="/DogJ">
              <Dog dogimage={this.state.dog !== null ? this.state.dog.url : ""} dogjoke={this.state.joke !== null ? this.state.joke.value.joke : ""}></Dog>


              </Route>
              <Route path="/CatQ">
                <Cat catimage={this.state.cat !== null ? this.state.cat.file : ""} catquiz={this.state.quiz !== null ? this.state.quiz.results[0] : ""}></Cat>

              </Route>
              <Route path="/">
            <Home color="white"/>
          </Route>
            </Switch>
          </div>
        </Router>

      </>
    )
  }
}

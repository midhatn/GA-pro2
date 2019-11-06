import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/DogJ">Dog</Link>
                </li>
                <li>
                  <Link to="/CatQ">Cat</Link>
                </li>
              </ul>
            </nav>


            <Switch>
              <Route path="/DogJ">
              <Dog dogimage={this.state.dog !== null ? this.state.dog.url : ""} dogjoke={this.state.joke !== null ? this.state.joke.value.joke : ""}></Dog>


              </Route>
              <Route path="/CatQ">
                <Cat catimage={this.state.cat !== null ? this.state.cat.file : ""} catquiz={this.state.quiz !== null ? this.state.quiz.results[0].question : ""}></Cat>

              </Route>
              <Route path="/">
            <Home />
          </Route>
            </Switch>
          </div>
        </Router>

      </>
    )
  }
}

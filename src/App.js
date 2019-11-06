import React, { Component } from 'react'

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
  console.log(this.state.cat !==null ? this.state.cat.file: "")
  console.log(this.state.dog !==null ? this.state.dog.url: "")
  console.log(this.state.joke !==null ? this.state.joke.value.joke: "")
  console.log(this.state.quiz !==null ? this.state.quiz.results[0].question: "")





    return (
      <div>
        
      </div>
    )
  }
}

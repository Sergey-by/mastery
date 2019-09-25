import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

//import logo from './logo.svg';
import './App.css';





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src='https://picsum.photos/400/400' className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           ENTER HERE
//         </a>
//       </header>
//     </div>
//   );
// }

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      test: ['NO TEXT HERE', 'qwerty'],
      guys: []
    }
  }

  testFunction = () => {

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({guys: users}))
  }

  render() {

    return (
        <div className="App">
          <br/>
            <CardList guys={this.state.guys}>
            </CardList>
          <br/>
        </div>
    );
  }
};

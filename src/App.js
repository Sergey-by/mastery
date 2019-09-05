import React, { Component } from 'react';
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
      guys: [
        {
          id: 'p1',
          firstName: 'Person',
          secondName: '1'
        },
        {
          id: 'p2',
          firstName: 'Person',
          secondName: '2'
        },
        {
          id: 'p3',
          firstName: 'Person',
          secondName: '3'
        }
      ]
    }
  }

  render() {

    return (
        <div className="App">
          {/*<header className="App-header">*/}
          {/*  <img src='https://picsum.photos/500/500' className="App-logo" alt="logo" />*/}
          {/*  <h1>TEST!</h1>*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <br/>*/}
          {/*  <p>{ this.state.string }</p>*/}
          {/*  <button onClick={() => this.setState({string: 'Bingo!!!'})}>Push me please</button>*/}
          {/*</header>*/}

          {this.state.guys.map(guy => (<h1 key={ guy.id }>{ guy.id } - { guy.firstName } - { guy.secondName }</h1>))}
        </div>
    );
  }
};

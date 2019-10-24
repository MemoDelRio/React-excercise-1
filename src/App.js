import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Name/>
       <h1> Del Rio </h1> 
    </div>
  );
}
class Name extends React.Component {
  render () {
    return (
      <div>
      <h1> Guillermo </h1>
      </div>
    );
  }
}

export default App;
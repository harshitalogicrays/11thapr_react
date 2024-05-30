import './App.css';
import React from 'react'
import Firstfuncomp from './components/01day/Firstfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';

function App() {
  return (
    <div className="App">
      <label htmlFor=""></label>
       {/* <h1>Hello React</h1> */}
       <h2>Welcome to LRA</h2>
       <p>para</p>
       <Firstfuncomp></Firstfuncomp> <br/>
       <Firstclasscomp/>
    </div>

    // React.createElement("div",{className:"App"},React.createElement("h1",{},"Hello React"),
    // React.createElement("h2",{},"Welcome to LRA"),React.createElement("p",{},"para"),)
  );
}

export default App;

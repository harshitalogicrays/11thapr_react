import './App.css';
import React from 'react'
import Firstfuncomp from './components/01day/Firstfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Propsdemo from './components/02day/Propsdemo';
import Childrenpropsdemo from './components/02day/Childrenpropsdemo';
import EventsDemo from './components/02day/EventsDemo';

function App() {
  return (
    <div className='container mt-5'>
      <label htmlFor=""></label>
       <h1 className='text-primary'>Hello React</h1>
       {/* <h2>Welcome to LRA</h2>
       <p>para</p>
       <Firstfuncomp></Firstfuncomp> <br/>
       <Firstclasscomp/> */}

        <Propsdemo username="happy" address="pune"/>
       <hr/>
       <Childrenpropsdemo empid={1001} 
       isMarried={true} ename="Smith">
        <h1>children1</h1>
        <p>chidlren2</p>
        <Firstclasscomp/>
       </Childrenpropsdemo>
        <hr/>
        <EventsDemo/>

    </div>

    // React.createElement("div",{className:"App"},React.createElement("h1",{},"Hello React"),
    // React.createElement("h2",{},"Welcome to LRA"),React.createElement("p",{},"para"),)
  );
}

export default App;

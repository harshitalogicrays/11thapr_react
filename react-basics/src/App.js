import './App.css';
import React, { useState } from 'react'
import Firstfuncomp from './components/01day/Firstfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Propsdemo from './components/02day/Propsdemo';
import Childrenpropsdemo from './components/02day/Childrenpropsdemo';
import EventsDemo from './components/02day/EventsDemo';
import ImageDisplay from './components/03day/ImageDisplay';
import DefaultandPropsType from './components/03day/DefaultandPropsType';
import Stateinfun from './components/03day/Stateinfun';
import CounterApp from './components/03day/CounterApp';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <div className='container mt-5'>
      <label htmlFor=""></label>
       <h1 className='text-primary'>Hello React</h1>
       {/* <h2>Welcome to LRA</h2>
       <p>para</p>
       <Firstfuncomp></Firstfuncomp> <br/>
       <Firstclasscomp/> */}

        {/* <Propsdemo username="happy" address="pune"/>
       <hr/>
       <Childrenpropsdemo empid={1001} 
       isMarried={true} ename="Smith">
        <h1>children1</h1>
        <p>chidlren2</p>
        <Firstclasscomp/>
       </Childrenpropsdemo>
        <hr/>
        <EventsDemo/><hr/>
        <ImageDisplay/> */}

        {/* <DefaultandPropsType  
        name="LRA" address="A 313 Safal Pegasus" pincode={380015}/>
          <DefaultandPropsType  
        address="A 313 Safal Pegasus" pincode={380015}/>
      <DefaultandPropsType  
        pincode="erhjhre"/> */}

       {/* <Stateinfun/>  */}
       <CounterApp/>
    </div>

    // React.createElement("div",{className:"App"},React.createElement("h1",{},"Hello React"),
    // React.createElement("h2",{},"Welcome to LRA"),React.createElement("p",{},"para"),)
  );
}

export default App;

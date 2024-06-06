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
import FetchTextBoxData from './components/04day/FetchTextBoxData';
import Calculator from './components/04day/Calculator';
import Form1 from './components/04day/Form1';
import Form2 from './components/04day/Form2';
import ConditionalRendering from './components/05day/ConditionalRendering';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import ListRendering from './components/05day/ListRendering';
import ProductList from './components/05day/ProductList';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <>
     

      <h1>Functional Component Concepts</h1>
      <hr/>
      <div className='row'>
        <div className='col-4'>
            <Sidebar/>
        </div>
        <div className='col-8'>
            <Routes>
              <Route path='/' element={<Propsdemo/>}></Route>
              <Route path='/event' element={<EventsDemo/>}></Route>
              <Route path='/state' element={<Stateinfun/>}></Route>
              <Route path='/condition' element={<ConditionalRendering/>}></Route>
              <Route path='/form' element={<Form1/>}></Route>
              <Route path='/list' element={<ListRendering/>}/>
              <Route path='/products' element={<ProductList/>}/>
          </Routes>
        </div>
      </div>
     



      {/* <label htmlFor=""></label>
       <h1 className='text-primary'>Hello React</h1> */}
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
       {/* <CounterApp/> */}

       {/* <FetchTextBoxData name="Ram"/> */}
       {/* <Calculator/>   */}
       {/* <Form1/> */}
       {/* <Form2/> */}

          {/* <button
            type="button"
            class="btn btn-primary"
            onClick={()=>setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          

       <ConditionalRendering isLog={isLoggedIn} username="Ram"></ConditionalRendering> */}


    </>

    // React.createElement("div",{className:"App"},React.createElement("h1",{},"Hello React"),
    // React.createElement("h2",{},"Welcome to LRA"),React.createElement("p",{},"para"),)
  );
}

export default App;

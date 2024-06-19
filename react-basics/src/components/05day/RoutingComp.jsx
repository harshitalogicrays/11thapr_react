import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Propsdemo from '../02day/Propsdemo'
import EventsDemo from '../02day/EventsDemo'
import Stateinfun from '../03day/Stateinfun'
import ConditionalRendering from './ConditionalRendering'
import Form1 from '../04day/Form1'
import ListRendering from './ListRendering'
import ProductList from './ProductList'
import App from '../../App'
import Calculator from '../04day/Calculator'
import Product01 from '../06day/Product01'
import ProductData from '../06day/ProductData'
import ReactCSS from '../06day/ReactCSS'
import PageNotFound from '../06day/PageNotFound'
import ReactBootstrapForm from '../07day/ReactBootstrapForm'
import FormValidations from '../07day/FormValidations'
import ReactHookform from '../08day/ReactHookform'
import Counter from '../08day/Counter'
import RandomNumGenerator from '../08day/RandomNumGenerator'
import RefDemoinFun from '../09day/RefDemoinFun'
import Usememohook from '../09day/Usememohook'
import FunRouting from '../FunRouting'
import ClassRounting from '../ClassRounting'
import ClassComp from '../09day/ClassComp'
import EventinClass from '../10day/EventinClass'
import StateinClass from '../10day/StateinClass'
import Form1classcomp from '../10day/Form1classcomp'
import RefDemoinClasss from '../10day/RefDemoinClasss'
import ComponentLifeCycleMethods from '../11day/ComponentLifeCycleMethods'
import PureComponentDemo from '../11day/PureComponentDemo'

const RoutingComp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='/fun' element={<FunRouting/>}>
                <Route path='' element={<Propsdemo/>}></Route>
                <Route path='event' element={<EventsDemo/>}></Route>
                <Route path='state' element={<Stateinfun/>}></Route>
                <Route path='condition' element={<ConditionalRendering/>}>
                    <Route path='cal' element={<Calculator/>}/>
                </Route>
                <Route path='form' element={<Form1/>}></Route>
                <Route path='list' element={<ListRendering/>}/>
                <Route path='products' element={<ProductList/>}/>
                <Route path='product/form' element={<Product01/>}/>
                <Route path='products/card' element={<ProductData/>}/>
                <Route path='css' element={<ReactCSS/>}/>
                <Route path='rb' element={<ReactBootstrapForm/>}/>
                <Route path='validations' element={<FormValidations/>}/>
                <Route path='reacthookform' element={<ReactHookform/>}/>
                <Route path='lifting' element={<Counter/>}/>
                <Route path='random' element={<RandomNumGenerator/>}/>
                <Route path='ref' element={<RefDemoinFun/>}/>
                <Route path='hook/usememo' element={<Usememohook/>}/>
            </Route>
            <Route path='/class' element={<ClassRounting/>}>
               <Route path='' element={<ClassComp username="Happy" address="Pune"/>}></Route>
               <Route path='event' element={<EventinClass username="Happy" address="Pune"/>}/>
               <Route path='state' element={<StateinClass/>}/>
               <Route path='form' element={<Form1classcomp/>}/>
               <Route path='ref' element={<RefDemoinClasss/>}/>
               <Route path='lifecycle' element={<ComponentLifeCycleMethods uname="Ram"/>}/>
               <Route path='pure' element={<PureComponentDemo />}/>
            </Route>
        </Route>
       
       
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default RoutingComp

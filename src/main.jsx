import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Project from './components/Project/Project.jsx'
import UIComponent from './components/UIComponent/UIComponent.jsx'
import StaticComp from './components/StaticComp/StaticComp.jsx'
import Accordion from './components/UIComponent/Accordion.jsx'
import Javascript from './components/Javascript/Javascript.jsx'
import BasicReact from './components/React/BasicReact.jsx'
import Variable from './components/Javascript/Variable.jsx'
import State from './components/State/State.jsx'
import Counter from './components/State/Counter.jsx'
import TodoList from './components/State/TodoList.jsx'
import Form from './components/State/Form.jsx'
import WeatherApp from './components/State/WeatherApp.jsx'
import ArrowFunction from './components/Javascript/ArrowFunction.jsx'
import Function from './components/Javascript/Function.jsx'
import EventHandling from './components/EventsHandling/EventHandling.jsx'
import ButtonComponent from './components/EventsHandling/ButtonComponent.jsx'
import Loops from './components/Loops/Loops.jsx'
import Map from './components/Loops/Map.jsx'
import ContextApi from './components/ContextAPI/ContextApi.jsx'
import Props from './components/Props/Props.jsx'
import ContextApp from './components/ContextAPI/ContextApi.jsx'
import ThemeSwitcherApp from './components/ContextAPI/ThemeSwitcher/ThemeSwitcherApp.jsx'
import TodoFormApp from './components/ContextAPI/TodoForm/TodoFormApp.jsx'
import AuthStatusApp from './components/ContextAPI/AuthStatus/AuthStatusApp.jsx'
import MultiLangApp from './components/ContextAPI/MultiLangApp/MultiLangApp.jsx'
import MultiContextsApp from './components/ContextAPI/MultiContextsApp/MultiContextsApp.jsx'
import PreviousState from './components/State/PreviousState.jsx'
import ToggleVisibility from './components/State/ToggleVisibility.jsx'
import NestedListApp from './components/State/NestedListApp.jsx'
import DynamicForm from './components/State/DynamicForm.jsx'
import UndoRedoApp from './components/State/UndoRedoApp.jsx'
import AccordionApp from './components/State/AccordionApp.jsx'
import ShoppingCart from './components/State/ShoppingCart.jsx'
import LikeButton from './components/State/LikeButton.jsx'
import ModalExample from './components/State/ModalExample.jsx'
import ControlleComponent from './components/State/ControlleComponent/ControlleComponent.jsx'
import InputControll from './components/State/ControlleComponent/InputControll.jsx'
import Array from './components/Javascript/Array/Array.jsx'
import EcommerceApp from './components/ContextAPI/E-commerceApp/E-commerceApp.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])UIComponent


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='staticComp' element={<StaticComp/>} />
      <Route path='project' element={<Project />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='uicomponent' element={<UIComponent/>} />
      <Route path='accordion' element={<Accordion/>} />


      { /*JavaScript Example */ }
      <Route path='javascript' element={<Javascript/>} />
      <Route path='variable' element={<Variable/>} />
      <Route path='function' element={<Function/>} />
      <Route path='arrow_function' element={<ArrowFunction/>} />
      <Route path='loops' element={<Loops/>} />
      <Route path='map' element={<Map/>} />
      <Route path='array' element={<Array/>} />




      <Route path='react' element={<BasicReact/>} />

      { /* State Example */ }
      <Route path='state' element={<State/>} />
      <Route path='controlle_component' element={<ControlleComponent/>} />
      <Route path='input_controll' element={<InputControll/>} />
      <Route path='count_increment' element={<Counter/>} />
      <Route path='todo_list' element={<TodoList/>} />
      <Route path='form_submit' element={<Form/>} />
      <Route path='weather_app' element={<WeatherApp/>} />
      <Route path='previous_state' element={<PreviousState/>} />
      <Route path='toggle_visibility' element={<ToggleVisibility/>} />
      <Route path='nested_list_app' element={<NestedListApp/>} />
      <Route path='dynamic_form' element={<DynamicForm/>} />
      <Route path='undo_redo_app' element={<UndoRedoApp/>} />
      <Route path='accordion_app' element={<AccordionApp/>} />
      <Route path='shopping_cart' element={<ShoppingCart/>} />
      <Route path='like_button' element={<LikeButton/>} />
      <Route path='modal_example' element={<ModalExample/>} />




      <Route path='event_handling' element={<EventHandling/>} />
      <Route path='button_component' element={<ButtonComponent/>} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />

      { /*Context API Route Example */ }
      <Route path='context_api' element={<ContextApi/>} />
      <Route path='context_api_setup_app' element={<ContextApp/>} />
      <Route path='theme_switcher_app' element={<ThemeSwitcherApp/>} />
      <Route path='todo_form_app' element={<TodoFormApp/>} />
      <Route path='user_authentication_context_api' element={<AuthStatusApp/>} />
      <Route path='multi-language_support' element={<MultiLangApp/>} />
      <Route path='multiple_contexts' element={<MultiContextsApp/>} />
      <Route path='ecommerce_app' element={<EcommerceApp/>} />
    
      
    
    



      { /*Props Route Example */ }
      <Route path='props' element={<Props/>} />


      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

{/*

<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
     List of products, and users can add new products to the list.
</h1>
<div className="flex items-center justify-center h-96 bg-gray-100">
<div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        
</div>
</div>

*/}
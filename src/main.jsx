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
      <Route path='javascript' element={<Javascript/>} />
      <Route path='variable' element={<Variable/>} />
      <Route path='react' element={<BasicReact/>} />
      <Route path='state' element={<State/>} />
      <Route path='count_increment' element={<Counter/>} />
      <Route path='todo_list' element={<TodoList/>} />
      <Route path='form_submit' element={<Form/>} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import Contacts from './Pages/Contacts'
import Projects from "./Pages/Projects"
import Studies from "./Pages/Studies"
import Courses from "./Pages/Courses"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Studies/>
    <Courses/>
    <Projects/>
    <Contacts/>
  </React.StrictMode>,
)

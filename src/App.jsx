import React from 'react'
import ReactDOM from 'react-dom/client'
import Studies from "./Sections/Studies"
import Courses from "./Sections/Courses"
import Header from "./Sections/Header"
import Nav from "./Sections/Nav"
import Footer from "./Sections/Footer"
import Main from './Sections/Main'
import About from './Sections/About'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Nav/>
    <Main>
      <About id={"inicio"} />
      <Studies id={"estudios"} />
      <Courses id={"cursos"} />
    </Main>
    <Footer/>
  </React.StrictMode>,
)

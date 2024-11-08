import React from 'react'
import Header from './components/Header'
import Featured from './components/Featured'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <main className="wrapper">
        <Featured/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
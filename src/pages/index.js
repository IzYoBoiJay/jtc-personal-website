import * as React from "react"
import './global.css'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import About from "../components/About/About"

const IndexPage = () => {
  return (
    <main>
        <Navbar />
        <Home />
        <About />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jhun-Thomas Calahatian</title>

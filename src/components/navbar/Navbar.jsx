import { useState } from "react"
import "./navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
    const [clicked, setClicked] = useState("overview")

    const handleClick = () => {
        setClicked("overview")
    }
    const handleClick2 = () =>{
        setClicked("projects")

    }

    const handleClick4 = () =>{
        setClicked("testimonials")

    }
    const handleClick5 = () =>{
        setClicked("resources")

    }
    
  return (
    <div className="navbar">
        <Link className="link" to = "/">
        <h3 className="overview" style={{color: clicked === "overview" ? 'white': '#7fffd4', textDecoration: clicked === "overview" ? 'underline': ''}}
        onClick={handleClick}>OVERVIEW</h3>
        </Link>
        
        <Link className = "link" to = "/projects">
        <h3 className="projects" style={{color: clicked === "projects" ? 'white': '#7fffd4', textDecoration: clicked === "projects" ? 'underline': ''}}
        onClick={handleClick2}>PROJECTS</h3>
        </Link>
        

        <Link className="link" to = "/testimonials">
        <h3 className="testimonials" style={{color: clicked === "testimonials" ? 'white': '#7fffd4', textDecoration: clicked === "testimonials" ? 'underline': ''}} 
        onClick={handleClick4}>TESTIMONIALS</h3>
        </Link>
        

        <Link className="link" to = "/resources">
        <h3 className="resources" style={{color: clicked === "resources" ? 'white': '#7fffd4', textDecoration: clicked === "resources" ? 'underline': ''}} 
        onClick={handleClick5}>RESOURCES</h3>
        </Link>
        

    </div>
  )
}

export default Navbar
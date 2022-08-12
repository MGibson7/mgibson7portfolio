import "./overview.css"
import Skills from "../skills/Skills"

const Overview = () => {
  return (
    <div className="main">
        <div className="left">
        <img
    src="./mg4.jpg"
    onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}
  />
            
        </div>
        <div className="center">
        
            <h1>Michael Gibson</h1>
            <h3>Software Engineer</h3>
            <Skills/>
            
        </div>
        <div className="right">

        </div>
    </div>
  )
}

export default Overview
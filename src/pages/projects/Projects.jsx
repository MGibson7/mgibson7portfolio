
import { useState } from "react";
import "./projects.css"

const Projects = () => {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const handleDisplay = () =>{
    setDisplay(display? false: true)
  }
  const handleDisplay2 = () =>{
    setDisplay2(display2? false: true)
  }
  const handleDisplay3 = () =>{
    setDisplay3(display3? false: true)
  }
  const handleDisplay4 = () =>{
    setDisplay4(display4? false: true)
  }
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
  <div className="projectsMain">

    <h2>FEATURED PROJECTS</h2>
    <div className="iframes">
        <div className="projectFea " onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}>
          <iframe scrolling="no" className="iframeImg" src="https://algoflix.herokuapp.com/" title="AlgoFlix"></iframe> 
        
        <a href="https://algoflix.herokuapp.com/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>

        <a href="https://github.com/MGibson7/algoflix" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay}>INFO</button>
        <p className="descript" style={{display: display? 'flex' : 'none'}}>A full stack Netflix clone to host my algorithm videos. Utilizes MongoDB, Express, React, NodeJS, and SCSS </p>
        </div>

        <div className="projectFea"  onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}>
        <iframe scrolling="no" className="iframeImg" src="https://ecommhalloween.vercel.app/" title="EcommHalloween"></iframe>
        <a href="https://ecommhalloween.vercel.app/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/ecommhalloween" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay2}>INFO</button>
        <p className="descript" style={{display: display2? 'flex' : 'none'}}>A full stack Halloween E-Commerce Site complete with Admin page. Utilizes MongoDB, NextJS, React, and CSS </p>
        </div>

        <div className="projectFea"  onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}>
        <iframe scrolling="no" className="iframeImg" src="https://fantasyfootballsocial2.herokuapp.com/" title="AlgoFlix"></iframe>
        <a href="https://fantasyfootballsocial2.herokuapp.com/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/fantasyfootballsocial_final" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay3}>INFO</button>
        <p className="descript" style={{display: display3? 'flex' : 'none'}}>A full stack social media site. Utilizes MongoDB, Express, React, NodeJS, and CSS </p>
        </div> 

        <div className="projectFea"  onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}>
        <iframe scrolling="no" className="iframeImg" src="https://mgibson7.github.io/networthStatement/" title="AlgoFlix"></iframe>
        <a href="https://mgibson7.github.io/networthStatement/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/networthStatement" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay4}>INFO</button>
        <p className="descript" style={{display: display4? 'flex' : 'none'}}>A webapp for charting your networth and seeing where you stand. Utilizes vanilla Javascript and CSS  </p>
        </div> 

        <div className="projectFea "  onMouseOver={e => (e.currentTarget.style.border = "5px solid #7fffd4")} alt = ""
    onMouseOut={e => (e.currentTarget.style.border = "none")}>
        <iframe scrolling="no" className="iframeImg" src="https://mgibson7.github.io/freefiretools/" title="AlgoFlix"></iframe>
        <a href="https://mgibson7.github.io/freefiretools/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/freefiretools" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>A small financial independence brochure site. Utilizes webpack, vanilla Javascript and CSS </p>
        </div> 
    </div>
    

 
  
  </div>

  )
}

export default Projects
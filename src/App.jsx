import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Resources from "./pages/resources/Resources";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
  return (
    <>
  <Router>
  <Navbar/>
    <Routes>
    <Route exact path="/" element = { <Home />}/>
     <Route exact path="/projects" element = { <Projects/>}/>
     <Route exact path="/testimonials" element = { <Testimonials/>}/>
     <Route exact path="/resources" element = { <Resources/>}/>

    
    

    </Routes>
    
     

  </Router>
  </>


   
  );
}

export default App;

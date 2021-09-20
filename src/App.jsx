import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works"
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import {
    BrowserRouter as Router,
  } from "react-router-dom";


function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Router>
            <div className="app">
                <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <div className="sections">
                    <Intro />
                    <Projects />
                    <Works />
                    <Education />
                    <Contact />
                    {/* <Testimonials /> */}
                </div>
            </div>
        </Router>
    );
}

export default App;

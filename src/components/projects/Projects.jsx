import { ArrowBackIos, ArrowForwardIos, Code, DeveloperMode } from "@material-ui/icons";
import { useState } from "react"
import ProjectList from "../projectList/ProjectList";
import "./projects.scss"

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: (<Code className="icon"/>),
            title: "AncoreNotes Website",
            desc: [
                ":- Notes sharing website",
                ":- Used <b>MERN</b> stack",
                ":- Worked as a <b>Backend Developer</b>, implemented <b>Upvote</b>, <b>Top performer</b>, <b>Search</b> etc. cool features",
                ":- Recognized and Awarded by College Startup Innovation Cell"
            ],
            img: "assets/ancoreNotes.png",
            url: "http://www.ancorenotes.com"
        },
        {
            id: "2",
            icon: (<DeveloperMode className="icon"/>),
            title: "Personal Portfolio",
            desc: [
                ":- My second personal portfolio",
                ":- Used <b>React and SASS</b>",
                ":- Used <b>ExpressJs</b> at backend and <b>nodemailer</b> for feedback email",
                ":- Fully responsive"
            ],
            img: "assets/portfolio2.png",
            url: "ancorenotes.com"
        },
        {
            id: "3",
            icon: (<DeveloperMode className="icon"/>),
            title: "Personal Portfolio",
            desc: [
                ":- My first personal portfolio",
                ":- Used <b>HTML, CSS, JS</b> and <b>ExpressJs</b>",
                ":- Fully responsive"
            ],
            img: "assets/portfolio1.png",
            url: "https://myportfolio-rahul01.herokuapp.com/"
        }
    ];

    const handleClick = (way) => {
        way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
    }

    return (
        <div className="projects" id="projects">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (
                    <ProjectList key={d.id} data={d}/>
                ))}
            </div>

            <ArrowBackIos className="arrow left" onClick={() =>  handleClick("left")} />
            <ArrowForwardIos className="arrow right" onClick={() =>  handleClick("right")} />
        </div>
    )
}

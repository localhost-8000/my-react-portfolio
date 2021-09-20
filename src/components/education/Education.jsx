import { DateRange, School } from "@material-ui/icons"
import { useState } from "react"
import EducationList from "../educationList/EducationList"
import "./education.scss"

export default function Education() {
    const [selected, setSelected] = useState(0);

    const list = [
        {
            id: 0,
            title: "Graduation (B. Tech)",
            name: "NIT Agartala, Tripura",
            branch: "Computer Science & Engineering",
            date: "Aug 19 - present",
            achievements: [
                "Internship Coordinator of CSE department",
                "Secured 9.37 CGPA till current semester",
                "Actively participated in Tech and Cultural festival"
            ],
            markUrl: "https://drive.google.com/file/d/14U0oxwSVSRvffWVFlcoGT4USDAw8JjfU/view?usp=sharing"
        },
        {
            id: 1,
            title: "Intermediate(12th)",
            name: "JNV Nalanda, Bihar",
            branch: "Science Stream",
            date: "July, 17 - May, 19",
            achievements: [
                "Secured 94.8% marks",
                "Participated in National-level Science Talent Search Examination(NSTSE) and secured Ist rank in Bihar State",
                "Selected in Super-30 owned by famous Mathematician Mr. Anand Kumar"
            ],
            markUrl: "https://drive.google.com/file/d/1-OPL3LERfqifYjBbF2__0IF5y1UNmHls/view?usp=sharing"
        }
    ]

    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <ul>
                {list.map(item => (
                    <EducationList 
                        title={item.title} 
                        id={item.id} 
                        key={item.id} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="box">
                    <div className="top">
                        <h2>{list[selected].name}</h2>
                    </div>
                    <div className="center">
                        <span className="item left"><School className="icon"/>{list[selected].branch}</span>
                        <span className="item right"><DateRange className="icon"/>{list[selected].date}</span>
                    </div>
                    <div className="bottom">
                        <h3>Acheivements</h3>
                        <ul>
                            {list[selected].achievements.map( a => (
                                <li>{a}</li>
                            ))}
                        </ul>
                    </div>
                    <button><a href={list[selected].markUrl} rel="noreferrer" target="_blank">Mark Statement</a></button>
                </div>
            </div>
        </div>
    )
}

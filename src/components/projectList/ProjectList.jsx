import "./projectList.scss";
import { Link } from "@material-ui/icons";

export default function ProjectList({ data }) {
    return (
        <div id="container">
            <div className="items">
                <div className="left">
                    <div className="leftContainer">

                        <div className="topContainer">
                            <div className="imgContainer">
                                {data.icon}
                            </div>
                            <h2>{data.title}</h2>
                        </div>

                        <div className="paraContainer">
                            {data.desc.map(p => (
                                <p dangerouslySetInnerHTML={{__html: p}}></p>
                            ))}
                        </div>

                        <div className="linkContainer">
                            <a href={data.url} rel="noreferrer" target="_blank"><Link style={{marginRight: "3px"}}/>Website</a>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={data.img} alt="project-img"/>
                </div>
            </div>
        </div>
    )
}

import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="container left">
                <div className="date">Sep,2021 - Pres</div>
                <img src="assets/nitLogo.png" alt="NITA" className="icon"/>
                <div className="content">
                    <h2>Internship Coordinator at NIT Agartala</h2>
                    <p>-Building <b>strong relationship</b> with companies</p>
                    <p>-Providing internships oppurtunity to students</p>
                </div>
            </div>

            <div className="container right">
                <div className="date">June,2021 - Pres</div>
                <img src="assets/ecsLogo.jpg" alt="ecstasy" className="icon" />
                <div className="content">
                    <h2>Backend Developer Intern at Ecstasy</h2>
                    <p>-Converting raw NodeJs application into scalable application</p>
                    <p>-Implemented <b>Video Upload, Feed, message and email notification</b> etc.</p>
                    <p>-Tech: <b>Javascript, NodeJs, Firebase, ExpressJs</b></p>
                </div>
            </div>

            <div className="container left">
                <div className="date">Oct,2020-Dec,2020</div>
                <img src="assets/ceLogo.jfif" alt="clearExam" className="icon"/>
                <div className="content">
                    <h2>Frontend Intern at ClearExam</h2>
                    <p>-Improved <b>quiz interface</b></p>
                    <p>-Uploaded quiz contents and updated the blog website</p>
                    <p>-Tech: <b>HTML, CSS, Javascript</b></p>
                </div>
            </div>

        </div>
    )
}

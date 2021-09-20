import { LinkedIn, Mail } from "@material-ui/icons"
import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Berlin",
            title: "Money Heist Specialist",
            img: "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw5fHxwcm9maWxlJTIwYXZhdGFyfGVufDB8fHx8MTYzMTM1MDcwMQ&ixlib=rb-1.2.1&q=80&w=1080",
            desc: "lorem ipsu dolor sit amet consectetur adipisicing elit. Plaeat mangan dolreama dosfnnso ffjs"
        },
        {
            id: 2,
            name: "Professor",
            title: "Money Heist Specialist",
            img: "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw5fHxwcm9maWxlJTIwYXZhdGFyfGVufDB8fHx8MTYzMTM1MDcwMQ&ixlib=rb-1.2.1&q=80&w=1080",
            desc: "lorem ipsu dolor sit amet consectetur adipisicing elit. Plaeat mangan dolreama dosfnnso ffjs",
            featured: true
        },
        {
            id: 3,
            name: "Tokyo",
            title: "Money Heist Specialist",
            img: "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw5fHxwcm9maWxlJTIwYXZhdGFyfGVufDB8fHx8MTYzMTM1MDcwMQ&ixlib=rb-1.2.1&q=80&w=1080",
            desc: "lorem ipsu dolor sit amet consectetur adipisicing elit. Plaeat mangan dolreama dosfnnso ffjs"
        }
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(p => (
                    <div className={p.featured ? "card featured" : "card"}>
                        <div className="top">
                            <LinkedIn className="left"/>
                            <img src={p.img} alt="" className="user"/>
                            <Mail className="right"/>
                        </div>
                        <div className="center">
                            {p.desc}
                        </div>
                        <div className="bottom">
                            <h3>{p.name}</h3>
                            <h4>{p.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

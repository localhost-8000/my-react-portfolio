import "./educationList.scss"

export default function EducationList({ title, id, active, setSelected }) {

    
    return (
        <li 
            className={active ? "educationList active": "educationList"} 
            onClick={() => setSelected(id)}
        >
            {title}  
        </li>
    )
}

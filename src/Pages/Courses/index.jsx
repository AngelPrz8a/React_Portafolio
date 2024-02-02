import db from "./db.json";
import Course from "../../Components/Course"

const Courses =()=>{
    
    return(
    <>
        <h1>Courses</h1>

        <div>
            {db.map((item) => (
                <Course key={item.institute} data={item} />
            ))}
        </div>
    </>
    )
}

export default Courses
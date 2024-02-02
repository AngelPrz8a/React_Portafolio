import db from "./db.json";
import Contact from "../../Components/Contact";

const Contacts =()=>{ 

    return(        
    <>
        <h1>Contacts</h1>

        <div>
            {db.map(element=>(
                <Contact key={element.name} data={element} />
            ))}
        </div>
    </>
    )
}

export default Contacts
import db from "./db.json";

const Courses =()=>{
    
    return(
    <>
        <h1>Courses</h1>
        
    <div>
        {db.map((item) => (
            <div key={item.duration} className="study-card card actual">
                <div className="study-header">
                    <div className="study-head">
                        <div className="img">
                            <img className="circle circle-big" src="./assets/img/tecmd-logo.jpeg" alt="" />
                        </div>
                        <p className="study-name">{item.programName}</p>
                    </div>
                    <div className="study-details">
                        <p>{item.institute}</p>
                        <p>{item.duration}</p>
                    </div>
                </div>
                
                <div className="study-body">
                    <p><strong>{item.state}</strong></p>
                </div>
            </div>
        ))}
    </div>
    </>
    )
}

export default Courses
const Course =(data)=>{
    return(
        <div>
            <h2>{data.data.institute}</h2>
            <p>{data.data.programName}</p>
        </div>
    )
}

export default Course
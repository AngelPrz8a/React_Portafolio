import "./style.css"

const Contact =(data)=>{
    return(
        <div className="contact">
            <h1>{data.data.name}</h1>
        </div>
    )
}

export default Contact
import db from "../Symbols_contact/db_symbols_contact.json"

const Footer = () => {
    return (
        <>
        <footer>
            {/*<p className="title">Contactame</p>*/}
            <div className="footer-container" >
                {
                    db.map(element=>(
                        <a key={element.name} target="_blank" rel="noopener noreferrer" 
                        href={element.link}>
                            <div className="img">
                                <svg className="circle-medium fill-white" role="img" viewBox={element.viewBox} xmlns={element.xmlns}><title>{element.title}</title><path d={element.d}/></svg>                    
                            </div>
                        </a>
                    ))
                }
            </div>
        </footer>
        </>
    )
}

export default Footer
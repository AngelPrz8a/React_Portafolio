import db from "../Symbols_contact/db_symbols_contact.json"
const Header = ()=>{
    return(
        <>
            <header>
                <div className="header-title">
                    <h1 className="name">Juan Angel Perez Ochoa</h1>
                    <p className="profession">Desarrollador Junior Back-end</p>
                </div>
                <div className="header-contact">
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
            </header>
        </>
    )
}

export default Header
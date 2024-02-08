import db from "./db.json"
import db_symbols from "../Symbols/db_symbols.json"
import Symbols from "../Symbols"

const About = (id) => {

    const symbols_name=(json_symbols)=>{
        const db_names=[]
        json_symbols.map(element=>{
            db_names.push(element.name)
        })
        return db_names
    }

    return (
        <>
        <section id={id.id}>
            <p className="title">Sobre mi</p>
            <div className="about">
                <div className="about-head">
                    <p>
                        {db.about.map((paragraph)=>(
                            <>
                                <p key={paragraph.id}>{paragraph.paragraph}</p>
                                {paragraph.id !== 3 && <br />}
                            </>
                        ))}
                    </p>
                </div>
                <div className="about-tools">
                    {Symbols(symbols_name(db_symbols)).map((skill)=>(
                        <div key={skill.name} className="img">
                            <svg className="circle-small fill-white" role="img" viewBox={skill.viewBox} xmlns={skill.xmlns}><title>{skill.title}</title><path d={skill.d}/></svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <hr/>
        </>  
    )
}

export default About
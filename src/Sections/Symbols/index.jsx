import db_symbols from "./db_symbols.json"

const Symbols = (names)=>{
    let result = []
    names.map(name=>{
        db_symbols.map(element=>{
            if(name == element.name){
                result.push(element)
            }
        })
    })
    return result
}

export default Symbols
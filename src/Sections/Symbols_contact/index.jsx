import db from "./db_symbols_contact.json"

export default function Symbols_contact() {
    let symbols = []
    db.map(element=>(
        symbols.push(element)
    ))
}
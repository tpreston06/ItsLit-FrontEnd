import { getLitty } from '../services/litty-api'
import { useState, useEffect } from 'react'
import Create from './CreateItsLit'

export default function Litty() {
    const [litty, setLitty] = useState([])
    useEffect(() => {
        getLitty()
            .then(res => setLitty(res.data))
    }, [])
    console.log(litty)
    return (
        <div>
            <ul>
                {litty.map((itslit) => {
                    return (
                        <li><a href={`/${itslit._id}`}>{itslit.description}</a>
                        </li>
                    )
                })}

            </ul>
            <Create />
        </div>
    )

}

import {getItsLit, deleteItsLit} from '../services/litty-api'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'


function ItsLit() {
    const nav = useNavigate()
    const {id} = useParams()
    const [itslit, setItsLit] = useState({})
    useEffect(() => {getItsLit(id)
    .then(res => setItsLit(res.data))
}, [])

    const deleteItsLitty = () =>{
        deleteItsLit(id) // service in litty-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>It's Lit:</h1>
            <h3>{itslit.description}</h3>
            Completed: <input type='checkbox' checked={itslit.complete} /> 
            <button onClick={() => {nav('/${id}/edit')}}>Edit</button>
            <button onClick={deleteItsLitty}>Delete</button>
        </div>
    )
}

export default ItsLit
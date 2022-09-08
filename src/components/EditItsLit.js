import {getItsLit, editItsLit} from '../services/litty-api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
    const {id} = useParams()
    const nav = useNavigate()
    const[data, setData] = useState({})

    useEffect(() => {
        getItsLit(id) //get the itslit that matches this id
        .then(res => setData(res.data)) // updating the state to the itslit we get back
    }, []) // prevent a continous loop

    const editItsLitty = (e) => {
        e.preventDefault()
        const updatedItsLit = {description: e.target.description.value, completed: e.target.complete.checked}
        editItsLitty(id, updatedItsLit)
        nav('/${id}')
    }
    return(
        <div>
            <h1>Edit Scent</h1>
            <form onSubmit={editItsLitty}>
                <input type ='text' name='description' defaultValue={data.description} />
                <select name="cars" id="cars">
                    <option value="scent">Vanilla</option>
                    <option value="scent">Saffron</option>
                    <option value="scent">Strawberries</option>
                    <option value="scent">Citrus</option>
                </select>
                Complete: <input type='checkbox' name='complete' defaultChecked={data.complete} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Edit;
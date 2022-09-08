import {useNavigate} from 'react-router-dom'
import {createItsLit} from '../services/litty-api'

function Create() {
    const nav = useNavigate()

    const createItsLitty = (e) => {
        const itslit = {description: e.target.description.value, complete: false}
        createItsLit(itslit)
        nav('/')
    }
    return(
        <div>
            <h1>Create a New Scent</h1>
            <form onSubmit={createItsLitty}>
                <input type='text' name='description' id='dsc' />
                <select name="cars" id="cars">
                    <option value="scent">Vanilla</option>
                    <option value="scent">Saffron</option>
                    <option value="scent">Strawberries</option>
                    <option value="scent">Citrus</option>
                </select>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create
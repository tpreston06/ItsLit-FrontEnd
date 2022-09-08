// This file will be our endpoints
import axios from 'axios'

export const getLitty = () => {
    const URL = 'http://localhost:3001/litty'
    const response = axios.get(URL)
    return response
}

export const getItsLit = (id) => {
    const URL = `http://localhost:3001/litty/${id}`
    const response = axios.get(URL)
    return response
}

export const deleteItsLit = (id) => {
    const URL = `http://localhost:3001/litty/${id}`
    const response = axios.delete(URL)
    return response
}

export const editItsLit = (id, updatedItsLit) => {
    const URL = `http://localhost:3001/litty/${id}`
    const response = axios.put(URL, updatedItsLit)
    return response
}

export const createItsLit = (itslit) => {
    const URL = 'http://localhost:3001/litty'
    const response = axios.post(URL, itslit)
    return response
}
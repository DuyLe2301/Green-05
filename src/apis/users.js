import axios from "axios";

export const getUsers = () => {

    return (axios.get('https://62fce65f6e617f88dea09d96.mockapi.io/users/'))

}
export const getUser = (id) => {

    return (axios.get(`https://62fce65f6e617f88dea09d96.mockapi.io/users/${id}`))

}
export const createUsers = (formData) => {

    return (axios.post('https://62fce65f6e617f88dea09d96.mockapi.io/users/',formData))

}
export const editUsers = (id,formData) => {

    return (axios.put(`https://62fce65f6e617f88dea09d96.mockapi.io/users/${id}`,formData))

}
export const deleteUsers = (id) => {

    return (axios.delete(`https://62fce65f6e617f88dea09d96.mockapi.io/users/${id}`))

}
export const getOrganizations = () => {

    return (axios.get('https://62fce65f6e617f88dea09d96.mockapi.io/organization/'))

}




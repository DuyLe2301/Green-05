import axios from "axios";
export const getOrganizations = () => {

    return (axios.get('https://62fce65f6e617f88dea09d96.mockapi.io/organization/'))

}
export const getOrganization = (id) => {

    return (axios.get(`https://62fce65f6e617f88dea09d96.mockapi.io/organization/${id}`))

}
export const createOrganizations = (formData) => {

    return (axios.post('https://62fce65f6e617f88dea09d96.mockapi.io/organization/',formData))

}
export const editOrganizations = (id,formData) => {

    return (axios.put(`https://62fce65f6e617f88dea09d96.mockapi.io/organization/${id}`,formData))

}
export const deleteOrganizations = (id) => {

    return (axios.delete(`https://62fce65f6e617f88dea09d96.mockapi.io/organization/${id}`))

}
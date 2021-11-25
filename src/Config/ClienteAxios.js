import axios from 'axios'

const ClienteAxios = axios.create({
	baseURL: 'https://fakestoreapi.com'
})

export default ClienteAxios
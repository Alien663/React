import axios from 'axios'

const config = () => (
	process.env.NODE_ENV === 'development' ? {
		apiurl: "http://localhost:59089/api",
		cors: true
	} : {
		apiurl: '/api',
		cors: false,
	}
)
const CallAPI = async ({
	cmd,
	method = "GET",
	type = "json",
	data = {},
	headers = { 'Content-Type': 'application/json' },
	fileList = [],
}) => {
	method = method.toUpperCase()

	switch (method) {
		case "GET":
			return axios.get(`${config.apiurl}/${cmd}`, {
				headers,
				withCredentials: config.cors,
				params: data,
			})
		case "POST":
			return axios.post(`${config.apiurl}/${cmd}`, data, {
				headers,
				withCredentials: config.cors,
			})
		case "PUT":
			return axios.put(`${config.apiurl}/${cmd}`, data, {
				headers,
				withCredentials: config.cors,
			})
		case "DELETE":
			return axios.delete(`${config.apiurl}/${cmd}`, data, {
				headers,
				withCredentials: config.cors,
			})
		default:
			return { Message: `Http Method : ${method} is not allow` }
	}
}

export default CallAPI

import axios from 'axios'

const httpRequest = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/",
})

export const get = async (patch, options) => {
    const res = await httpRequest.get(patch, options)
    return res.data
}

export default httpRequest
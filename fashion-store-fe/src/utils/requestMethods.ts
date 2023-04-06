import axios from 'axios';

const BASE_URL = 'http://localhost:5000'
const TOKEN =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmNlNDUwYjE0ZTYyMTMxNmVmNGFhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc1Mzc2MywiZXhwIjoxNjgxMDEyOTYzfQ.2y99aXPVvsa7L0yKddHDxHTItOHSX9pbMmQcyt2xrlw'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})
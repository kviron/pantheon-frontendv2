import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
    baseURL: __API__,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const $api = axios.create(options)
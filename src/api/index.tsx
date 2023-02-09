import axios from "axios";

export const client = axios.create(
    {
        baseURL: 'https://testing-8f9dc-default-rtdb.asia-southeast1.firebasedatabase.app/'
    }
)
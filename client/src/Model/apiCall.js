import axios from "axios";

/**
 * Model that handles all axios HTTP calls to the express API.
 * Contains the base URL to the express API
 */
export default class ApiCall {
    constructor() {

    }

    apiAxios() {
        return axios.create({
            baseURL: "/",
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }


}
      
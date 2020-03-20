// utils/AuthService.js
export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'https://etl-auth.herokuapp.com/api/v1/auth'
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
    }

    login = (email, password) => {
        // Get a token
        return this.fetch(`${this.domain}/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => {
            const {success, errors} = res;
            if (!success) {
                return res;
            }
            const { id, email, token} = res.data;
            this.setToken(token);
            localStorage.setItem('user_id', id)
            localStorage.setItem('user_email', email)
            return res;
        }).then(res => {
            return Promise.resolve(res)
        })
    }

    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        if (!token) return false;
        return true;
    }

    setToken = (idToken) => {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken = () => {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    _checkStatus = (response) => {
        // raises an error in case response status is not a success
        if (response.success || response.status >= 200 && response.status < 300) {
            return response
        } else {
            console.error(response);
            return response;
            // var error = new Error(response.statusText)
            // error.response = response
            // throw error
        }
    }

    fetch = (url, options) => {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['x-access-token'] = this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
        .then(response => response.json())
        .then(this._checkStatus)
    }
}

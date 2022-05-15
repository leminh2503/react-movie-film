import axiosClient from "./axiosClient";

const auth = {
    login: "auth/login",
    register: "auth/register",
}

const authApi = {
    login: (data, callback) => {
        return axiosClient.post(auth.login, data)
            .then(res => {
                return callback(null, res.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    register: (data, callback) => {
        return axiosClient.post(auth.register, data)
            .then(res => {
                return callback(null, res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default authApi;
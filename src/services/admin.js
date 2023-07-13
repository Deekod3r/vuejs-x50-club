import axios from 'axios'

class AdminService{
    getAdmin(userId) {
        return axios.get(`/admin/get-user/${userId}`)
    }
    insert(insertRequest) {
        return axios.post(`/api/admin/insert`, insertRequest)
    }
    login(loginRequest) {
        return axios.post(`/api/admin/login`, loginRequest)
    }
    homePageUser() {
        return axios.get(`/user/home`)
    }
    search(key) {
        return axios.get(`/admin/get-users?key=${key}`)
    }
    getUsers(){
        return axios.get(`/admin/get-users`)
    }
    getRoles() {
        return axios.get(`/admin/get-roles`)
    }
    update(updateRequest) {
        return axios.put(`/admin/update-user`, updateRequest)
    }
    delete(userId) {
        return axios.delete(`/admin/delete-user/${userId}`)
    }
    // checkLogin(router) {
    //     if(window.sessionStorage.getItem("jwtToken") == null || window.sessionStorage.getItem("jwtToken") == "") {
    //         router.push("/");
    //     }
    // }
}

export default new AdminService()
<template>
    <form @submit.prevent="insert()">
        <input v-model="admin.adminName" type="text" name="adminName" placeholder="name">
        <input v-model="admin.adminAccount" type="text" name="adminAccount" placeholder="account">
        <input v-model="admin.adminPassword" type="text" name="adminPassword" placeholder="password">
        <select v-model="admin.isActive" name="isActive">
            <option :value='true'>Active</option>
            <option :value='false'>InActive</option>
        </select>
        <button>Save</button>
    </form>
</template>

<script>
// import Spinner from '../../shared/Spinner.vue';
import AdminService from '../../../services/admin.js'
export default {
    name: 'AdminInsert',
    data(){
        return {
            admin: {
                adminAccount: '',
                adminPassword: '',
                adminName: '',
                isActive: true
            }
        }
        
    },
    components: {
        // Spinner
    },
    methods: {
        insert(){
            // if (this.checkInsert() == "") {
                //console.log(this.User);
                //console.log(this.checkUpdate());
                AdminService.insert(this.admin) 
                    .then((res) => {
                        console.log(res);
                        console.log(this.admin);
                        if (res.data.responseCode == "01") {
                            alert("Success");
                        } else alert(res.data.responseMessage);
                    })
                .catch((err) => {
                    // this.display = 'block';
                    // this.message = "Cập nhật thất bại. Error: " + err;
                    alert("Cập nhật thất bại. Error: " + err);
                })
            // } else {
            //     this.display = 'block';
            //     this.message = this.checkInsert();
            // }
        }
    },
    created() {
        document.title = 'Thêm quản trị viên';
    }
}
</script>
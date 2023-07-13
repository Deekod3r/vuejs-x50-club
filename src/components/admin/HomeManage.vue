<template>
    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">

        <AdminNavbar/>

        <div class="container bg-primary hero-header">
            <div class="container px-lg-5">
                <div class="row g-5 align-items-end">
                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="section-title text-secondary">Trang quản trị<span></span></p>
                        <h1 class="text-white mb-4 ">Câu lạc bộ Học thuật <span class="x50">X50</span></h1>
                        <p class="text-white pb-3 "></p>
                    </div>
                    <div class="col-lg-6 text-center text-lg-start">
                        <img class="img-fluid" src="../../../public/img/imgs/logo-white.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- Navbar & Hero End -->
</template>

<script>
import AdminNavbar from '../layouts/AdminNavbar.vue';
import Spinner from '../shared/Spinner.vue';
export default {
    name: 'HomeManage',
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
        Spinner,
        AdminNavbar
    },
    methods: {
        
    },
    created() {
        document.title = 'Trang chủ';
    }
}
</script>
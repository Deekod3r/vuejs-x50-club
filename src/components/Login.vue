<template>
  <div class="container-xxl bg-white p-0">

        <!-- <Spinner/> -->

        <div class="container-xxl position-relative p-0">            
            <div class="container-xxl py-5 bg-primary hero-header">
                <div class="container my-3 py-3 px-lg-5">
                  <div class="col-12 text-center">
                    <a class="text-white" href="/"><h1 class="text-white animated slideInDown go-to-home mb-5">TỚI TRANG CHỦ</h1></a>
                  </div>  
                </div>
            </div>
        </div>

        <!-- Login Start -->
        <div class="container-xxl p3-5">
            <div class="container py-3 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>ĐĂNG NHẬP<span></span></p>
                    <h1 class="text-center mb-5">QUYỀN QUẢN TRỊ VIÊN</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="wow fadeInUp mb-3" data-wow-delay="0.3s">
                            <form @submit.prevent="login()">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input v-model="admin.adminAccount" type="text" class="form-control" id="adminAccount" name="adminAccount" placeholder="Username">
                                            <label for="adminAccount">Tài khoản</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input v-model="admin.adminPassword" type="text" class="form-control" id="adminPassword" name="adminPassword" placeholder="Username">
                                            <label for="adminPassword">Mật khẩu</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Đăng nhập</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="alert" :class="{ 'alert-danger': danger }" role="alert" :style="{ display }">
                           {{ message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Login End -->

        <StudentFooter />

        <GoToTop />

    </div>
</template>

<script>
import Spinner from './shared/Spinner.vue';
import StudentFooter from './layouts/StudentFooter.vue';
import GoToTop from './shared/GoToTop.vue';
import AdminService from '../services/admin.js'
import func from '../shared/func.js'
import responseCode from '../shared/responseCode.js';
export default {
    name: 'Login',
    components: {
        Spinner,
        StudentFooter,
        GoToTop
    },
    data(){
        return {
            admin: {
                adminAccount: '',
                adminPassword: '',
            },
            danger: false,
            message: '',
            display: 'none'
        }
    },
    methods: {
        login(){
            if (this.admin.adminAccount != "" && this.admin.adminPassword != "") {
                AdminService.login(this.admin) 
                    .then((res) => {
                        if (res.data.responseCode == responseCode.success) {
                            this.$router.push("/manage");
                        } else {
                            this.display = 'block';
                            this.danger = true;
                            this.message = res.data.responseMessage;
                            setTimeout(() => {
                                this.display = 'none';
                                this.danger = false;
                                this.message = '';
                            }, 3000);
                        }
                    })
                .catch((err) => {
                    this.display = 'block';
                    this.danger = true;
                    this.message = 'Có lỗi xảy ra, vui lòng thử lại sau ít phút. Chi tiết lỗi: ' + err;
                    setTimeout(() => {
                        this.display = 'none';
                        this.danger = false;
                        this.message = '';
                    }, 3000);
                })
            } else {
                this.display = 'block';
                this.danger = true;
                this.message = 'Vui lòng điền đầy đủ thông tin';
                setTimeout(() => {
                    this.display = 'none';
                    this.danger = false;
                    this.message = '';
                }, 3000);
            }
        }
    },
    created() {
        document.title = 'Đăng nhập';
    }
}
</script>

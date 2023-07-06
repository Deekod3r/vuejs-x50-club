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
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="username" placeholder="Username">
                                            <label for="name">Tài khoản</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="password" placeholder="Username">
                                            <label for="email">Mật khẩu</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Đăng nhập</button>
                                    </div>
                                </div>
                            </form>
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

export default {
    name: 'Login',
    components: {
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Đăng nhập';
    }
}
</script>


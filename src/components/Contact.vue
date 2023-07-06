<template>
    <div class="container-xxl bg-white p-0">
        <!-- <Spinner/> -->

        <!-- Navbar & Hero Start -->
        <div class="container-xxl position-relative p-0">

            <StudentNavbar/>
            
            <div class="container-xxl py-5 bg-primary hero-header">
                <div class="container my-5 py-3 px-lg-5">
                    <div class="row g-5 py-3">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">Liên hệ</h1>
                            <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Trang chủ</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page"><a class="text-white linked" href="/contact">Liên hệ</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->


        <!-- Contact Start -->
        <div class="container-xxl py-3">
            <div class="container py-3 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Liên hệ với X50<span></span></p>
                    <h1 class="text-center mb-5">Biểu mẫu thông tin</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <form action="#">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Họ và tên">
                                            <label for="name">Họ và tên</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Email">
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Số điện thoại">
                                            <label for="subject">Số điện thoại</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Nội dung" id="message" style="height: 150px"></textarea>
                                            <label for="message">Nội dung</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Gửi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->


        <StudentFooter />

        <GoToTop />

    </div>
</template>
  
<script>
import StudentNavbar from './layouts/StudentNavbar.vue';
import Spinner from './shared/Spinner.vue';
import StudentFooter from './layouts/StudentFooter.vue';
import GoToTop from './shared/GoToTop.vue';

export default {
    name: 'Contact',
    components: {
        StudentNavbar,
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Liên hệ';
    }
}
</script>

  
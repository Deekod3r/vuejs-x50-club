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
                            <h1 class="text-white animated slideInDown">Khoá học</h1>
                            <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="/">Trang chủ</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page"><a class="text-white linked" href="/service">Khoá học</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->


        <!-- Service Start -->
        <div class="container-xxl py-3">
            <div class="container py-3 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Hoạt động<span></span>
                    </p>
                    <h1 class="text-center mb-5">Các hoạt động học thuật</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="service-item d-flex flex-column text-center rounded activity">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-search fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Ôn thi</h5>
                            <p class="m-0">Hoạt động OVERCOME cuối mỗi kỳ học ôn tập kiến thức cho sinh viên toàn trường</p>
                            <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item d-flex flex-column text-center rounded activity">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-laptop-code fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Hướng dẫn đồ án</h5>
                            <p class="m-0">Tổ chức các lớp hướng dẫn đồ án trong và ngoài câu lạc bộ</p>
                            <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="service-item d-flex flex-column text-center rounded activity">
                            <div class="service-icon flex-shrink-0">
                                <i class="fa fa-thumbs-up fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Hội thảo</h5>
                            <p class="m-0">Tổ chức hội thảo</p>
                            <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="service-item d-flex flex-column text-center rounded activity">
                            <div class="service-icon flex-shrink-0">
                                <i class="fab fa-android fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Lớp học bổ sung</h5>
                            <p class="m-0">Tổ chức các lớp học nhiều kỹ năng: Tin học xây dựng, lập trình, tiếng anh,...</p>
                            <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service End -->


        <!-- Newsletter Start -->
        <div class="container-xxl bg-primary newsletter py-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-3 px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <p class="section-title text-white justify-content-center"><span></span>Đăng ký nhận thông tin về khoá học<span></span></p>
                        <h1 class="text-center text-white mb-4">Nhận tin nhanh và sớm nhất</h1>
                        <p class="text-white mb-4">Bạn sẽ nhận được các thông tin về hoạt động học thuật, khoá học của X50 sớm và có nhiều ưu đãi nhất</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Email" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Newsletter End -->


        <!-- Feedback Start -->
        <div class="container-xxl py-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-3 px-lg-5">
                <p class="section-title text-secondary justify-content-center"><span></span>Phản hồi từ học viên<span></span></p>
                <h1 class="text-center mb-5">Đánh giá tích cực</h1>
                <div class="owl-carousel testimonial-carousel">
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="../../public/assets/img/image.png" style="width: 65px; height: 65px;">
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="../../public/assets/img/image.png" style="width: 65px; height: 65px;">
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="../../public/assets/img/image.png" style="width: 65px; height: 65px;">
                            <div class="ps-4">
                                <h5 class="mb-1">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feedback End -->


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
    name: 'Service',
    components: {
        StudentNavbar,
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Khoá học';
    }
}
</script>

  
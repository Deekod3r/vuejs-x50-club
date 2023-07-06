<template>
    <div class="container-xxl bg-white p-0">
        <!-- <Spinner/> -->

        <!-- Navbar & Hero Start -->
        <div class="container-xxl position-relative p-0">
            <StudentNavbar/>
            <div class="container-xxl py-5 bg-primary hero-header">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-3">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated slideInDown">Lịch sử phát triển</h1>
                            <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Trang chủ</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Giới thiệu</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page"><a class="text-white linked" href="/about">Lịch sử phát triển</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->

        <!-- About Start -->
        <div class="container-xxl py-3">
            <div class="container py-3 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p class="section-title text-secondary">Giới thiệu<span></span></p>
                        <h4 class="mb-3">Lịch sử hình thành và phát triển với 15 năm thành tích,
                            kết nạp được hơn 100 hội viên cho Hội kỹ sư Xây dựng Việt Nam và giới thiệu được rất nhiều kỹ sư có chất lượng cao cho các doanh nghiệp, công ty
                        </h4>
                        <hr />
                        <h5 class="mb-3">Cơ cấu</h5>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Ban Chủ nhiệm</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Ban Chuyên môn</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="90"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Ban Tổ chức</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Ban Đối ngoại</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <a href="/about" class="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Xem thêm</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn w-100 h-100" data-wow-delay="0.5s" src="../../public/img/imgs/logo.png">
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->


        <!-- Facts Start -->
        <div class="container-xxl bg-primary fact py-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-3 px-lg-5">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i class="fa fa-certificate fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">15</h1>
                        <p class="text-white mb-0">Năm kinh nghiệm</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i class="fa fa-users fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">1500+</h1>
                        <p class="text-white mb-0">Thành viên</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i class="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">30+</h1>
                        <p class="text-white mb-0">Hoạt động học thuật</p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i class="fa fa-check fa-3x text-secondary mb-3"></i>
                        <h1 class="text-white mb-2" data-toggle="counter-up">100+</h1>
                        <p class="text-white mb-0">Hoạt động trải nghiệm</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Facts End -->
        

        <!-- Team Start -->
        <div class="container-xxl py-3">
            <div class="container py-3 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Cực hội viên<span></span></p>
                    <h1 class="text-center mb-5">Thành viên nổi bật</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="../../public/assets/img/user.png" alt="">
                                <h5>Đàm Mạnh Dũng</h5>
                                <span>Cựu thành viên. Giám đốc công ty A</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="../../public/assets/img/user.png" alt="">
                                <h5>Đàm Mạnh Dũng</h5>
                                <span>Cựu thành viên. Giám đốc công ty A</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src="../../public/assets/img/user.png" alt="">
                                <h5>Đàm Mạnh Dũng</h5>
                                <span>Cựu thành viên. Giám đốc công ty A</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Team End -->


        <StudentFooter />

        <GoToTop />
    </div>
</template>
  
<script>
import StudentNavbar from './layouts/StudentNavbar.vue';
import StudentFooter from './layouts/StudentFooter.vue';
import Spinner from './shared/Spinner.vue';
import GoToTop from './shared/GoToTop.vue';
export default {
    name: 'About',
    components: {
        StudentNavbar,
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Lịch sử phát triển';
    }
}
</script>

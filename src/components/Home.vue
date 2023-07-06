<template>
    <div class="container-xxl bg-white p-0">

        <!-- <Spinner/> -->

        <!-- Navbar & Hero Start -->
        <div class="container-xxl position-relative p-0">

            <StudentNavbar/>
            
            <div class="container bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5 align-items-end">
                        <div class="col-lg-6 text-center text-lg-start">
                            <p class="section-title text-secondary">Giới thiệu<span></span></p>
                            <h1 class="text-white mb-4 ">Câu lạc bộ Học thuật <span class="x50">X50</span></h1>
                            <p class="text-white pb-3 ">X50 là một trong những câu lạc bộ về học thuật hàng đầu trường Đại học Xây dựng Hà Nội với lịch sử phát 
                                triển kéo dài 15 năm. Đây là nơi để giao lưu, chia sẻ, môi trường phát triển toàn diện cho toàn thể sinh viên trong và ngoài trường Xây dựng.
                                Luôn tiên phong trong các hoạt động học thuật, ngoại khoá cho sinh viên.
                            </p>
                            <a href="/about" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 ">Xem thêm</a>
                            <a href="/contact" class="btn btn-light py-sm-3 px-sm-5 rounded-pill ">Liên hệ</a>
                            <!-- animated + (slideInRight, slideInLeft, slideDown, zoomIn) -->
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid" src="../../public/img/imgs/logo-white.png" alt="">
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
                        <p class="section-title text-secondary">Thông tin<span></span></p>
                        <h1 class="mb-3">Lực lượng hội viên đông đảo</h1>
                        <p class="mb-3"></p>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Nhiệt huyết</p>
                                <p class="mb-2">100%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Tiên phong</p>
                                <p class="mb-2">100%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <p class="mb-2">Chất lượng</p>
                                <p class="mb-2">100%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar bg-dark" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <a href="/about" class="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Xem thêm</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="../../public/assets/img/about.png">
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
                        <p class="text-white mb-0">Năm thành tích</p>
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
        <!-- <div class="container-xxl bg-primary newsletter py-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-3 px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <p class="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                        <h1 class="text-center text-white mb-4"></h1>
                        <p class="text-white mb-4"></p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text"
                                placeholder="Enter Your Email" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                    class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- Newsletter End -->


        <!-- News Start -->
        <div class="container-xxl py-3">
            <div class="container py-3 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Tin tức<span></span>
                    </p>
                    <h1 class="text-center mb-5">Nổi bật</h1>
                </div>
                <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="col-12 text-center">
                        <ul class="list-inline mb-5" id="portfolio-flters">
                            <li class="mx-2 active" data-filter="*">Tất cả</li>
                            <li class="mx-2" data-filter=".first">Học thuật</li>
                            <li class="mx-2" data-filter=".second">Giải trí</li>
                        </ul>
                    </div>
                </div>
                <div class="row g-4 portfolio-container">
                    <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                        <div class="rounded overflow-hidden">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid w-100" src="../../public/assets/img/image.png" alt="">
                                <div class="portfolio-overlay">
                                    <a class="btn btn-square btn-outline-light mx-1" href="../../public/assets/img/image.png"
                                        data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                    <a class="btn btn-square btn-outline-light mx-1" href=""><i class="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div class="bg-light p-4 news">
                                <a href="" class="text-primary fw-medium mb-2">X50 chiêu mộ thành công CR7</a>
                                <p class="lh-base mb-0">Vừa qua, trên trang thông tin của X50 đã đưa tin câu lạc bộ này vừa có được chữ ký của ngôi sao người Bồ Đào Nha - CR7 với bản hợp đồng trị giá 10.000$...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                        <div class="rounded overflow-hidden">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid w-100" src="../../public/assets/img/image.png" alt="">
                                <div class="portfolio-overlay">
                                    <a class="btn btn-square btn-outline-light mx-1" href="../../public/assets/image.png"
                                        data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                    <a class="btn btn-square btn-outline-light mx-1" href=""><i class="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div class="bg-light p-4 news">
                                <a href="" class="text-primary fw-medium mb-2">Elon Musk thất bại trong công cuộc thâu tóm X50</a>
                                <p class="lh-base mb-0">Dù mới tuyên bố sẽ mua lại X50 nhưng sáng nay, ngày 31/02/2024, Elon Musk đã chính thức thông báo thương vụ này đã đổ bể khi ông không đủ tài sản để có thể mua lại câu lạc bộ này...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                        <div class="rounded overflow-hidden">
                            <div class="position-relative overflow-hidden">
                                <img class="img-fluid w-100" src="../../public/assets/img/image.png" alt="">
                                <div class="portfolio-overlay">
                                    <a class="btn btn-square btn-outline-light mx-1" href="../../public/assets/img/image.png"
                                        data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                    <a class="btn btn-square btn-outline-light mx-1" href=""><i class="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div class="bg-light p-4 news">
                                <a href="" class="text-primary fw-medium mb-2">X50 - Tổ chức học thuật số một Đông Nam Á</a>
                                <p class="lh-base mb-0">Sáng ngày 31/02/2023, ông Crack Obama công bố giải thưởng sao vàng cho các tập thể học thuật xuất sắc nhất. X50 chính là chủ nhân của ngôi đầu giải thưởng này..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- News End -->

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
    name: 'Home',
    data() {
        return {
            activeHome: true
        }
    },
    components: {
        StudentNavbar,
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Trang chủ';
    }
}
</script>

  
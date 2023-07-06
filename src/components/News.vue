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
                            <h1 class="text-white animated slideInDown">Tin tức</h1>
                            <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Trang chủ</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page"><a class="text-white linked" href="/news">Tin tức</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->


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
                                <h5 class="text-primary fw-medium mb-2">X50 chiêu mộ thành công CR7</h5>
                                <p class="lh-base mb-0">Vừa qua, trên trang thông tin của X50 đã đưa tin câu lạc bộ này vừa có được chữ ký của ngôi sao người Bồ Đào Nha - CR7 với bản hợp đồng trị giá 10.000$...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
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
                                <h5 class="text-primary fw-medium mb-2">Elon Musk thất bại trong công cuộc thâu tóm X50</h5>
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
                                <h5 class="text-primary fw-medium mb-2">X50 - Tổ chức học thuật số một Đông Nam Á</h5>
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
import Spinner from './shared/Spinner.vue';
import StudentFooter from './layouts/StudentFooter.vue';
import GoToTop from './shared/GoToTop.vue';

export default {
    name: 'News',
    components: {
        StudentNavbar,
        Spinner,
        StudentFooter,
        GoToTop
    },
    methods: {
    },
    created() {
        document.title = 'Dự án';
    }
}
</script>

  
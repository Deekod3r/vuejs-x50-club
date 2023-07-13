<template>
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
            <h1 class="m-0 club"><span class="x50">X50</span> CLUB</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto py-0">
                <a href="/" class="nav-item nav-link " id="home" ref="home" :class="{active:activeHome}"> Trang chủ</a>
                <a href="/service" class="nav-item nav-link" id="service" ref="service">Khoá học</a>
                <a href="/news" class="nav-item nav-link" id="news" ref="news">Tin tức</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="page" ref="page">Giới thiệu</a>
                    <div class="dropdown-menu m-0">
                        <a href="/about" class="dropdown-item" id="about" ref="about">Tổng quan</a>
                        <a href="/our-team" class="dropdown-item">Cơ cấu tổ chức</a>
                        <a href="/testimonial" class="dropdown-item">Bằng khen</a>
                        <a href="/404" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="/contact" class="nav-item nav-link" id="contact" ref="contact">Liên hệ</a>
            </div>
            <a href="/logout" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Đăng xuất</a>
        </div>
    </nav>
</template>

<script>

export default {
    name :'AdminNavbar',
    data() {
        return {
            activeHome: false,
            activeAbout: false
        }
    },
    components: {

    },
    methods: {
        onclickNavbar(page) {

        }
    },
    created() {
    }    
}
</script>
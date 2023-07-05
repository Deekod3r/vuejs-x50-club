<template>
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
            <h1 class="m-0">DGital</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto py-0">
                <a href="/" class="nav-item nav-link" id="home" ref="home">Home</a>
                <a href="/about" class="nav-item nav-link" id="about" ref="about">About</a>
                <a href="/service" class="nav-item nav-link" id="service" ref="service">Service</a>
                <a href="/project" class="nav-item nav-link" id="project" ref="project">Project</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="page" ref="page">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="/our-team" class="dropdown-item">Our Team</a>
                        <a href="/testimonial" class="dropdown-item">Testimonial</a>
                        <a href="/404" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="/contact" class="nav-item nav-link" id="contact" ref="contact">Contact</a>
            </div>
            <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
        </div>
    </nav>
</template>

<script>
    export default {
        name :'StudentNavbar',
        methods: {
            
        },
        created() {
        }    
    }
</script>
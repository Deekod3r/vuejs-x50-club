<template>
  <router-view></router-view>
  <StudentAssetScript />
</template>

<style>
  @import "https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap";
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css";
  @import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css";
  @import "./assets/lib/animate/animate.min.css";
  @import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
  @import "./assets/lib/lightbox/css/lightbox.min.css";
  @import "./assets/css/bootstrap.min.css";
  @import "./assets/css/style.css";
</style>

<script>
import StudentAssetScript from '@/components/layouts/StudentAssetScript.vue'
export default {
  name: 'App',
  components: {
    StudentAssetScript
  }
}
</script>

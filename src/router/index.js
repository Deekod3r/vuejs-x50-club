import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import OurTeam from '../views/OurTeam.vue'
import News from '../views/News.vue' 
import Service from '../views/Service.vue'
import Testimonial from '../views/Testimonial.vue' 
import Contact from '../views/Contact.vue'
import NotFound404 from '../views/errors/NotFound404.vue'
import Login from '../views/Login.vue'
BASE_URL = window.location.origin;
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { 
      title: 'Home' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { 
      title: 'About' 
    }
  },
  {
    path: '/our-team',
    name: 'our-team',
    component: OurTeam,
    meta: { 
      title: 'OurTeam' 
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News,
    meta: { 
      title: 'News' 
    }
  },
  {
    path: '/service',
    name: 'service',
    component: Service,
    meta: { 
      title: 'Service' 
    }
  },
  {
    path: '/testimonial',
    name: 'testimonial',
    component: Testimonial,
    meta: { 
      title: 'Testimonial' 
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { 
      title: 'Contact' 
    }
  },
  {
    path: '/404',
    name: 'not-found-404',
    component: NotFound404,
    meta: { 
      title: '404 not found' 
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { 
      title: 'Login' 
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

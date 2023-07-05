import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import OurTeam from '../views/OurTeam.vue'
import Project from '../views/Project.vue' 
import Service from '../views/Service.vue'
import Testimonial from '../views/Testimonial.vue' 
import Contact from '../views/Contact.vue'
import NotFound404 from '../views/errors/NotFound404.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
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
    path: '/project',
    name: 'project',
    component: Project,
    meta: { 
      title: 'Project' 
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

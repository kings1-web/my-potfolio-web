import { createApp } from 'vue'
//import './assets/tailwind.css'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import  Countup from 'vue-countup-v3'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({duration:1000})

const theme = localStorage.getItem('theme');
  if (!theme) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  }

createApp(App).component('Icon', Icon).component('Countup', Countup).mount('#app')


  
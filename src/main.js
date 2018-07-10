// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Root from './components/root'
import Education from './components/education-component/education'
import Footer from './components/footer-component/footer'
import Skills from './components/skills-component/skills'
import Summary from './components/summary-component/summary'
import WorkExperience from './components/work-experience-component/work-experience'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Root, Education, Footer, Skills, Summary, WorkExperience },
  template: '<App/>'
})

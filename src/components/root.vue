<template>
  <div>
    <!-- <Education></Education> -->
    <!-- <Footer></Footer> -->
    <Skills></Skills>
    <!-- <Summary></Summary> -->
    <WorkExperience></WorkExperience>
  </div>
</template>

<script>
import Education from './education-component/education.vue'
import Footer from './footer-component/footer.vue'
import Skills from './skills-component/skills.vue'
import Summary from './summary-component/summary.vue'
import WorkExperience from './work-experience-component/work-experience.vue'
export default {
  name: 'Root',
  components: {
    'Education': Education,
    'Footer': Footer,
    'Skills': Skills,
    'Summary': Summary,
    'WorkExperience': WorkExperience
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

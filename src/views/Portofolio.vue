<template>
  <div class="projects-container">
    <img
      src="../assets/illustrations/projects_ilustration 1.svg"
      alt=""
      class="projects--ilustration"
    />
    <div class="error">
      <h1 v-if="finalProjects.length <= 0">Error fetching the projects</h1>
    </div>

    <div class="cards-container">
      <ProjectCard
        v-for="project in finalProjects"
        :key="project.id"
        :projectName="project.name"
        :projectDescription="project.description"
        :projectLanguage="project.language"
        :projectLink="project.html_url"
        :projectHomepage="project.homepage"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
    components: { ProjectCard },
    data() {
        return {
            projectData: []
        }
    },
    async beforeMount() {
        const response = await axios.get("https://api.github.com/users/tanasievlad246/repos");
        this.projectData = response.data;
    },
    computed: {
        finalProjects: function () {
            return this.projectData.filter(project => project.description != null)
        }
    }
}
</script>

<style>
.projects-container {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  flex-direction: column;
  padding: 50px;
  padding-top: 0;
  height: 100%;
}

.projects--ilustration {
  position: absolute;
  right: 50px;
  top: 200px;
  z-index: -1;
}

@media screen and (max-width: 1125px) {
  .projects--ilustration {
    display: none;
  }
  .cards-container {
    text-align: center;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    flex-direction: column;
    align-items: center;
  }

  .projects-container h1 {
    font-size: 35px;
    line-height: 1;
    /* text-overflow: clip; */
  }
}
</style>
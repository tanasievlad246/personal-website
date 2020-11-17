<template>
  <div class="projects-container">
    <img
      src="../assets/illustrations/projects_ilustration 1.svg"
      alt=""
      class="projects--ilustration"
    />
    <h1 v-if="projectData.length <= 0">Error fetching the projects</h1>
    <div>
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
  flex-direction: column;
  padding: 50px;
}

.projects--ilustration {
  position: absolute;
  right: 50px;
  top: 200px;
  z-index: -1;
}
</style>
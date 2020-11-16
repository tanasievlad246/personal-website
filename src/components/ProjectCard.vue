<template>
  <div class="project-cards">
    <div class="project-image">
      <img
        :src="require(`../assets/icons/${projectLanguage}.svg`)"
        alt="programming language used"
      />
    </div>
    <div class="project-description">
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>
    </div>
    <div class="link-to-project">
      <a v-if="projectHomepage" :href="projectHomepage" target="_blank">
        <img
          src="../assets/icons/homepage.svg"
          alt="Link to project homepage"
        />
      </a>
      <a :href="projectLink" target="_blank">
        <img
          src="../assets/illustrations/github 1github.svg"
          alt="Link to github"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    projectName: String,
    projectDescription: String,
    projectLink: String,
    projectLanguage: String,
    projectHomepage: String
  }
}
</script>

<style>
.project-cards {
  display: flex;
  width: 50vw;
  padding: 15px;
  margin-top: 50px;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-content: center;
  align-items: center;
}

.project-card h2 {
  font-family: "Pacifico";
}

.project-description {
  width: 100%;
  padding: 15px;
}

.link-to-project img {
  height: 30px;
  width: auto;
}

.link-to-project {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* align-content: flex-end; */
  /* justify-content: flex-end; */
  /* height: 150px; */
}

.project-image img {
  height: 150px;
  width: auto;
}
</style>
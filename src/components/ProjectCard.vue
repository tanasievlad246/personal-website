<template>
  <div>
    <div class="project-image"></div>
    <div class="project-description">
      <h1></h1>
      <p></p>
      <div class="link-to-project"></div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    projectName: String,
    projectDescription: String,
    projectLink: String
  }
}
</script>

<style>
</style>
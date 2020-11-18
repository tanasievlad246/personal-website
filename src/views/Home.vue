<template>
  <div class="wrapper">
    <div class="home-headings-wrapper">
      <h1>Vlad Tanasie</h1>
      <h2>Web Developer</h2>
      <h2>Programmer</h2>
      <h2>Student</h2>
      <router-link to="/about">
        <button class="btn btn-main">More</button>
      </router-link>
    </div>
    <div class="image-wrapper">
      <img
        src="../assets/illustrations/home_illustration.svg"
        alt="programming"
      />
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.image-wrapper {
  padding-top: 60px;
  padding-right: 150px;
}

.image-wrapper img {
  width: 100%;
}

.home-headings-wrapper {
  align-self: center;
  justify-self: center;
  margin: 0 auto;
}

@media screen and (max-width: 1160px) {
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }

  .image-wrapper {
    display: none;
  }
}
</style>
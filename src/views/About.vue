<template>
  <div class="about-container">
    <div class="details-container">
      <h1>About me.</h1>
      <p>
        I always wanted to be a lwayer, always saw myself helping people, but,
        one day I heard about this thing called programming from a friend, and
        boy I loved it.
      </p>
      <p>
        Since then I started studying computer science as a second bachelors
        degree. From writing my first JavaScript lines to learning about
        computer memory and writing C programs time flied and I have enjoyed
        every moment of it.
      </p>
      <p>
        My specialties include JavaScript and front end frameworks like VueJS
        and ReactJS, I also love Java and PHP. I also like writing responsive
        websites and landing pages and also designing them sometimes.
      </p>
      <p>
        Momentarely I am freelancing building websites for small companies and
        learning and mastering programming. I am open for any kind of positions
        related to back-end development with PHP or Laravel, and also front-end
        jobs that include JavaScript, jQuery, VueJS or ReactJS.
      </p>
    </div>
    <div class="svg-container">
      <img src="../assets/illustrations/about_me_illustration 1.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.about-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  padding: 40px;
  font-size: 17px;
}

.details-container {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: center; */
  width: 100%;
}

.svg-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
}
</style>
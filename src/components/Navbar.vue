<template>
  <div>
    <nav class="navbar">
      <div>
        <router-link to="/"
          ><img src="../assets/Logo.svg" alt="logo" class="logo"
        /></router-link>
      </div>
      <ul class="link-list">
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/portofolio">PORTOFOLIO</router-link></li>
        <li><a href="#">BLOG</a></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  display: block;
  text-decoration: none;
  color: black;
}

.navbar {
  display: flex;
  align-content: center;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: none;
  width: 100vw;
}

.navbar ul li a:hover {
}

.link-list {
  display: flex;
  width: 90vw;
  list-style: none;
  justify-content: flex-end;
  /* margin-top: 25px; */
  align-items: center;
}

.link-list li {
  /* margin-left: 25px; */
  padding-left: 15px;
}
</style>
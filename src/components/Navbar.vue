<template>
  <div>
    <nav class="navbar">
      <div>
        <router-link to="/"
          ><img src="../assets/Logo.svg" alt="logo" class="logo"
        /></router-link>
      </div>

      <div class="menu-container"></div>

      <div class="link-list">
        <label for="toggle" class="burger-menu">&#9776;</label>
        <input type="checkbox" name="toggle" id="toggle" />
        <div class="links">
          <a><router-link to="/about">ABOUT</router-link></a>
          <a><router-link to="/portofolio">PORTOFOLIO</router-link></a>
          <a>
            <a href="https://medium.com/@tanasievladcristian" rel="noopener noreferrer" target="_blank">BLOG</a
            >
          </a>
          <a><router-link to="/contact">CONTACT</router-link></a>
        </div>
      </div>
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
  transition: display 0.2s ease-in;
}

.navbar {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  align-content: center;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: none;
  width: 100vw;
}

.links {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  flex-direction: row;
}

.link-list {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  width: 90vw;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
}

.link-list a {
  padding-left: 15px;
}

.burger-menu {
  display: none;
  font-size: 35px;
  font-weight: bolder;
  cursor: pointer;
  z-index: 3;
}

#toggle {
  display: none;
}

@media screen and (max-width: 650px) {
  .logo {
    width: 45px;
    height: 45px;
  }

  .burger-menu {
    display: block;
    position: absolute;
    top: 0;
    padding-right: 5px;
  }

  .links {
    display: none;
    text-align: center;
    align-self: center;
  }

  .links a {
    padding: 5px 0 5px 0;
  }

  .link-list {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 0;
  }

  #toggle:checked + .links {
    display: block;
    position: relative;
    right: 20px;
    z-index: 2;
  }
}

@media screen and (max-width: 1250px) {
  .links {
    padding-right: 15px;
  }
}

@media screen and (max-width: 1100px) {
  .navbar {
    background-color: rgba(34, 96, 255, 0.55);
  }
}
</style>
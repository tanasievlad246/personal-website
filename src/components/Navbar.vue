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
        <!-- <img src="../assets/icons/menu.svg" alt="" class="burger-menu" /> -->
        <label for="toggle" class="burger-menu">&#9776;</label>
        <input type="checkbox" name="toggle" id="toggle" />
        <div class="links">
          <a><router-link to="/about">ABOUT</router-link></a>
          <a><router-link to="/portofolio">PORTOFOLIO</router-link></a>
          <a>
            <a href="https://medium.com/@tanasievladcristian" target="_blank"
              >BLOG</a
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
}

.navbar {
  display: flex;
  align-content: center;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: none;
  width: 100vw;
}

.links {
  display: flex;
  flex-direction: row;
}

.link-list {
  display: flex;
  width: 90vw;
  list-style: none;
  justify-content: flex-end;
  /* margin-top: 25px; */
  align-items: center;
}

.link-list a {
  /* margin-left: 25px; */
  padding-left: 15px;
}

.burger-menu {
  display: none;
  font-size: 35px;
  font-weight: bolder;
  cursor: pointer;
  z-index: 3;
}

/* .menu-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
} */

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
</style>
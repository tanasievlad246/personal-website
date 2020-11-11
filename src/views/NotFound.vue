<template>
  <div>
    <h2>Ooops! Page not found</h2>
    <p>
      Cant find this resource, please try going
      <router-link :to="{ name: 'Home' }">home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
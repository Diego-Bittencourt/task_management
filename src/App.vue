<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>

export default {
  
 
}
</script>

<style>
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
  /* max-width: 1200px; */
  /* width: 80%; */
  min-width: 300px;
  margin: 0 auto;
}

* {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    box-sizing: border-box;
}

a,
a:visited {
    color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul,
li {
   text-indent: 0;
   list-style-type: 0;
}

/* router animation */

.route-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

<template>
    <router-link v-if="link" :to="to">
        <slot></slot>
    </router-link>
    <button v-else>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        link: {
        type: Boolean,
        required: false,
        default: false,
        },
        to: {
        type: String,
        required: false,
        default: "/",
        },
}
}
</script>

<style scoped>

a,
button {
  text-decoration: none;
  font-size: 1.6rem;
  cursor: pointer;
  text-align: center;
  color: #272525;
  background-color: #dddddd;
  border-radius: 5px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  transition: all 0.1s linear; 
  min-width: 100px;
}

button:active,
a:active {
  transform: scale(0.8);
}

button:hover,
a:hover {
  color: #111111;
  transition: 0.5s;
  border-color: #06013f;
  background-color: #999;
}

@media screen and (max-width: 500px) {
  button,
  a {
    font-size: 1.2rem;
    padding: 0.2rem;
    min-width: 50px;
  }
}
</style>
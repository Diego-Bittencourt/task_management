<template>
  <section>
    <base-card>
      <div class="btnwrapper">
        <base-button to="/students/list" link>Students List</base-button>
        <base-button to="/students/addstudent" link>Add Students</base-button>
      </div>
    </base-card>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<style scoped>
.btnwrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}


</style>

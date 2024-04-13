<script setup lang="ts">
// @ts-ignore
import HomePageVue from "./components/Home/HomePage.vue";
</script>

<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import "./styles/sass/index.scss";
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
</style>

<template>
    <div>
      <HeaderVue />
      <MainPageVue />
      <FeaturedProductsVue />
      <LeatestPageVue />
      <FooterVue/>
    </div>
  </template>
  
  <script setup lang="ts">
  // @ts-ignore
  import FooterVue from "../Footer/Footer.vue";
  // @ts-ignore
  import HeaderVue from "../Header/Header.vue";
  // @ts-ignore
  import FeaturedProductsVue from "./FeaturedProducts.vue";
  // @ts-ignore
  import LeatestPageVue from "./LeatestPage.vue";
  // @ts-ignore
  import MainPageVue from "./MainPage.vue";
  
  </script>
  
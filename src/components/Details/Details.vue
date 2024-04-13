<template>
    <div class="details">
      <div class="details-product" v-if="itemNames">
        <img
          class="details-product__img"
          :width="528"
          :height="439"
          :src="itemNames.imageSet[0]"
          :alt="itemNames.name"
        />
        <div class="details-product__text-box">
          <h2 class="details-product__text-box__title">{{ itemNames.name }}</h2>
          <v-rating
            active-color="orange-lighten-1"
            color="orange-lighten-1"
            density="compact"
          />
          <div class="details-product__text-box__price-box">
            <div class="details-product__text-box__price-box__price">
              {{ itemNames.price }}
            </div>
            <div class="details-product__text-box__price-box__wasPrice">
              <del>{{ itemNames.wasPrice }}</del>
            </div>
          </div>
          <p class="details-product__text-box__p">{{ itemNames.description }}</p>
          <button
            @click="cart.addToCart(itemNames)"
            class="reusable-button details-product__text-box__button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useAllProductsStore } from "../../stores/AllProducts";
  import { useCartStore } from "../../stores/CartStore";
  
  const items: any = useAllProductsStore();
  const cart = useCartStore()
  
  console.log(items.products);
  
  const router = useRouter();
  
  const { name } = router.currentRoute.value.params;
  const itemNames = items?.products?.find((product) => product.name === name);
  // const isFirstImage = (index: number) => {
  //   return index === 0;
  // };
  
  onMounted(() => {
    items.fetchAllProdcuts();
  });
  </script>
  
  <style lang="scss">
  // .first-image {
  //   width: 538px;
  //   position: relative;
  // }
  
  // .other-image {
  //   width: 192px;
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  // }
  
  // @import "../../styles/sass/DetailsPage.scss";
  </style>
  
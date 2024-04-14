<template>
  <div class="details">
    <div class="details-product" v-if="itemNames">
      <div class="details-product__img-box">
        <img
          :src="itemNames.imageSet[0]"
          :alt="itemNames.name"
          class="details-product__img-box__img"
          width="528"
          height="450"
        />
      <div class="details-product__img-box__img-extra">
        <img
          v-for="(image, index) in itemNames.imageSet.slice(1)"
          :key="index"
          :src="image"
          :alt="itemNames.name"
          class="details-product__img-box__img-extra__img"
        />
      </div>
      </div>
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
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useAllProductsStore } from "../../stores/AllProducts";
import { useCartStore } from "../../stores/CartStore";

const items: any = useAllProductsStore();
const cart = useCartStore();
const router = useRouter();
const { name } = router.currentRoute.value.params;
const itemNames = items?.products?.find((product) => product.name === name);

onBeforeMount(() => {
  items.fetchAllProdcuts();
});
</script>

<style lang="scss">
@import "../../styles/sass/DetailsPage.scss";

</style>

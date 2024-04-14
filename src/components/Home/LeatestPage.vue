<template>
  <div>
    <h2 class="title">Leatest Products</h2>
    <div class="type">
      <button class="type-buttons" @click="displayProducts('newArrival')">
        New Arrival
      </button>
      <button class="type-buttons" @click="displayProducts('bestSeller')">
        Best Seller
      </button>
      <button class="type-buttons" @click="displayProducts('featured')">
        Featured
      </button>
      <button class="type-buttons" @click="displayProducts('specialOffer')">
        Special Offer
      </button>
    </div>

    <div class="leatest-cards">
      <div v-for="(product, index) in displayedProducts" :key="index" class="leatest-box">
        <div class="leatest-cards-box">
          <img
            class="leatest-cards-box__img"
            :width="350"
            :height="272"
            :src="product.imageSet[0]"
            :alt="product.name"
          />
          <img
            :width="46"
            :height="46"
            src="@/img/cart.svg"
            alt="Cart"
            class="leatest-cards-box__cart"
            @click="cart.addToCart(product)"
          />
        </div>
        <div class="leatest-cards-box__text-box">
          <div class="leatest-cards-box__text-box__title">
            {{ product.name }}
          </div>
          <div class="leatest-cards-box__text-box__price-box">
            <div class="leatest-cards-box__text-box__price-box__sale">
              {{ product.price }}
            </div>
            <div class="leatest-cards-box__text-box__price-box__price">
              {{ product.wasPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchProducts } from "../../services/fetchProducts";
import { ref, onMounted } from "vue";
// @ts-ignore
import { Product } from "../../types/interfaces";
import { useCartStore } from "../../stores/CartStore";

const new_products = ref<Product[]>([]);
const best_seller_products = ref<Product[]>([]);
const featured_products = ref<Product[]>([]);
const special_offer_products = ref([]);
const displayedProducts = ref<Product[]>([]);

const cart = useCartStore();

async function newArrival() {
  const params = {
    _sort: "createdAt",
    _limit: 6,
  };
  new_products.value = await fetchProducts(params);
}
async function bestSeller() {
  const params = {
    _sort: "soldTimes",
  };
  best_seller_products.value = await fetchProducts(params);
}
async function featured() {
  const params = {
    _sort: "isFeatured",
    _limit: 6,
  };
  featured_products.value = await fetchProducts(params);
}
async function specialOffer() {
  const params = {
    _sort: "specialOffer",
    _page: 1,
    _limit: 6,
  };
  special_offer_products.value = await fetchProducts(params);
}

function displayProducts(type: string) {
  switch (type) {
    case "newArrival":
      displayedProducts.value = new_products.value;
      break;
    case "bestSeller":
      displayedProducts.value = best_seller_products.value
        .reverse()
        .splice(0, 6);
      break;
    case "featured":
      displayedProducts.value = featured_products.value;
      break;
    case "specialOffer":
      displayedProducts.value = special_offer_products.value;
      break;
    default:
      break;
  }
}
onMounted(async () => {
  await Promise.all([newArrival(), bestSeller(), featured(), specialOffer()]);
  displayProducts("newArrival");
});
</script>

<style lang="scss">
@import "../../styles/sass/LeatestPage.scss";
</style>

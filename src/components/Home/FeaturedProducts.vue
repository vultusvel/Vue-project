<template>
  <div v-if="isLoading">
    <h2 class="title">Featured products</h2>
    <div class="cards">
      <div v-if="items.products?.data" class="box">
        <div
          v-for="(product, index) in items.products.data"
          :key="index"
          class="cards-card"
        >
          <div class="cards-card__box">
            <img
              class="cards-card__box__img"
              :width="270"
              :height="360"
              :src="product.imageSet[0]"
              :alt="product.name"
            />
            <img
              :width="46"
              :height="46"
              src="@/img/cart.svg"
              alt="Cart"
              class="cards-card__box__cart"
              @click="cart.addToCart(product)"
            />
            <button
              class="cards-card__box__button"
              @click="navigateToDetails(product.name)"
            >
              View Details
            </button>
          </div>
          <div class="cards-card__price">
            <h3 class="cards-card__price__title">{{ product.name }}</h3>
            <p class="cards-card__price__code">Code - {{ product.code }}</p>
            <div class="cards-card__price__price">{{ product.price }}$</div>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-box">
      <div
        v-for="pageNumber in [1, 2, 3, 4]"
        :key="pageNumber"
        :class="['slider-box__slider', { active: activePage === pageNumber }]"
        @click="setActivePage(pageNumber)"
        :data-type="pageNumber"
      ></div>
    </div>
  </div>
  <div v-else>
    <v-alert title="Error occurred!" type="error"></v-alert>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from "vue";
import { useCartStore } from "../../stores/CartStore";
import { useProductsStore } from "../../stores/ProductsStore";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);
const activePage = ref(1);
const cart = useCartStore();
const items = useProductsStore();

const navigateToDetails = (productName: string) => {
  router.push({ name: "Details", params: { name: productName } });
};

function setActivePage(pageNumber: number) {
  activePage.value = pageNumber;
  localStorage.setItem("activePage", pageNumber.toString());

  fetchProductsForPage(pageNumber);
}
async function fetchProductsForPage(pageNumber: number): Promise<void> {
  const params = {
    _sort: "isFeatured",
    _page: pageNumber,
    _per_page: 4,
  };
  items.fetchProdcuts(params);
  isLoading.value = true;
}
console.log(items.products);
onMounted(() => {
  const savedPage = localStorage.getItem("activePage");
  if (savedPage) {
    activePage.value = parseInt(savedPage);
    fetchProductsForPage(activePage.value);
  }
  fetchProductsForPage(activePage.value);
});

</script>

<style lang="scss">
@import "../../../src/styles/sass/FeaturedPage.scss";
</style>

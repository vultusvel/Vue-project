<template>
  <div class="row-filters__cards">
    <div v-if="arr && arr.length > 0 && !props.queryString">
      <div
        v-for="(product, index) in arr"
        :key="index"
        class="row-filters__cards-box-card"
      >
        <img
          class="row-filters__cards-box-card__img"
          :width="270"
          :height="200"
          :src="product.imageSet[0]"
          :alt="product.name"
        />
        <img
          :width="46"
          :height="46"
          src="@/img/cart.svg"
          alt="Cart"
          class="row-filters__cards-box-card__cart"
          @click="cart.addToCart(product)"
        />
        <div class="row-filters__cards-box-card__text">
          <h3 class="row-filters__cards-box-card__text-title">
            {{ product.name }}
          </h3>
          <div class="row-filters__cards-box-card__text-price">
            <p class="row-filters__cards-box-card__text-price__price">
              ${{ product.price }}
            </p>
            <p class="row-filters__cards-box-card__text-price__wasPrice">
              <del>${{ product.wasPrice }}</del>
            </p>
          </div>
          <p class="row-filters__cards-box-card__text-paragraph">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else-if="!check">
      <p class="row-filters__cards__not-found">Not found</p>
    </div>
    <div v-else>
      <div
        class="row-filters__cards-box-card"
        v-for="(product, index) in toRender"
        :key="index"
      >
        <img
          class="row-filters__cards-box-card__img"
          :width="270"
          :height="200"
          :src="product.imageSet[0]"
          :alt="product.name"
        />
        <img
          :width="46"
          :height="46"
          src="@/img/cart.svg"
          alt="Cart"
          class="row-filters__cards-box-card__cart"
          @click="cart.addToCart(product)"
        />
        <div class="row-filters__cards-box-card__text">
          <h3 class="row-filters__cards-box-card__text-title">
            {{ product.name }}
          </h3>
          <div class="row-filters__cards-box-card__text-price">
            <p class="row-filters__cards-box-card__text-price__price">
              ${{ product.price }}
            </p>
            <p class="row-filters__cards-box-card__text-price__wasPrice">
              <del>${{ product.wasPrice }}</del>
            </p>
          </div>
          <p class="row-filters__cards-box-card__text-paragraph">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="check">
      <div class="pages">
        <div
          class="pages-list"
          v-for="(product, index) in toRenderPages"
          :key="index"
          @click="setActivePage(product)"
          :data-type="product"
          :class="{ 'active-page': product === activePage }"
        >
          {{ product }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { fetchProducts } from "../../services/fetchProducts";
import { useProductsStore } from "../../stores/ProductsStore";
// @ts-ignore
import { ProductData } from "../../types/interfaces";

import { useRouter } from "vue-router";
import { useAllProductsStore } from "../../stores/AllProducts";
import { useCartStore } from "../../stores/CartStore";

const props = defineProps({
  queryString: String,
});
const items = useProductsStore();
const cart = useCartStore();
const checkedProducts = ref<ProductData | null>(null);
const activePage = ref(1);
const curretPage = ref(1);
const check = ref(true);
const router = useRouter();
const allProducts: any = useAllProductsStore();
const search = ref(false);
const arr = ref<any>([]);

const { name } = router.currentRoute.value.params;

const itemName = Array.isArray(name)
  ? name.map((item) => item.toLowerCase()).join("")
  : name.toLowerCase();

allProducts?.productsAll?.filter((product) => {
  if (product.name.toLowerCase().includes(itemName)) {
    search.value = true;
    arr.value.push(product);
  }
});

function setActivePage(pageNumber: number) {
  if (toRenderPages.value === items.products?.pages) {
    setActivePageProducts(pageNumber);
  } else {
    setActivePageChecked(pageNumber);
  }
}

function setActivePageProducts(pageNumber: number) {
  activePage.value = pageNumber;
  fetchProductsForPage(pageNumber);
}

function setActivePageChecked(pageNumber: number) {
  curretPage.value = pageNumber;
  filteredProducts(pageNumber);
}

async function fetchProductsForPage(pageNumber: number): Promise<void> {
  const params = {
    _page: pageNumber,
    _per_page: 9,
  };
  items.fetchProdcuts(params);
}

async function filteredProducts(pageNumber: number) {
  const query = {};
  const params: string[] | undefined = props.queryString?.split("&");
  if (params) {
    for (const param of params) {
      const [key, value] = param.split("=");
      query[key] = value;
    }
  }
  query["_page"] = pageNumber;
  query["_per_page"] = 9;

  checkedProducts.value = await fetchProducts(query);

  if (props.queryString && !checkedProducts.value?.data?.length) {
    check.value = false;
  } else {
    check.value = true;
  }
}

watch(props, () => {
  filteredProducts(curretPage.value);

  console.log(arr.value);
});

onMounted(async () => {
  fetchProductsForPage(activePage.value);
});

onBeforeMount(() => {
  allProducts.fetchAllProdcuts();
});

const toRenderPages = computed(() => {
  return checkedProducts.value?.data && checkedProducts.value.data.length > 0
    ? checkedProducts.value.pages
    : items.products?.pages;
});
const toRender = computed(() => {
  return checkedProducts.value?.data && checkedProducts.value.data.length > 0
    ? checkedProducts.value.data
    : items.products?.data;
});
</script>

<style lang="scss"></style>

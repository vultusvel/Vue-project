<template>
    <div>
      <h1 class="title">Products</h1>
      <div class="pagination"></div>
      <div class="row-filters">
        <div class="row-filters__filters">
          <div class="row-filters__filters-box">
            <h3 class="row-filters__filters-box-name">Product brand</h3>
            <div
              v-if="
                sidebarProducts &&
                sidebarProducts.brand &&
                sidebarProducts.brand.values
              "
            >
              <div
                v-for="(item, index) in sidebarProducts.brand.values"
                :key="index"
                class="row-filters__filters-box-filter-box"
              >
                <input
                  type="checkbox"
                  class="row-filters__filters-box-filter-box__checkbox"
                  :value="item"
                  v-model="brandChecked"
                  @change="param"
                />
                <label
                  :for="item"
                  class="row-filters__filters-box-filter-box__label"
                >
                  {{ item }}
                </label>
              </div>
            </div>
          </div>
          <div class="row-filters__filters-box">
            <h3 class="row-filters__filters-box-name">Discount Offer</h3>
            <div
              v-if="
                sidebarProducts &&
                sidebarProducts.discountPercentage &&
                sidebarProducts.discountPercentage.values
              "
            >
              <div
                v-for="(item, index) in sidebarProducts.discountPercentage.values"
                :key="index"
                class="row-filters__filters-box-filter-box"
              >
                <input
                  type="checkbox"
                  class="row-filters__filters-box-filter-box__checkbox"
                  :value="item"
                  v-model="discountChecked"
                  @change="param"
                  v-if="index !== 0"
                />
                <label
                  v-if="index !== 0"
                  :for="item"
                  class="row-filters__filters-box-filter-box__label"
                >
                  {{ item }} %
                </label>
              </div>
            </div>
          </div>
          <div class="row-filters__filters-box">
            <h3 class="row-filters__filters-box-name">Rating</h3>
            <div
              v-if="
                sidebarProducts &&
                sidebarProducts.rating &&
                sidebarProducts.rating.values
              "
            >
              <div
                v-for="(item, index) in ratingScale"
                :key="index"
                class="row-filters__filters-box-filter-box"
              >
                <input
                  type="checkbox"
                  class="row-filters__filters-box-filter-box__checkbox"
                  :value="item"
                  v-model="ratingChecked"
                  @change="param"
                />
  
                <v-rating
                  class="row-filters__filters-box-filter-box__label-rating"
                  v-model="ratingScale[index]"
                  active-color="orange-lighten-1"
                  color="orange-lighten-1"
                  density="compact"
                ></v-rating>
              </div>
            </div>
          </div>
          <div class="row-filters__filters-box">
            <h3 class="row-filters__filters-box-name">Categories</h3>
            <div
              v-if="
                sidebarProducts &&
                sidebarProducts.category &&
                sidebarProducts.category.values
              "
            >
              <div
                v-for="(item, index) in sidebarProducts.category.values"
                :key="index"
                class="row-filters__filters-box-filter-box"
              >
                <input
                  type="checkbox"
                  class="row-filters__filters-box-filter-box__checkbox"
                  :value="item"
                  v-model="categoryChecked"
                  @change="param"
                />
                <label
                  :for="item"
                  class="row-filters__filters-box-filter-box__label"
                >
                  {{ item }}
                </label>
              </div>
            </div>
          </div>
          <div class="row-filters__filters-box">
            <h3 class="row-filters__filters-box-name">Price</h3>
            <div
              v-if="
                sidebarProducts &&
                sidebarProducts.price &&
                sidebarProducts.price.values
              "
            >
              <div
                v-for="(item, index) in sidebarProducts.price.values"
                :key="index"
                class="row-filters__filters-box-filter-box"
              >
                <input
                  type="checkbox"
                  class="row-filters__filters-box-filter-box__checkbox"
                  :value="item"
                />
                <label
                  :for="item"
                  class="row-filters__filters-box-filter-box__label"
                >
                  {{ item }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <FilteredProductsVue :queryString="queryString" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted, ref } from "vue";
  import { fetchSidebarProducts } from "../../services/fetchProducts";
  
  import { useRouter } from "vue-router";
  // @ts-ignore
  import FilteredProductsVue from "./FilteredProducts.vue";
    // @ts-ignore
  import { SideBarProducts } from "../../types/interfaces";
  
  const sidebarProducts = ref<SideBarProducts | null>(null);
  const brandChecked = ref([]);
  const categoryChecked = ref([]);
  const ratingChecked = ref([]);
  const discountChecked = ref([]);
  
  let queryString = ref("");
  
  const router = useRouter();
  
  async function param() {
    let brandStr = brandChecked.value;
    let categoryStr = categoryChecked.value;
    let discountStr = discountChecked.value;
  
    const obj = {
      brand: brandStr,
      category: categoryStr,
      discountPercentage: discountStr,
    };
    const urlParams = new URLSearchParams();
  
    for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      obj[key].forEach((value) => {
        urlParams.append(key, value);
      });
    }
  }
  
    const paramString = urlParams.toString();
    queryString.value = `${paramString}`;
    console.log(queryString.value);
    await router.push(`/products?${queryString.value}`);
  }
  
  onMounted(async () => {
    sidebarProducts.value = await fetchSidebarProducts();
  });
   const ratingScale = computed(() => {
    if (sidebarProducts.value && sidebarProducts.value.rating) {
      return sidebarProducts.value.rating.values.map((element) => element);
    } else {
      return [];
    }
  });
  </script>
  
  <style lang="scss">
  @import "../../styles/sass/RowFilterPage.scss";
  </style>
  
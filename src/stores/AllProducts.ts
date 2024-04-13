import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchAllProducts } from "../services/fetchProducts";

import { Product } from "../types/interfaces";

export const useAllProductsStore = defineStore("AllProductsStore", {
  state: () => {
    return {
      products: ref<Product | null>(null),
    };
  },
  actions: {
    async fetchAllProdcuts() {
      try {
        const response = await fetchAllProducts();
        this.products = response;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});

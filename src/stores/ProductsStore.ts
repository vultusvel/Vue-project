import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchProducts } from "../services/fetchProducts";
import { useLocalStorage } from "@vueuse/core";

import { ProductData } from "../types/interfaces";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {
      products: useLocalStorage<ProductData | null>("products", null),
    };
  },
  actions: {
    async fetchProdcuts(params: Record<string, any>) {
      try {
        const response = await fetchProducts(params);
        this.products = response;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});

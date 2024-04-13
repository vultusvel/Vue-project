import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchProducts } from "../services/fetchProducts";

import { ProductData } from "../types/interfaces";

export const useProductsStore = defineStore("ProductsStore", {
  state: () => {
    return {
      products: ref<ProductData | null>(null),
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

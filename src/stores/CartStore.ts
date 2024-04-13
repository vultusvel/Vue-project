import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { Product } from "../types/interfaces";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      cart: useLocalStorage<Product[]>("cart", []),
    };
  },
  getters: {
    cartTotalItems() {
      return this.cart.reduce((total: number, item: Product) => total + item.quantity, 0);
    },
  },

  actions: {
    addToCart(product: Product) {
      const foundIndex = this.cart.findIndex((item: Product) => item.id === product.id);
      if (foundIndex !== -1) {
        this.cart[foundIndex].quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    decrementQuantity(index: number) {
      if (this.cart[index].quantity > 0) {
        this.cart[index].quantity--;
      }
    },
    removeFromCart(product: Product) {
      const foundIndex = this.cart.findIndex((item: Product) => item.id === product.id);
      if (foundIndex !== -1) {
        this.cart.splice(foundIndex, 1);
      }
    },
  },
});

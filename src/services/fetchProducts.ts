import { genericProducts } from "../heplers/productsURL";

export const fetchProducts = async (products) => {
  const response = await fetch(genericProducts(products));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchAllProducts = async () => {
  const response = await fetch(`http://localhost:3000/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchSidebarProducts = async () => {
  const response = await fetch(`http://localhost:3000/filters`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

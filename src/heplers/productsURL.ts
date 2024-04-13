export const genericProducts = (products) => {
    const URL = "http://localhost:3000/products";
    if (!products || !Object.keys(products).length) {
      return URL;
    }
  
    const queryString = Object.keys(products)
      .map((key) => {
        const values = Array.isArray(products[key])
          ? products[key]
          : [products[key]];
        return values.map((value) => `${key}=${value}`).join("&");
      })
      .join("&");
  
    const result = URL + "?" + queryString;
    return result;
  };
  
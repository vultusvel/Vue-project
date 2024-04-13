export interface Product {
  id: string;
  name: string;
  price: number;
  wasPrice: number;
  imageSet: string[];
  quantity: number;
  code: number;
}

export interface ProductData {
  data: Product[];
  pages: number;
}

export interface Category {
  type: string;
  label: string;
  values: any;
}
export interface SideBarProducts {
  brand: Category;
  category: Category;
  price: Category;
  discountPercentage: Category;
  rating: Category;
  colors: Category;
}

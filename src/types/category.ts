export interface ICategory {
  _id: string;
  key: string;
  name: string,
  products: products[],
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null,
}

export interface products {
  _id: string;
  key: string;
  name: string;
  price: number;
  salePrice: number;
  images: string[];
  description: string;
  sizes: sizes[];
  quantity: number;
  views: number;
  tags: Tag[];
  CategoryId: Category[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null,
}

interface sizes {
  size: number;
  quantity: number;
}
interface Tag {
  _id: string;
  name: string;
  products: string[];
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  content: string;
  author: string;
  products: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null,
}

interface Category {
  _id: string;
  name: string;
  products: string[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null,
}
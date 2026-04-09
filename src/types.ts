export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: string;
  buyUrl?: string;
}

export interface Symptom {
  id: string;
  name: string;
  oils: {
    name: string;
    usage: string;
  }[];
}

export interface BlogCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  link?: string;
}

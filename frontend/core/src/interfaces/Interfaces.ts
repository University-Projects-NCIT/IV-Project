export interface ProductInterface{
  title: string;
  date: string;
  tagline: string;
  category: string[];
}

export interface CardDataInterface {
  data: ProductInterface[];
}

export interface CardItemDataInterface
{
 itemData: ProductInterface  
}

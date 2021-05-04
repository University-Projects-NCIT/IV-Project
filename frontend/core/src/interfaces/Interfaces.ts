export interface ProductInterface{
  author: string;
  categories: [] | string[];
  created_at: string;
  description: string;
  launch_at: string;
  productID: string;
  tagline: string;
  title: string;
  upvote: BigInt ;
  product_icon: [] | ProductIconInteface[];
  product_images: [] | ProductImagesInteface[];
  product_comment: [] | ProductCommentInteface[];
}

export interface ProductIconInteface{
  id: BigInt;
  product: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface ProductImagesInteface{
  id: BigInt;
  product: string;
  image: string;
  created_at: string;
}

export interface ProductCommentInteface{
  id: BigInt;
  product: string;
  comment: string;
  created_at: string;
}

export interface CardDataInterface {
  data: ProductInterface[];
}

export interface CardItemDataInterface
{
 itemData: ProductInterface  
}

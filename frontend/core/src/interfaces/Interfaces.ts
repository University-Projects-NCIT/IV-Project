export interface ProductInterface {
	author: number;
	categories: [] | string[];
	created_at: string;
	description: string;
	launch_at: string;
	productID: string;
	tagline: string;
	title: string;
	upvote?: BigInt;
	product_icon: [] | ProductIconInterface[];
	product_images: [] | ProductImagesInterface[];
	product_comment: [] | ProductCommentInteface[];
}

export interface ProductImagesProps {
	product_images: ProductImagesInterface[];
}
export interface UserInterface {
	email: string;
	first_name: string;
	last_name: string;
	id: number;
	ProfileImage: ProfileInterface[];
}

export interface ProfileInterface {
	userId: number;
	created_at: string;
	imageUrl: string;
}

export interface ProductIconInterface {
	id: BigInt;
	product: string;
	image: string;
	created_at: string;
	updated_at: string;
}

export interface ProductImagesInterface {
	id: number;
	product: string;
	image: string;
	created_at: string;
}

export interface ProductCommentInteface {
	id: BigInt;
	product: string;
	comment: string;
	created_at: string;
}

export interface CardDataInterface {
	data: ProductInterface[];
}

export interface CardItemDataInterface {
	itemData: ProductInterface;
}

export interface CardUpcommingInterface {
	data: ProductInterface[];
}

export interface CardUpcommingListInterface {
	itemData: ProductInterface;
}

export interface SlipInterface {
	id: Number;
	advice: String;
}

export interface AdviceApiInterface {
	data: SlipInterface;
}

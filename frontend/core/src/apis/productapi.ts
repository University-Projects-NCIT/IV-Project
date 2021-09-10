import { BACKEND_URL, LIMIT } from "../constraints";

const API_URL = BACKEND_URL;

// fetch selected product details
export const fetchProductByID = async ({ queryKey }) => {
	const id = queryKey[1];

	let url = `${API_URL}/products/${id}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fetchUserByID = async ({ queryKey }) => {
	const id = queryKey[1];
	console.log("parameter passed from usequery", queryKey);

	let url = `${API_URL}/users/${id}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fetchCommentByProductId = async ({ queryKey }) => {
	const productId = queryKey[1];
	let url = `${API_URL}/comments/?productID=${productId}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fecthProducts = async ({ queryKey, pageParam = 0 }) => {
	const order = queryKey[1];
	let url = `${API_URL}/products/?m_order=${order}&limit=${LIMIT}`;

	if (pageParam) {
		url = url + `&offset=${pageParam}`;
	}

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fetchSearchProducts = async ({ queryKey }) => {
	const searchKey = queryKey[2];
	const order = queryKey[1];
	let url = `${API_URL}/products/?search=${searchKey}&m_order=${order}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fetchProductsByAuthor = async ({ queryKey }) => {
	const authorId = queryKey[1];
	let url = `${API_URL}/products/?author=${authorId}`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const fecthUpcommingProducts = async () => {
	let url = `${API_URL}/upcomming_products/`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const updateUpvote = async (props) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/products/${props.productId}/`;
	// let url2 = `${API_URL}/product_upvote`

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "PATCH",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(props.field),
	});
};

export const addProductUpvote = async (field) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/product_upvote/`;

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};
export const deleteProductUpvote = async (id) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/product_upvote/${id}/`;

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "DELETE",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
	});
};

export const getProductUpvote = async ({ queryKey }) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	const userId = queryKey[1];
	const productId = queryKey[2];
	// const productId = "jhgjldshgjkjksghjhgsd"
	// const userId = "7ea95486-72a2-4122-9252-3ead867ee5bd"
	let url = `${API_URL}/product_upvote/?userid=${userId}&productid=${productId}`;
	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};
export const getProfileImage = async ({ queryKey }) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return console.log("Unauthorized request ");
	}

	const userId = queryKey[1];

	if (userId == null || typeof userId == "undefined") {
		return;
	}

	let url = `${API_URL}/profile_images/?userid=${userId}`;
	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

export const addProduct = async (field) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	console.log(field);
	let url = `${API_URL}/products/`;

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};

export const addIcon = async (field) => {
	const access =
		typeof window != "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/product_icon/`;

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};

export const addProductImages = async (field) => {
	const access =
		typeof window != "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/product_images/`;

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};

export const addProfileImage = async (field) => {
	const access =
		typeof window != "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return console.log("Unauthorized request ");
	}

	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	let url = `${API_URL}/profile_images/`;

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};

export const addCategories = async (field) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/categories/`;
	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};

export const addComment = async (field) => {
	const access =
		typeof window !== "undefined" ? localStorage.getItem("access") : "";
	if (access == "") {
		return alert("Unauthorized request ");
	}

	let url = `${API_URL}/comments/`;
	const AUTH_HEADER = {
		Authorization: `JWT ${access}`,
	};

	return await fetch(url, {
		method: "POST",
		headers: {
			...AUTH_HEADER,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(field),
	});
};


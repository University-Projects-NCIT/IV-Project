import axios from "axios";

const API_URL = "http://localhost:9000";

// const access =
// 	typeof window !== "undefined" ? localStorage.getItem("access") : "";

const config = {
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

export const getProduct = async () => {
	try {
		const res = await axios.get(`${API_URL}/products/`, config);
		console.log(res, "get products");
		return res;
	} catch (e) {
		console.log(e);
	}
};

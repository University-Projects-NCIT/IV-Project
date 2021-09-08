
import { HACKERNEWSSTORYAPI } from '../constraints'


// fetch one story by its id from hacker news api
export const fetchStoryById = async ({ queryKey }) => {
	const id = queryKey[1];

	let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

// fetch Top Stoires id from hacker news api 
export const fetchTopStories = async () => {

	let url = HACKERNEWSSTORYAPI;

	return await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => res.json());
};

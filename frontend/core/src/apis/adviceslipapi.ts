

// fetch Top Stoires id from hacker news api
export const fetchQuote = async () => {
	let url = "https://api.adviceslip.com/advice";

  return await fetch(url, {
		headers: {},
	}).then((res) => res.json())
  .catch((error)=> console.log(error, "cathing error "));
};

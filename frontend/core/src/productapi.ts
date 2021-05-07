import axios from 'axios'
import Post from '../pages/post';

const API_URL = "https://startup-hunt.herokuapp.com"

const access = (typeof window !== "undefined") ? localStorage.getItem('access') : '';


export const fecthProducts = async ({ queryKey, pageParam = 0 }) => {
  const order = queryKey[1]
  let url = `${API_URL}/products/?m_order=${order}&limit=2`;

  if (pageParam)
  {
    url = url + `&offset=${pageParam}`
  }

  return await fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }).then(res => res.json())
}

export const fetchSearchProducts = async ({queryKey , pageParam = 0}) => {
  const searchKey = queryKey[2]
  const order = queryKey[1]
  let url = `${API_URL}/products/?search=${searchKey}&m_order=${order}&limit=2`;

  if (pageParam)
  {
    url = url + `&offset=${pageParam}`
  }

  return await fetch(url, {
    headers: {
       'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => res.json())
}

export const fecthUpcommingProducts = async ({queryKey }) => {

  const order = queryKey[1]
  let url = `${API_URL}/products/?m_order=${order}`;


  return await fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  }).then(res => res.json())
}

export const updateUpvote = async (props) => {

  let url = `${API_URL}/products/${props.productId}/`
  // let url2 = `${API_URL}/product_upvote`

  const AUTH_HEADER = {
   'Authorization': `JWT ${access}`,
  }

  return await fetch(url, {
    method: "PATCH",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(props.field)
  });
}

export const addProductUpvote = async (field) => {
  let url = `${API_URL}/product_upvote/`

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(field)
  })
}
export const deleteProductUpvote = async (id) => {
  let url = `${API_URL}/product_upvote/${id}/`

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "DELETE",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
  })
}

export const getProductUpvote = async ({queryKey}) => {
  const userId = queryKey[1]
  const productId = queryKey[2]
  // const productId = "jhgjldshgjkjksghjhgsd"
  // const userId = "7ea95486-72a2-4122-9252-3ead867ee5bd"
  let url = `${API_URL}/product_upvote/?userid=${userId}&productid=${productId}`
  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then( res => res.json())
}

export const addProduct = async (field) => {
  console.log(field)
  let url = `${API_URL}/products/`

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(field)
  })
}

export const addIcon = async (field) => {
  let url = `${API_URL}/product_icon/`

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(field)
  })
}

export const addProductImages = async (field) => {
  console.log("imaages")
  console.log(field)
  let url = `${API_URL}/product_images/`

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(field)
  })
}

export const addCategories = async (field) => {
  let url = `${API_URL}/categories/`

  console.log("categores")
  console.log(field)

  const AUTH_HEADER = {
    'Authorization': `JWT ${access}`
  }

  return await fetch(url, {
    method: "POST",
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(field)
  })
}
import axios from 'axios'

const API_URL = "http://localhost:9000"

const access = (typeof window !== "undefined") ? localStorage.getItem('access') : '';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export const fecthProducts = async ({queryKey , pageParam = 0}) => {

  const order = queryKey[1]
  const AUTH_HEADER = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
  }

  let url = `${API_URL}/products/?m_order=${order}&limit=2`;

  if (pageParam)
  {
    url = url + `&offset=${pageParam}`
  }

  return await fetch(url, {
    headers: {
      ...AUTH_HEADER
    }
  }).then(res => res.json())
}

export const fetchSearchProducts = async ({queryKey , pageParam = 0}) => {
  let searchKey = queryKey[2]
  const order = queryKey[1]
  const AUTH_HEADER = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
  }

  let url = `${API_URL}/products/?search=${searchKey}&m_order=${order}&limit=2`;

  if (pageParam)
  {
    url = url + `&offset=${pageParam}`
  }

  return await fetch(url, {
    headers: {
      ...AUTH_HEADER
    }
  }).then(res => res.json())
}

export const fecthUpcommingProducts = async ({queryKey }) => {

  const order = queryKey[1]
  const AUTH_HEADER = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
  }

  let url = `${API_URL}/products/?m_order=${order}`;


  return await fetch(url, {
    headers: {
      ...AUTH_HEADER
    }
  }).then(res => res.json())
}





import axios from 'axios'

const API_URL = "http://localhost:9000"

const access = (typeof window !== "undefined") ? localStorage.getItem('access') : '';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export const fecthProducts = async (key, order = "created_at") => {
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





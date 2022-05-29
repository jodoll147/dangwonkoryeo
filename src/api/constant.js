export const API_SERVER = 'http://localhost:8000/api';

export async function getShopList() {
  const result = await fetch(`${API_SERVER}/shop/?format=json`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function postShopList() {
  const result = await fetch(`${API_SERVER}/shop`, {
    method: 'POST',
    body: JSON.stringify({
      shop_mosiggang_e: '123',
    }),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function getPost() {
  const result = await fetch(`${API_SERVER}/post/?format=json`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function postPost(title, content) {
  const result = await fetch(`${API_SERVER}/post/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      content: content,
      author: '1',
      category: '1',
    }),
  })
    .then(res => res.json())
    .catch(e => {
      return null;
    });

  return result;
}

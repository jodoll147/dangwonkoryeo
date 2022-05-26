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

export async function postPost() {
  const result = await fetch(`http://localhost:8000/api/shop`, {
    method: 'POST',
    body: JSON.stringify({
      title: '대충 해보기',
      content: '안되면말구요~~~',
    }),
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

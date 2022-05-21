export const API_SERVER = 'http://localhost:8000/api';

export async function getShopList() {
  const result = await fetch(`${API_SERVER}/shop?format=json`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function addShopList() {
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

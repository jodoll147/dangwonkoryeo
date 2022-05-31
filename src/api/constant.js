export const API_SERVER = 'http://localhost:8000/api';

async function callAPI(path, data) {
  const token = localStorage.getItem('token');
  const result = await fetch(path, {
    ...data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `jwt ${token}` : undefined,
    },
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function getShopList() {
  const result = await callAPI(`${API_SERVER}/shop/?format=json`, {
    method: 'GET',
  });

  return result;
}

export async function postShopList() {
  const result = await callAPI(`${API_SERVER}/shop`, {
    method: 'POST',
    body: JSON.stringify({
      shop_mosiggang_e: '123',
    }),
  });

  return result;
}

export async function getPost() {
  const result = await callAPI(`${API_SERVER}/post/?format=json`, {
    method: 'GET',
  });

  return result;
}

export async function postPost(title, content) {
  const result = await callAPI(`${API_SERVER}/post/`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      content: content,
      author: '1',
      category: '1',
    }),
  });

  return result;
}

export async function getTag() {
  const result = await callAPI(`${API_SERVER}/tag/?format=json`, {
    method: 'GET',
  });

  return result;
}

export async function PostRegister(id, name, pwd, email, phone, birth) {
  const result = await callAPI(`${API_SERVER}/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      username: id,
      first_name: name,
      password: pwd,
      email: email,
      phone_num: phone,
      birthday: birth,
      groups: 2,
    }),
  });
  return result;
}

export async function PostLogin(id, pwd) {
  const result = await callAPI(`${API_SERVER}/token/`, {
    method: 'POST',
    body: JSON.stringify({
      username: id,
      password: pwd,
    }),
  });

  if (result?.token) {
    localStorage.setItem('token', result?.token);
  }
}

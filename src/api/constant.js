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

export async function getTag() {
  const result = await fetch(`${API_SERVER}/tag/?format=json`, {
    method: 'GET',
  })
    .then(res => res.json())
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

export async function PostRegister(id, name, pwd, email, phone, birth) {
  const result = await fetch(`${API_SERVER}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: id,
      first_name: name,
      password: pwd,
      email: email,
      phone_num: phone,
      birthday: birth,
      groups: 2,
    }),
  })
    .then(res => res.json())
    .catch(e => {
      return null;
    });

  return result;
}

export async function PostLogin(id, pwd) {
  const result = await fetch(`${API_SERVER}/api/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: id,
      password: pwd,
    }),
  })
    .then(res => res.json())
    .catch(e => {
      return null;
    });

  return result;
}

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

// 태그 전체 보기
export async function getTag() {
  const result = await callAPI(`${API_SERVER}/tag/?format=json`, {
    method: 'GET',
  });

  return result;
}

// 지정된 Shop 태그만 가져오기
export async function getShopTag(shop) {
  const result = await callAPI(`${API_SERVER}/tag/?Shop=${shop}`, {
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
      phone_num: toString(phone),
      birthday: birth,
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

export function getUserInfo() {
  const token = localStorage.getItem('token');
  if (token) {
    const dataPayload = token.split('.')[1];
    if (dataPayload) {
      // return JSON.parse(Buffer.from(dataPayload, 'base64').toString());
      return JSON.parse(atob(dataPayload));
    }
  }
  return null;
}

export async function getShopFavor(shopNum) {
  const result = await callAPI(`${API_SERVER}/favor/?Shop=${shopNum}`, {
    method: 'GET',
  });

  return result;
}

export async function getUserFavor(userNum) {
  const result = await callAPI(`${API_SERVER}/favor/?User=${userNum}`, {
    method: 'GET',
  });

  return result;
}

export async function getAllFavor() {
  const result = await callAPI(`${API_SERVER}/favor/`, {
    method: 'GET',
  });

  return result;
}

export async function getMypageShop(shopNum) {
  const result = await callAPI(`${API_SERVER}/shop/${shopNum}/`, {
    method: 'GET',
  });

  return result;
}

export async function getAllUser() {
  const result = await callAPI(`${API_SERVER}/auth`, {
    method: 'GET',
  });

  return result;
}

// 카페 등록 & 추가 등록
export async function postAddShop(userNum, shopName, shopLicense) {
  const result = await callAPI(`${API_SERVER}/shop/`, {
    method: 'POST',
    body: JSON.stringify({
      user_num: userNum,
      shop_name: shopName,
      shop_license: shopLicense,
    }),
  });

  return result;
}

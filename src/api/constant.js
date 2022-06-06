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
    .then(res => {
      return res.status < 400 ? res.json() : null;
    })
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

// 모든 가게 리스트
export async function getShopList() {
  const result = await callAPI(`${API_SERVER}/shop/?format=json`, {
    method: 'GET',
  });

  return result;
}

// 가게 수정
export async function postShopModify(id, call, exp, add, img) {
  const result = await callAPI(`${API_SERVER}/shop/change	`, {
    method: 'POST',
    body: JSON.stringify({
      id: id,
      head_img: img,
      shop_call: call,
      shop_exp: exp,
      shop_add: add,
      shop_loc: '',
    }),
  });

  return result;
}

// 게시글 전부 가져오기
export async function getPost() {
  const result = await callAPI(`${API_SERVER}/post/?format=json`, {
    method: 'GET',
  });

  return result;
}

// 게시글 저장
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
      phone_num: phone,
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

// 카페를 찜한 유저 목록
export async function getShopFavor(shopNum) {
  const result = await callAPI(`${API_SERVER}/favor/?Shop=${shopNum}`, {
    method: 'GET',
  });

  return result;
}

// 유저가 찜한 카페 목록
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

// 모든 유저 정보
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

// 아이디 찾기
export async function findId(name, phone) {
  const result = await callAPI(`${API_SERVER}/auth/findid`, {
    method: 'POST',
    body: JSON.stringify({
      first_name: name,
      phone_num: phone,
      username: '',
    }),
  });

  return result;
}

// 비밀번호 찾기
export async function findPwd(name, phone, id) {
  const result = await fetch(`${API_SERVER}/auth/findpw`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: name,
      phone_num: phone,
      username: id,
    }),
  })
    .then(res => {
      return res.text();
    })
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

// 좋아요 처리
export async function postLike(userId, shopId, like) {
  const result = await callAPI(`${API_SERVER}/favor/${like ? '' : 'delete'}`, {
    method: 'POST',
    body: JSON.stringify({
      user: userId,
      shop: shopId,
    }),
  });

  return result;
}

export async function getCoffeeTIResult(username, selectData) {
  const result = await callAPI(`${API_SERVER}/auth/coffeeti`, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      user_bean: selectData,
    }),
  });

  return result;
}

// 해시태그 필터
export async function hashTagPost(body, acid, flavor, parking) {
  const result = await callAPI(`${API_SERVER}/shop/filter`, {
    method: 'POST',
    body: JSON.stringify({
      body: body,
      acid: acid,
      flavor: flavor,
      parking: parking,
    }),
  });
  return result;
}

// 해시태그 수정
export async function hashTagModifyPost(isBean, shop, name, body, acid, flavor) {
  const result = await callAPI(`${API_SERVER}/tag/`, {
    method: 'POST',
    body: JSON.stringify({
      isBean: isBean,
      shop: shop,
      name: name,
      body: body,
      acid: acid,
      flavor: flavor,
      slug: '',
    }),
  });

  return result;
}

// 비밀번호 재설정
export async function pwdResetPost(id, pwd) {
  const result = await fetch(`${API_SERVER}/auth/changepw`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im1hbmFnZXIiLCJleHAiOjk5NjU1MTE4NjU3LCJlbWFpbCI6Im1hbmFnZXJAY29mZmVldGkuY29tIiwib3JpZ19pYXQiOjE2NTQ1MTM4NTd9.6fvlAv-K1JNy-lurO0_7G1d-R5FXn1QrhpiHVZwUxDY',
    },
    body: JSON.stringify({
      username: id,
      password: pwd,
      first_name: '',
      birthday: '',
      email: '',
      phone_num: '',
    }),
  })
    .then(res => {
      return res.status < 400 ? res.json() : null;
    })
    .catch(e => {
      console.log(e);
      return null;
    });

  return result;
}

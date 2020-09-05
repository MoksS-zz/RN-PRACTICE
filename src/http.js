export class Http {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get(url) {
    try {
     return await request(url); 
    } catch (error) {
      console.error(error);
    }
  }

  static async post(url, data = {}) {
    try {
      return await request(url, 'POST', data);
     } catch (error) {
       console.error(error);
     }
  }

  static async delete(url) {
    try {
      return await request(url, 'DELETE');
     } catch (error) {
       console.error(error);
     }
  }

  static async patch(url, data = {}) {
    try {
      return await request(url, 'PATCH', data);
     } catch (error) {
       console.error(error);
     }
  }
}

async function request(url, method = 'GET', data) {
  const confg = {
    method,
    headers: Http.HEADERS
  }

  if (method === 'POST' || method === 'PATCH') {
    confg.body = JSON.stringify(data);
  }

  const response = await fetch( url, confg);
  return response.json();
}
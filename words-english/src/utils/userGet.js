import axios from "axios";

export async function getDataUser(token) {
  return await 
    await fetch(`${process.env.URL}auth/DataUser`, {
      body: JSON.stringify({ token }),
    })
    .then((response) => {
      console.log(response);
    })
    .catch(console.log);
}

export async function mm(config) {
  return await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

import axios from "axios";

export async function getDataUser(token) {
  return await axios.get(
    { url: `http://localhost:5000/api/v1/auth/getDataUser` },
    {
      headers: {
        'Content-Type': 'application/json', 
      },
      params: {
        token,
      },
    }
  )
    .then(function (response) {
      console.log(token);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUserSallybus(token) {
  return await axios.get(
    { url: `http://localhost:5000/api/v1/auth/getUserSallybus` },
    {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        token,
      },
    }
  )
    .then(function (response) {
      console.log(token);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getUserEmail(token) {
  return await axios.get(
    { url: `http://localhost:5000/api/v1/auth/getUserEmail` },
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
      params: {
        token,
      },
    }
  )
    .then(function (response) {
      console.log(token);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}


export async function getLogaut() {
  return await fetch(`http://localhost:5000/api/v1/auth/getLogout`, {
    method: 'GET',
    redirect: 'follow'
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

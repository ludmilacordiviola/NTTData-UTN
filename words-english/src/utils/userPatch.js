import axios from "axios";

export async function patchEmail(data) {
  return await axios.patch(`http://localhost:5000/api/v1/auth/patchEmail`, {
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function patchPassword(data) {
  return await axios.patch(`http://localhost:5000/api/v1/auth/patchPassword`, {
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function patchDataUser(data) {
  return await axios.patch(`http://localhost:5000/api/v1/auth/patchDataUser`, {
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function patchSyllabus(data) {
  return await axios.patch(`http://localhost:5000/api/v1/auth/patchSyllabus`, {
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

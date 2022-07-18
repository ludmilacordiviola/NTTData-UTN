
export default async function postLoginUser(email, password){
    return await (await fetch(`${process.env.URL}auth/login`, {
        method: 'post',
        body: JSON.stringify({email, password})
    }))
    .then(response =>{
        console.log(response)
    })
    .catch(console.log);
}
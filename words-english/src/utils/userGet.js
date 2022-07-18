
export default async function getDataUser(token){
    return await (await fetch(`${process.env.URL}auth/DataUser`, {
        body: JSON.stringify({token})
    }))
    .then(response =>{
        console.log(response)
    })
    .catch(console.log);
}
export default function arrayRandom (array){
    return array?.sort(() => Math.random()-0.5);
}
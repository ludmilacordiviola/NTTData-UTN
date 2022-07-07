export default function ArrayRandom (array){
    return array.sort(() => Math.random()-0.5);
}
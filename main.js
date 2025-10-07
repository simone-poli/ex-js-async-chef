import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


async function fetchJson(url) {
    const response = await fetch(url)
    const object = await response.json()
    return object
}



async function getChefBirthday(id) {
    const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const user = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
    return {...ricetta, user}
}



( async() => {
    try{
        const ricetta = await getChefBirthday(1)
        console.log('Data di nascita dello chef:', dayjs(ricetta.user.birthDate).format("DD/MM/YY"))

    } catch(error){
        console.error(error)
    }
}) ();
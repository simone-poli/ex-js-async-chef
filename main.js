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
        console.log('Data di nascita dello chef:', ricetta.user.birthDate)

    } catch(error){
        console.error(error)
    }
}) ();
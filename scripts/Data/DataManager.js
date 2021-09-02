export const getUsers = () => {
    return fetch("https://localhost8088")
    .then(response => response.JSON())
    .then(parsedResponse => {
        console.log(parsedResponse.user);
        // const result = parsedResponse.joke;
        // return result; 
    })
}



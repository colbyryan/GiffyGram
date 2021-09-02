export const getJoke = () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.JSON())
    .then(parsedResponse => {
        console.log(parsedResponse.joke);
        const result = parsedResponse.joke;
        return result; 
    })
}



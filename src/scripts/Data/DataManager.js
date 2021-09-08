// export const getUsers = () => {
//     return fetch("https://localhost8088")
//     .then(response => response.JSON())
//     .then(parsedResponse => {
//         console.log(parsedResponse.user);
//         // const result = parsedResponse.joke;
//         // return result; 
//     })
// }
export const getLoggedInUser = () => {
    return getLoggedInUser;
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
}
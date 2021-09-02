import { getJoke } from "./Data/DataManager.js";

const joke = getJoke().then(apiJoke => {
    return apiJoke;
})
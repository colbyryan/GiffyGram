// Can you explain what is being imported here?
import { getPosts } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./Nav/NavBar.js";

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}
const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML =NavBar();
}
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})


const startGiffyGram = () => {
    showPostList();
    showNavBar();
}

startGiffyGram();



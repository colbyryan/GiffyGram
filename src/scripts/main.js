// Can you explain what is being imported here?
import { getPosts } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./Nav/NavBar.js";
import { FooterBar } from "./Footer/Footer.js";

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

const showFooterBar = () => {
	const footerElement = doctument.querySelector("footer")
	footerElement.innerHTML = FooterBar();
}
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})


const startGiffyGram = () => {
    showPostList();
    showNavBar();
}

startGiffyGram();

// Can you explain what is being imported here?
import { getPosts, usePostCollection } from "./data/DataManager.js"
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
	const footerElement = document.querySelector("footer")
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
applicationElement.addEventListener("change", event => {
	if (event.target.id === "yearSelection") {
	  const yearAsNumber = parseInt(event.target.value)
	  console.log(`User wants to see posts since ${yearAsNumber}`)
	  //invoke a filter function passing the year as an argument
	  showFilteredPosts(yearAsNumber);
	}
  })
  
  const showFilteredPosts = (year) => {
	//get a copy of the post collection
	const epoch = Date.parse(`01/01/${year}`);
	//filter the data
	const filteredData = usePostCollection().filter(singlePost => {
	  if (singlePost.timestamp >= epoch) {
		return singlePost
	  }
	})
	const postElement = document.querySelector(".postList");
	postElement.innerHTML = PostList(filteredData);
  }


const startGiffyGram = () => {
    showPostList();
    showNavBar();
	showFooterBar();
}

startGiffyGram();

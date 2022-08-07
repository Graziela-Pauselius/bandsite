//------- Select Elements -----
const commentsSection = document.querySelector(".comments");
const form = document.querySelector(".comments__form");
const nameValue = document.querySelector(".comments__form-input");
const commentValue = document.querySelector(".comments__form-textarea");

// ------ Comments Data ---------
const comments = [
	{
		name: "Connor Walton",
		date: "02/17/2021",
		content:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
		avatar: "",
	},
	{
		name: "Emilie Beach",
		date: "01/09/2021",
		content:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
		avatar: "",
	},
	{
		name: "Miles Acosta",
		date: "12/20/2020",
		content:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
		avatar: "",
	},
];

const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comment");
commentsSection.appendChild(commentsContainer);

// ------- Display Comments Function ----
const displayComment = (obj) => {
	commentsContainer.innerHTML = null;
	// Loop to create each comment section
	for (let i = 0; i < comments.length; i++) {
		//  comment container
		const commentContainer = document.createElement("div");
		commentContainer.classList.add("comment__container");
		commentsContainer.appendChild(commentContainer);

		// comment avatar
		const commentAvatar = document.createElement("img");
		commentAvatar.classList.add("comment__avatar", "avatar");
		commentContainer.appendChild(commentAvatar);

		//comment content container
		const commentInfoContainer = document.createElement("div");
		commentInfoContainer.classList.add("comment__container-info");
		commentContainer.appendChild(commentInfoContainer);

		// name and date container
		const commentBox = document.createElement("div");
		commentBox.classList.add("comment__box");
		commentInfoContainer.appendChild(commentBox);

		// comment name
		const name = document.createElement("h4");
		name.classList.add("comment__name", "subheader");
		name.innerText = comments[i].name;
		commentBox.appendChild(name);

		// comment date
		const date = document.createElement("span");
		date.classList.add("comment__date");
		date.innerText = comments[i].date;
		commentBox.appendChild(date);

		// comment content
		const content = document.createElement("p");
		content.classList.add("comment__content");
		content.innerText = comments[i].content;
		commentInfoContainer.appendChild(content);
	}
};

displayComment(comments);

//  ----- Date formatted ------
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;

let dateFormated = day + "/" + month + "/" + year;

// Handler function
const newCommentsHandler = () => {
	const newName = nameValue.value;
	console.log(newName);
	const newComment = commentValue.value;
	console.log(newComment);

	let newDisplayComment = {
		name: newName,
		content: newComment,
		date: dateFormated,
	};

	const newCommentsList = comments;
	newCommentsList.unshift(newDisplayComment);

	form.reset();
};

// Event Listner
form.addEventListener("submit", (e) => {
	e.preventDefault();
	displayComment(newCommentsHandler());
	console.log(e);
});

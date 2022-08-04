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

// ------- Create Comment Section -----
const commentsSection = document.createElement("section");
commentsSection.classList.add("comments");
commentsSection;
document.body.appendChild(commentsSection);

// comment section title
const title = document.createElement("h2");
title.classList.add("comments__title");
title.innerText = "Join the Conversation";
commentsSection.appendChild(title);

// ------ Comment Form --------

// form container
const formContainer = document.createElement("div");
formContainer.classList.add("comments__form-container");
commentsSection.appendChild(formContainer);

// form avatar
const formAvatar = document.createElement("img");
formAvatar.classList.add("comments__form-avatar", "avatar");
formContainer.appendChild(formAvatar);

// form
const form = document.createElement("form");
form.classList.add("comments__form");
formContainer.appendChild(form);

// form name label
const nameLabel = document.createElement("label");
nameLabel.classList.add("comments__form-label", "label");
nameLabel.setAttribute("for", "name");
nameLabel.innerText = "NAME";
form.appendChild(nameLabel);

// form name field
const nameField = document.createElement("input");
nameField.classList.add("comments__form-field");
nameField.setAttribute("type", "text");
nameField.setAttribute("id", "name");
nameField.setAttribute("name", "name");
nameField.setAttribute("value", "Enter your name");
form.appendChild(nameField);

// form comment label
const commentLabel = document.createElement("label");
commentLabel.classList.add("comments__form-label", "label");
commentLabel.setAttribute("for", "comment");
commentLabel.innerText = "COMMENT";
form.appendChild(commentLabel);

// form comment field
const commentField = document.createElement("textarea");
commentField.classList.add("comments__form-textarea", "comments__form-field");
commentField.setAttribute("rows", "10");
commentField.setAttribute("cols", "30");
commentField.setAttribute("id", "comment");
commentField.setAttribute("name", "comment");
commentField.innerText = "Add a new comment";
form.appendChild(commentField);

// form button
const btn = document.createElement("button");
btn.classList.add("comments__form-btn", "btn");
btn.innerText = "COMMENT";
form.appendChild(btn);

//comments container
const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comments__container");
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

const nameValue = document.querySelector(".comments__form-field");
const commentValue = document.querySelector(".comments__form-textarea");

//  ----- Date formatted ------
// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth() + 1;
// const year = today.getFullYear();

// if (day < 10) day = "0" + day;
// if (month < 10) month = "0" + month;

// const dateFormated = day + "/" + month + "/" + year;

// Handler function
const addNewComment = () => {
	const newName = nameValue.value;
	console.log(newName);
	const newComment = commentValue.value;
	console.log(newComment);

	let newDisplayComment = {
		name: newName,
		content: newComment,
		// date: dateFormated,
	};

	const newCommentsList = comments;
	newCommentsList.unshift(newDisplayComment);

	form.reset();
};

// Event Listner
form.addEventListener("submit", (e) => {
	e.preventDefault();
	displayComment(addNewComment());
	console.log(e);
});

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
const commentSection = document.createElement("section");
commentSection.classList.add("comments");
commentSection;
document.body.appendChild(commentSection);

// comment section title
const title = document.createElement("h2");
title.classList.add("comments__title");
title.innerText = "Join the Conversation";
commentSection.appendChild(title);

// ------ Comment Form --------

// form container
const formContainer = document.createElement("div");
formContainer.classList.add("form__container");
commentSection.appendChild(formContainer);

// form avatar
const formAvatar = document.createElement("img");
formAvatar.classList.add("form__avatar", "avatar");
formContainer.appendChild(formAvatar);

// form
const form = document.createElement("form");
form.classList.add("form");
formContainer.appendChild(form);

// form name label
const nameLabel = document.createElement("label");
nameLabel.classList.add("form__label");
nameLabel.setAttribute("for", "name");
nameLabel.innerText = "NAME";
form.appendChild(nameLabel);

// form name field
const nameField = document.createElement("input");
nameField.classList.add("form__field");
nameField.setAttribute("type", "text");
nameField.setAttribute("id", "name");
nameField.setAttribute("name", "name");
nameField.setAttribute("value", "Enter your name");
form.appendChild(nameField);

// form comment label
const commentLabel = document.createElement("label");
commentLabel.classList.add("form__label");
commentLabel.setAttribute("for", "comment");
commentLabel.innerText = "COMMENT";
form.appendChild(commentLabel);

// form comment field
const commentField = document.createElement("textarea");
commentField.classList.add("form__field");
commentField.setAttribute("rows", "10");
commentField.setAttribute("cols", "40");
commentField.setAttribute("id", "comment");
commentField.setAttribute("name", "comment");
commentField.innerText = "Add a new comment";
form.appendChild(commentField);

// form button
const btn = document.createElement("button");
btn.classList.add("form__btn");
btn.innerText = "COMMENT";
form.appendChild(btn);

// ------- Display Comments Function ----
const displayComment = (obj) => {
	// Loop to create each comment section
	for (let i = 0; i < obj.length; i++) {
		//  comment container
		const commentContainer = document.createElement("div");
		commentContainer.classList.add("comment__container");
		commentSection.appendChild(commentContainer);

		// comment avatar
		const commentAvatar = document.createElement("img");
		commentAvatar.classList.add("comment__avatar", "avatar");
		commentContainer.appendChild(commentAvatar);

		// comment name
		const name = document.createElement("h3");
		name.classList.add("comment__name");
		name.innerText = obj[i].name;
		commentContainer.appendChild(name);

		// comment date
		const date = document.createElement("span");
		date.classList.add("comment__date");
		date.innerText = obj[i].date;
		commentContainer.appendChild(date);

		// comment content
		const content = document.createElement("p");
		content.classList.add("comment__content");
		content.innerText = obj[i].content;
		commentContainer.appendChild(content);
	}
};

displayComment(comments);

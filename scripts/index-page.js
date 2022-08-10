//------- Select Elements -----
const commentsSection = document.querySelector(".comments");
const form = document.querySelector(".comments__form");
const nameValue = document.querySelector(".comments__form-input");
const commentValue = document.querySelector(".comments__form-textarea");

// ------ Comments Data ---------
let comments = [];
let likes = [];

// ------ Date formated function ----
const dateFormated = (timestamp) => {
	let date = new Date(timestamp);
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	if (day < 10) day = "0" + day;
	if (month < 10) month = "0" + month;

	return day + "/" + month + "/" + year;
};

const UpdateLikes = (like) => {
	likes += like;
};

// ------- Display Comments Function ----

const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comment");
commentsSection.appendChild(commentsContainer);

const displayComment = () => {
	commentsContainer.innerHTML = null;
	// Loop to create each comment section
	comments.forEach((element) => {
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
		name.innerText = element.name;
		commentBox.appendChild(name);

		// comment date
		const date = document.createElement("span");
		date.classList.add("comment__date");
		date.innerText = dateFormated(element.timestamp);
		commentBox.appendChild(date);

		// comment content
		const content = document.createElement("p");
		content.classList.add("comment__content");
		content.innerText = element.comment;
		commentInfoContainer.appendChild(content);

		// like container
		const likeContainer = document.createElement("div");
		likeContainer.classList.add("comment__like-container");
		commentInfoContainer.appendChild(likeContainer);

		// like button
		const likeBtn = document.createElement("button");
		likeBtn.classList.add("comment__btn");
		likeContainer.appendChild(likeBtn);

		// like counter
		const likeCounter = document.createElement("span");
		likeCounter.classList.add("comment__counter");
		likeCounter.innerText = element.likes;
		likeContainer.appendChild(likeCounter);
	});
};

axios
	.get(
		"https://project-1-api.herokuapp.com/comments?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651"
	)
	.then((response) => {
		comments = response.data;
		// comments.short();
		displayComment();
	});

//----- Event Listner ----------
form.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(e);

	const newComment = {
		name: e.target.name.value,
		comment: e.target.comment.value,
	};

	axios
		.post(
			"https://project-1-api.herokuapp.com/comments?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651",
			newComment
		)
		.then((res) => {
			comments.unshift(res.data);
			console.log(comments);
			displayComment();
			e.target.reset();
		});
});

const heartLikes = document.querySelector(".comment__like-container");
console.log(heartLikes);

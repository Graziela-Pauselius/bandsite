//------- Select Elements -----
const commentsSection = document.querySelector(".comments__section");
const form = document.querySelector(".form");
const nameValue = document.querySelector(".form__input");
const commentValue = document.querySelector(".form__comment");

// ------ Comments Data ---------
let comments = [];

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

// ------ Axios Function -----------

const apiUrl =
	"https://project-1-api.herokuapp.com/comments?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651";

const getAPI = () => {
	axios.get(apiUrl).then((response) => {
		comments = response.data;
		comments.sort((a, b) => {
			return b.timestamp - a.timestamp;
		});
		displayAllComments();
	});
};

getAPI();

const postAPI = (obj) => {
	axios.post(apiUrl, obj).then((response) => {
		commentsSection.innerHTML = null;
		comments.unshift(response.data);
		displayAllComments();
	});
};

const likeAPI = (comment) => {
	axios
		.put(
			`https://project-1-api.herokuapp.com/comments/${comment}/like?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651`
		)
		.then((response) => {
			commentsSection.innerHTML = null;
			getAPI();
		});
};

const deleteAPI = (comment) => {
	axios
		.delete(
			`https://project-1-api.herokuapp.com/comments/${comment}?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651`
		)
		.then((response) => {
			commentsSection.innerHTML = null;
			getAPI();
		});
};

// ---- Display Single Comment  Function -------
const displayComment = (comment) => {
	// comment container
	const commentContainer = document.createElement("div");
	commentContainer.classList.add("comments__container");
	commentsSection.appendChild(commentContainer);

	// comment avatar
	const commentAvatar = document.createElement("img");
	commentAvatar.classList.add("comments__avatar", "avatar");
	commentContainer.appendChild(commentAvatar);

	//comment content container
	const commentInfoContainer = document.createElement("div");
	commentInfoContainer.classList.add("comments__container-info");
	commentContainer.appendChild(commentInfoContainer);

	// name and date container
	const commentBox = document.createElement("div");
	commentBox.classList.add("comments__box");
	commentInfoContainer.appendChild(commentBox);

	// comment name
	const name = document.createElement("h4");
	name.classList.add("comments__name", "comments__name--bold");
	name.innerText = comment.name;
	commentBox.appendChild(name);

	// comment date
	const date = document.createElement("span");
	date.classList.add("comments__date");
	date.innerText = dateFormated(comment.timestamp);
	commentBox.appendChild(date);

	// comment content
	const content = document.createElement("p");
	content.classList.add("comments__content");
	content.innerText = comment.comment;
	commentInfoContainer.appendChild(content);

	// btns container
	const btnContainer = document.createElement("div");
	btnContainer.classList.add("comments__btn-container");
	commentInfoContainer.appendChild(btnContainer);

	//delete btn
	const deletebtn = document.createElement("button");
	deletebtn.classList.add("comments__delete-btn");
	deletebtn.innerText = "Delete";
	btnContainer.appendChild(deletebtn);

	deletebtn.addEventListener("click", () => {
		deleteAPI(comment.id);
	});

	// like container
	const likeContainer = document.createElement("div");
	likeContainer.classList.add("comments__like-container");
	btnContainer.appendChild(likeContainer);

	// like button
	const likeBtn = document.createElement("button");
	likeBtn.classList.add("comments__like-btn");
	likeContainer.appendChild(likeBtn);

	likeBtn.addEventListener("click", () => {
		likeAPI(comment.id);
	});

	// like counter
	const likeCounter = document.createElement("span");
	likeCounter.classList.add("comments__counter");
	likeCounter.innerText = comment.likes;
	likeContainer.appendChild(likeCounter);
};

const displayAllComments = () => {
	comments.forEach((element) => {
		displayComment(element);
	});
};

//----- Event Listner ----------
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const newComment = {
		name: e.target.name.value,
		comment: e.target.comment.value,
	};

	postAPI(newComment);
	e.target.reset();
});

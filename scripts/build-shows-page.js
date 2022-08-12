//-------- Select Elements -------
const showList = document.querySelector(".show__list");
//------- Show Data Base ------

let showDates = [];

//----- Shows Date Function -------
const options = {
	weekday: "short",
	month: "short",
	day: "numeric",
	year: "numeric",
};

const dateFormated = (timestamp) => {
	let date = new Date(timestamp);
	let formatedDate = date.toLocaleString("en-US", options);

	return formatedDate;
};

// ----- Display Shows Function ------
const displayShows = () => {
	showDates.forEach((element) => {
		// Show Item Container
		const showItem = document.createElement("div");
		showItem.classList.add("show__box");
		showList.appendChild(showItem);

		//Date
		const showDateTitle = document.createElement("p");
		showDateTitle.classList.add("show__label", "show__label-hide");
		showDateTitle.innerText = "DATE";
		showItem.appendChild(showDateTitle);

		const showDate = document.createElement("p");
		showDate.classList.add("show__text", "show__text-bold");
		showDate.innerText = dateFormated(element.date);
		showItem.appendChild(showDate);

		// Venue
		const showVenueTitle = document.createElement("p");
		showVenueTitle.classList.add("show__label", "show__label-hide");
		showVenueTitle.innerText = "VENUE";
		showItem.appendChild(showVenueTitle);

		const showVenue = document.createElement("p");
		showVenue.classList.add("show__text");
		showVenue.innerText = element.place;
		showItem.appendChild(showVenue);

		// Location
		const locationTitle = document.createElement("p");
		locationTitle.classList.add("show__label", "show__label-hide");
		locationTitle.innerText = "LOCATION";
		showItem.appendChild(locationTitle);

		const location = document.createElement("p");
		location.classList.add("show__text");
		location.innerText = element.location;
		showItem.appendChild(location);

		// Button
		const btn = document.createElement("button");
		btn.classList.add("show__btn");
		btn.innerText = "BUY TICKETS";
		showItem.appendChild(btn);
	});
};

axios
	.get(
		"https://project-1-api.herokuapp.com/showdates?api_key=8c9ea60a-2ec5-4b26-8772-3263e3da7651"
	)
	.then((response) => {
		showDates = response.data;
		displayShows();
	});

// Selected Event Handler
const showBox = document.querySelectorAll(".show__box");

showBox.forEach((show) => {
	show.addEventListener("click", (event) => {
		showBox.forEach((item) => {
			item.classList.remove("show__event-selected");
		});
		event.currentTarget.classList.add("show__event-selected");
	});
});

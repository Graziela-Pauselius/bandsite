//-------- Select Elements -------
const showList = document.querySelector(".show__list");
//------- Concert Data ------

const concerts = [
	{
		date: "Mon Sept 06 2021",
		venue: "Ronald Lane ",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 21 2021",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Oct 15 2021",
		venue: "View Lounge",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 06 2021",
		venue: "Hyatt Agency",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 26 2021",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 15 2021",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

// ----- Display Shows Function ------
const displayShows = (obj) => {
	for (let i = 0; i < obj.length; i++) {
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
		showDate.classList.add("show__text", "subheader", "subheader--bold");
		showDate.innerText = obj[i].date;
		showItem.appendChild(showDate);

		// Venue
		const showVenueTitle = document.createElement("p");
		showVenueTitle.classList.add("show__label", "show__label-hide");
		showVenueTitle.innerText = "VENUE";
		showItem.appendChild(showVenueTitle);

		const showVenue = document.createElement("p");
		showVenue.classList.add("show__text", "subheader");
		showVenue.innerText = obj[i].venue;
		showItem.appendChild(showVenue);

		// Location
		const locationTitle = document.createElement("p");
		locationTitle.classList.add("show__label", "show__label-hide");
		locationTitle.innerText = "LOCATION";
		showItem.appendChild(locationTitle);

		const location = document.createElement("p");
		location.classList.add("show__text", "subheader");
		location.innerText = obj[i].location;
		showItem.appendChild(location);

		// Button
		const btn = document.createElement("button");
		btn.classList.add("show__btn", "btn");
		btn.innerText = "BUY TICKETS";
		showItem.appendChild(btn);
	}
};

displayShows(concerts);

function handleClick(event) {
	const itemSelect = event.target;
	itemSelect.classList.add("show__event-selected");

	event.target.reset();
}

const showBox = document.querySelector(".show__box");
showBox.addEventListener("click", handleClick);

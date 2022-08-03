//------- Concert Data ------

const concerts = [
	{
		date: "Mon Sept 06 2021",
		venue: "Ronald Lane ",
	},
	{
		date: "Tue Sept 21 2021",
		venue: "Pier 3 East",
	},
	{
		date: "Fri Oct 15 2021",
		venue: "View Lounge",
	},
	{
		date: "Sat Nov 06 2021",
		venue: "Hyatt Agency",
	},
	{
		date: "Fri Nov 26 2021",
		venue: "Moscow Center",
	},
	{
		date: "Wed Dec 15 2021",
		venue: "Press Club",
	},
];

//----- Create Main Section ----
const main = document.createElement("main");
main.classList.add("main");
document.body.appendChild(main);

//Show Section
const showSection = document.createElement("section");
showSection.classList.add("show__section");
main.appendChild(showSection);

// ----- Display Shows Function ------
const displayShows = (obj) => {
	for (let i = 0; i < obj.length; i++) {
		// Show container
		const show = document.createElement("div");
		show.classList.add("show__container");
		showSection.appendChild(show);

		//Date
		const showDateTitle = document.createElement("p");
		showDateTitle.classList.add("show__title", "show__title--bold");
		showDateTitle.innerText = "DATE";
		show.appendChild(showDateTitle);

		const showDate = document.createElement("p");
		showDate.classList.add("show__text");
		showDate.innerText = obj[i].date;
		show.appendChild(showDate);

		// Venue
		const showVenueTitle = document.createElement("p");
		showVenueTitle.classList.add("show__title");
		showVenueTitle.innerText = "VENUE";
		show.appendChild(showVenueTitle);

		const showVenue = document.createElement("p");
		showVenue.classList.add("show__text");
		showVenue.innerText = obj[i].venue;
		show.appendChild(showVenue);

		// Location
		const locationTitle = document.createElement("p");
		locationTitle.classList.add("show__title");
		locationTitle.innerText = "LOCATION";
		show.appendChild(locationTitle);

		const location = document.createElement("p");
		location.classList.add("show__text");
		location.innerText = "San Francisco, CA";
		show.appendChild(location);

		// Button
		const btn = document.createElement("button");
		btn.classList.add("show__btn", "btn");
		btn.innerText = "BUY TICKETS";
		show.appendChild(btn);
	}
};

displayShows(concerts);

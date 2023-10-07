/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
	name: "Hyrum David Perez",
	photo: "images/Hyrum-Perez.jpg",
	favoriteFoods: ["Pollo a la Brasa","Spaghetty","Milkshake"],
	hobbies: ["Chess", "Read books and blogs","Tech Stuff"],
	placesLived: [],
};




/* Populate Profile Object with placesLive objects */

const place1 = {
  place: "Lima",
  length: "3 years"
};

const place2 = {
  place: "Trujillo",
  length: "13 years"
};


myProfile.placesLived.push(place1, place2);

console.log(myProfile);

/* DOM Manipulation - Output */



/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/

const favoriteFoodsElement = document.getElementById("favorite-foods");


myProfile.favoriteFoods.forEach(function (food) {

    const listItem = document.createElement("li");

    listItem.textContent = food;

    favoriteFoodsElement.appendChild(listItem);
  });

/* Hobbies List */
const hobbiesElement = document.getElementById("hobbies");


if (hobbiesElement) {
  myProfile.hobbies.forEach(function (hobby) {
    const listItem = document.createElement("li");

    listItem.textContent = hobby;

    hobbiesElement.appendChild(listItem);
  });
}


/* Places Lived DataList */
const placesLivedElement = document.getElementById("places-lived");

if (placesLivedElement) {
  myProfile.placesLived.forEach(function (placeInfo) {
    const dtElement = document.createElement("dt");

    dtElement.textContent = placeInfo.place;

    const ddElement = document.createElement("dd");

    ddElement.textContent = placeInfo.length;

    placesLivedElement.appendChild(dtElement);

    placesLivedElement.appendChild(ddElement);
  });
}



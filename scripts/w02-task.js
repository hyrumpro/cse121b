/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Hyrum David Perez Abanto";
let currentYear = Date.now();
var profilePicture = 'images/Hyrum-Perez.jpg';



/* Step 3 - Element Variables */

let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
var imageElement = document.querySelector('img[alt="Placeholder Image"]');


/* Step 4 - Adding Content */



nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);


/* Step 5 - Array */


let myFavoriteFoods = ["Pollo a la brasa","spaghetti","Pizza"];

foodElement.innerHTML = `<strong>My Favorite Foods:</strong><br>${myFavoriteFoods.join('<br>')}`;


let newFavoriteFood = "Ice Cream";

myFavoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br> ${newFavoriteFood}`;
myFavoriteFoods.shift();
foodElement.innerHTML += `<br>${myFavoriteFoods.join('<br>')}`;
myFavoriteFoods.pop();
foodElement.innerHTML += `<br>${myFavoriteFoods.join('<br>')}`;













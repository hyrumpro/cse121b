/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
var templeList = [];



/* async displayTemples Function */
const displayTemples = (temples) => {
	temples.forEach((temple) => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.setAttribute("style", "max-width:400px;");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
   const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
   const data = await response.json();
   templeList.push(...data);
   displayTemples(templeList);
   console.log(data);
    } catch (error) {
        console.error('Error, Error', error);
    }  
}




/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};


/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'notutah':
            const nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;
        case 'older':
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter');
    }
};

document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
});




getTemples();

/* Event Listener */

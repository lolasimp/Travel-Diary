// console.log(diary);
const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
};

const coolPlaces = [

    {
        id: 'norCal',
        title: 'Nor Cal',
        image: 'http://placeimg.com/640/480/nature',
        description: 'Northern California is also called NorCal.'
    },
    {
        id:'jordan',
        title: 'Jordan',
        image: 'http://placeimg.com/640/480/nature',
        description: 'Jordan, an Arab nation on the east bank of the Jordan River.'
    },
    {
        id:'abudhabi',
        title: 'Abu Dhabi',
        image: 'http://placeimg.com/640/480/nature',
        description: 'Abu Dhabi, the capital of the United Arab Emirates.'
    },
    {
        id:'tanzania',
        title: 'Tanzania',
        image: 'http://placeimg.com/640/480/nature',
        description: 'Tanzania is an East African country known for its vast wilderness areas.'
    },
    {
        id:'soKorea',
        title: 'South Korea',
        image: 'http://placeimg.com/640/480/nature',
        description: 'South Korea, an East Asian nation on the southern half of the Korean Peninsula.'
    },
    {
        id:'florida',
        title: 'Florida',
        image: 'http://placeimg.com/640/480/nature',
        description: 'Florida is the southeasternmost U.S. state.'
    }
];

// console.log(coolPlaces);

const cardDomString = (placeArray) => {
    let domString = '';
    placeArray.forEach((place) => {
        domString += `<div class = "card">`;
        domString += `<h2 class="placeName"> ${place.title} </h2>`;
        domString += `<img class="img" src= "${place.image}" alt="">`;
        domString += `<h6> ${place.description} </h6>`;
        domString += `<textarea id="input"></textarea>`;
        domString += `<button id="card-button">Display</button>`;
        domString += `</div>`;

    });
    printToDom(domString, 'card-holder');
}

cardDomString(coolPlaces);


const allTheButtons = document.getElementById('card-button');
// console.log('allTheButtons', allTheButtons);

for(let i = 0; i < allTheButtons.length; i++) {
	allTheButtons[i].addEventListener ('click', (e) => {
       
    })
}

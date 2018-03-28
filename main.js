// console.log(diary);
const printToDom = (string, id) => {
    document.getElementById(id).innerHTML = string;
};

const coolPlaces = [
    
    {
        id: 'norCal',
        title: 'Northern California',
        image: 'https://www.telegraph.co.uk/content/dam/Travel/ultimateitineraries/ultimatenortherncalifornia/RESTRICTED-audleytravel-northerncalifornia-gallery2-TRAVEL.jpg?imwidth=1240',
        description: 'Northern California is also called NorCal.'
    },
    {
        id:'jordan',
        title: 'Jordan',
        image: 'https://discipleshiptravel.com/wp-content/uploads/2014/10/jordan-arabic-english-500.jpg',
        description: 'Jordan, an Arab nation on the east bank of the Jordan River.'
    },
    {
        id:'abudhabi',
        title: 'Abu Dhabi',
        image: 'https://www.virginholidays.co.uk/dam/jcr:eb6fc04c-84e3-431c-8200-8e39a7fac6ba',
        description: 'Abu Dhabi, the capital of the United Arab Emirates.'
    },
    {
        id:'tanzania',
        title: 'Tanzania',
        image: 'http://www.transafricasafaris.com/wp-content/uploads/2014/11/Tanzania-header-980x438.jpg',
        description: 'Tanzania is an East African country known for its vast wilderness areas.'
    },
    {
        id:'soKorea',
        title: 'South Korea',
        image: 'https://www.roadaffair.com/wp-content/uploads/2017/10/night-street-seoul-south-korea-shutterstock_578475466-780x520.jpg',
        description: 'South Korea, an East Asian nation on the southern half of the Korean Peninsula.'
    },
    {
        id:'florida',
        title: 'Florida',
        image: 'https://www.housingwire.com/ext/resources/images/editorial/A-New-Big-Images/states/Florida/Miami.jpg?1461009518',
        description: 'Florida is the southeastern most U.S. state.'
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
        domString += `<textarea class="input"></textarea>`;
        domString += `<button class="display">Display</button>`;
        domString += `</div>`;

    });
    printToDom(domString, 'card-holder');
}

cardDomString(coolPlaces);

const addDiaryEventListener =() => {
    const diaryButtons = document.getElementsByClassName('display');
    for (let i = 0; i < diaryButtons.length; i++){
        diaryButtons[i].addEventListener('click', diaryDomString)
    }
    // ();
}

const diaryDomString = (e) => {   
        let diaryDom = '';
        diaryDom += `<div class="diary-ouput">`;
        diaryDom += `<h2>${e.target.parentNode.children[0].innerHTML}</h2>`;
        diaryDom += `<h4>${e.target.parentNode.children[3].value}</h4>`;
        diaryDom += `</div>`;
            printToDom(diaryDom,'diary-entry');
        e.target.parentNode.children[3].value = '';

};

const startApplication = () => {
    cardDomString(coolPlaces);
    addDiaryEventListener();
};

startApplication();

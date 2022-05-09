const BASE_URL = 'https://rickandmortyapi.com/api';
const CHARACTER = '/character'
const API_URL = BASE_URL + CHARACTER;


const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function rickandmorty() {

    getCharacters(API_URL);

    function getCharacters(url) {
        fetch(url).then(res => res.json()).then(data => {
            showCharacters(data.results);
        });
    }

    function showCharacters(data) {
        main.innerHTML = '';
        data.forEach(character => {
            const { name, status, image } = character;

            const characterEl = document.createElement('div');
            characterEl.classList.add('character');
            if (status.toLowerCase() == "alive") {
                characterEl.innerHTML = `<img src="${image}"
            alt="${name}" class="character-img">
        <div id="character-info" class="character-info">
            <h3>${name}</h3>
            <span class="alive">${status}</span>
        </div>`
            } else {
                characterEl.innerHTML = `<img src="${image}"
            alt="${name}" class="character-img">
        <div id="character-info" class="character-info">
            <h3>${name}</h3>
            <span class="deadorunknown">${status}</span>
        </div>`
            }

            main.appendChild(characterEl);

            return;
        })
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = search.value;

        if (searchTerm) {
            getCharacters(API_URL + '/?name=' + searchTerm);
        } else {
            getCharacters(API_URL);
        }
    })

}
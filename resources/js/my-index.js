import getBreeds from './helpers/breeds-list.js';

const breedsList = document.querySelector('#breeds-list');


getBreeds()
    .then(breeds => {

        for (let breed of breeds) {
            let option = `<option value="${breed.id}">${breed.name}</option>`;
            breedsList.insertAdjacentHTML('beforeend', option);
        }

    });



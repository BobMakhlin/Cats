import { getBreed, getBreeds } from './helpers/breeds.js';
import Breed from './drawers/breed.js';

const breedsList = document.querySelector('#breeds-list');
const breedLine = document.querySelector('.breed-line');

getBreeds()
    .then(breeds => {

        for (let breed of breeds) {
            let option = `<option value="${breed.id}">${breed.name}</option>`;
            breedsList.insertAdjacentHTML('beforeend', option);
        }

    });

breedsList.addEventListener('change', async () => {
    let selectedBreedId = breedsList.options[breedsList.selectedIndex].value;
    let breedData = await getBreed(selectedBreedId);
    let breed = breedData.breeds[0];

    console.log(breed)

    let breedCharacteristics = {
        adaptability: breed.adaptability,
        affection: breed.affection_level,
        childFriendly: breed.child_friendly,
        dogFriendly: breed.dog_friendly,
        energy: breed.energy_level,
        experimental: breed.experimental,
        hairless: breed.hairless,
        healthIssues: breed.health_issues,
        intelligence: breed.intelligence,
        natural: breed.natural,
        rare: breed.rare,
        shortLegs: breed.short_legs,
        socialNeeds: breed.social_needs,
        strangerFriendly: breed.stranger_friendly
    };

    let breedDrawer = new Breed(
        breedData.url, 
        breed.wikipedia_url, 
        breed.name,
        breed.description,
        breed.temperament,
        breed.life_span,
        breed.origin,
        breedCharacteristics
    );

    breedLine.innerHTML = '';
    breedLine.append(breedDrawer.toHtmlElement());
});


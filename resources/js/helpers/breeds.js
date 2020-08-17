import { breedsUrl, breedInfoUrl } from '../data/urls.js';
import { theCatApiKey } from '../data/keys.js';
import loadJson from '../helpers/loadingHelper.js';

async function getBreeds() {
    let breeds = await loadJson(breedsUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': theCatApiKey
        }
    });

    return breeds.map(breed => ({ id: breed.id, name: breed.name }));
}

async function getBreed(id) {
    let breed = await loadJson(`${breedInfoUrl}${id}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': theCatApiKey
        }
    });

    return breed[0];
}

export { getBreeds, getBreed };


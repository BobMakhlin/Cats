import { theCatApiUrl } from '../data/urls.js';
import { theCatApiKey } from '../data/keys.js';

async function getBreeds() {
    let response = await fetch(theCatApiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': theCatApiKey
        }
    });

    let breeds = await response.json();
    return breeds.map(breed => ({ id: breed.id, name: breed.name }));
}

export default getBreeds;

export default class Breed {
    constructor(image, wikiUrl, name, description, temperament, lifeSpan, origin, characteristics) {
        this.image = image;
        this.wikiUrl = wikiUrl;
        this.name = name;
        this.description = description;
        this.temperament = temperament;
        this.lifeSpan = lifeSpan;
        this.origin = origin;

        this.adaptability = characteristics.adaptability;
        this.affection = characteristics.affection;
        this.childFriendly = characteristics.childFriendly;
        this.dogFriendly = characteristics.dogFriendly;
        this.energy = characteristics.energy;
        this.experimental = characteristics.experimental;
        this.hairless = characteristics.hairless;
        this.healthIssues = characteristics.healthIssues;
        this.intelligence = characteristics.intelligence;
        this.natural = characteristics.natural;
        this.rare = characteristics.rare;
        this.shortLegs = characteristics.shortLegs;
        this.socialNeeds = characteristics.socialNeeds;
        this.strangerFriendly = characteristics.strangerFriendly;
    }

    toHtmlElement() {
        let breed = document.createElement('div');
        breed.className = 'breed';

        breed.innerHTML = `
            <img src="${this.image}" alt="Cat image" class="breed__img">

            <h2 class="breed__title breed__name">
                <a href="${this.wikiUrl}" class="hidden-link">${this.name}</a>
            </h2>

            <p class="breed__description">${this.description}</p>

            <table class="breed__info-table">
                <tr>
                    <th>Temperament</th>
                    <td>${this.temperament}</td>
                </tr>

                <tr>
                    <th>Life span</th>
                    <td>${this.lifeSpan}</td>
                </tr>

                <tr>
                    <th>Origin</th>
                    <td>${this.origin}</td>
                </tr>

                <tr>
                    <th>Adaptability</th>
                    <td class="characteristic-level">${this.adaptability}</td>
                </tr>
                <tr>
                    <th>Affection</th>
                    <td class="characteristic-level">${this.affection}</td>
                </tr>
                <tr>
                    <th>Child friendly</th>
                    <td class="characteristic-level">${this.childFriendly}</td>
                </tr>
                <tr>
                    <th>Dog friendly</th>
                    <td class="characteristic-level">${this.dogFriendly}</td>
                </tr>
                <tr>
                    <th>Energy</th>
                    <td class="characteristic-level">${this.energy}</td>
                </tr>
                <tr>
                    <th>Experimental</th>
                    <td class="characteristic-level">${this.experimental}</td>
                </tr>
                <tr>
                    <th>Hairless</th>
                    <td class="characteristic-level">${this.hairless}</td>
                </tr>
                <tr>
                    <th>Health issues</th>
                    <td>${this.healthIssues}</td>
                </tr>
                <tr>
                    <th>Intelligence</th>
                    <td class="characteristic-level">${this.intelligence}</td>
                </tr>
                <tr>
                    <th>Natural</th>
                    <td class="characteristic-level">${this.natural}</td>
                </tr>
                <tr>
                    <th>Rare</th>
                    <td class="characteristic-level">${this.rare}</td>
                </tr>
                <tr>
                    <th>Short legs</th>
                    <td class="characteristic-level">${this.shortLegs}</td>
                </tr>
                <tr>
                    <th>Social needs</th>
                    <td class="characteristic-level">${this.socialNeeds}</td>
                </tr>
                <tr>
                    <th>Stranger friendly</th>
                    <td class="characteristic-level">${this.strangerFriendly}</td>
                </tr>
            </table>
        `;

        return breed;
    }
}
class HttpError extends Error {
    constructor(response) {
        super(`Status ${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

export default async function loadJson(url, init) {
    let response = await fetch(url, init);

    if (!response.ok) {
        throw new HttpError(response);
    }

    return response.json();
}

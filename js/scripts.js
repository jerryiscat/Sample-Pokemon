// Populates the HTML with data
// Takes in a string of pokemon name
async function populatePokemon(pokemon) {
    // API Source: https://pokeapi.co/
    // HINT: Use returned API data and run 
    //       setFrontSprite(getFrontSprite(data))
    //       to set the image
    try {
        //  fetch the data from api, putting the pokemon name into the url
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        const data = await response.json();
        const imageUrl = getFrontSprite(data);
        setFrontSprite(imageUrl);
    } catch (error) {
        console.error('error fetching data:', error);
    }

}

// Takes in data from populatePokemon()
// Returns the image url for Pokemon Front Sprite 
function getFrontSprite(pokeData) {
    // find the correct path from the https://pokeapi.co/ 
    return pokeData.sprites.front_default
}

// Takes in image url from getFrontSprite()
// Sets the image source in #pokemon-img 
function setFrontSprite(pokeImg) {
    // find the image id from  the html file, and get the element, then change the image source
    const element = document.getElementById('pokemon-img');
    element.src = pokeImg;

}
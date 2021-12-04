const url = 'https://pokeapi.co/api/v2/pokemon/'

async function getData(url){
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function setData(pokemon){
    // create text el
    let text = document.createElement('p');
    text.innerText = pokemon.name;

    // create button el
    let button = document.createElement('button');
    button.innerText = pokemon.url;
    button.classList.add('border');

    // create block-div el
    let block = document.createElement('div');
    block.classList.add('block','border');

    block.appendChild(text);
    block.appendChild(button);

    // add png
    getData(pokemon.url).then(json => {
      block.style.backgroundImage = "url("+json.sprites.front_shiny+")";
    })

    document.getElementById('container').appendChild(block);
    
}

// buttons handler
document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
      console.log(event.target.textContent);
      getData(event.target.textContent).then(json => {
        console.log(json);
      })
    }
});

// add main container
let container = document.createElement('div');
container.classList.add('container','border');
container.id = 'container';
document.body.appendChild(container);

// create blocks
getData(url).then(json => {
  for (let index = 0; index < json.results.length; index++) {
    setData(json.results[index])
  }
});
//fetch = function is used to for making HTTP requests to fetch resources.
//(JSON style data.,images,files)
//used for interacting with APIs to retrieve and send 
//data asynchronously over the web.
//fetch(url,{options})
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Coul not ftech resource");
//     }
//     return response.json();
// })
// .then(data =>console.log(data.id))
// .catch(error=>console.error(error));
async function fetchData(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
         throw new Error("Could not fetch the resource");
        }
        const data=await response.json();
        const pokemonSprite=data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite");
        imgElement.src=pokemonSprite;
        imgElement.style.display="block";
    }
    catch(error){
        console.error(error);
    }
}
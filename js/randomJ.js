const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "TKPs3saRxusfs9kng8UCuw==oufI8Xob70Z6PINn";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "oh ho ! An Error Happened :(";
    btnEl.innerText = "Tell Me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);

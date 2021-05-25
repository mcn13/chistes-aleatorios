const p = document.getElementById('jokes');

async function getJoke() {

  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { 'Accept': 'application/json', },
  });
  let data = await response.json();
  console.log(data);
}




function getJoke2() {

  fetch("https://icanhazdadjoke.com/", {
    headers: { 'Accept': 'application/json', },
  })
    .then(response => response.json())
    .then(data => { p.innerHTML = `${data.joke}` });
}
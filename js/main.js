


async function getJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const jokeObj = await jokeData.json();
    document.getElementById("jokes").innerHTML = jokeObj;
    
}
  
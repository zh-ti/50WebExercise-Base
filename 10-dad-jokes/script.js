window.onload = function(){
    const joke = document.querySelector(".joke");   
    const getBtn = document.querySelector("button");

    getBtn.addEventListener('click', getJoke);

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    async function getJoke(){
        const res = await fetch('https://icanhazdadjoke.com', config)
        const data = await res.json()
        joke.innerText = data.joke
    }
    getJoke();
}
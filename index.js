document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;
  
  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      // console.log(jokeData)
      joke = jokeData.joke
    })
      
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value
    const newJokeLi = document.createElement('li')
    if(username === "") return;
    fetchJoke()
    .then(() => {
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
    })
    
    jokeList.appendChild(newJokeLi)
    event.target.reset()
  })
})

import { createUser, getRandomJoke } from './fetch-http-provider.js'

// fetch API usage
(async () => {
  // chained promises
  // fetch(randomUrl)
  //   .then(res => res.json())
  //   .then(json => console.log(json))

  const joke = await getRandomJoke()
  console.log(joke)

  createUser({ name: 'Jorge Barron', job: 'A Job' })
})()

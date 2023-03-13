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

  // ===============================================================================

  // prev XMLHttpRequest
  const request = new XMLHttpRequest();
  // configure the request, method | url | is async
  request.open('GET', 'https://reqres.in/api/users/', true);


  /* POST examples
  request.open('POST', 'https://reqres.in/api/users/', true);
  // send the proper header information
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send("foo=bar&lorem=ipsum");


  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.send(JSON.stringify({ "email": "mail@user.com" }));
  */

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const response = JSON.parse(request.response);
      console.log({response})
    }
  }

  request.send(null)
})()


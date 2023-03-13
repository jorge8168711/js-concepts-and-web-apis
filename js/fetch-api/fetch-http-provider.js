// fetch API examples

const randomUrl = 'https://api.chucknorris.io/jokes/random'
const baseUrl = 'https://reqres.in/api'

export async function getRandomJoke () {
  try {
    const response = await fetch(randomUrl)

    if (!response.ok) throw new Error('Something went wrong')

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export async function createUser (user) {
  try {
    const reqConfig = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${baseUrl}/users`, reqConfig)
    const result = await response.json()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

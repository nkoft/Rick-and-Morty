


async function getCharacterData() {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await axios.get(url)
    // console.log(response.data.results)
    getCharacters(response.data.results)
    return response

  }
  catch (error) {
    console.error(error)
  }
}

getCharacterData()

function getCharacters(data) {
  // console.log('characters', data)
  const characterSelect = document.querySelector('#select-character')
  // console.log(characterForm)
  data.forEach((person) => {
    // console.log(person.id)
    const personTag = document.createElement('option')
    personTag.textContent = person.name
    personTag.value = person.id
    characterSelect.append(personTag)
  })
}

// Create the form option tags
// One for all characters, one for status(dead or alive), one for species
// 

async function getCharacterValue(id) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await axios.get(url)
    console.log(response.data)


    // invoke get character div function here ***
  }
  catch (error) {
    console.error(error)
  }
}


const characterForm = document.querySelector('#person-form')
characterForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const selectCharacter = document.querySelector('#select-character').value
  // console.log(selectCharacter)
  getCharacterValue(selectCharacter)

})


// Surely this is incorrect:

// const getCharacterSection = (data) => {
//   data.forEach((character) => {
//     const characterName = document.createElement('h2')
//     characterName.innerText = character.name
//     document.querySelector('.characters').append(characterName)
//   })
// }



// Get option tag values:
// Create tag value for characters



// Create tag value for species


// Create tag value for status dead or alive



// Create EventHandler for Forms
// Event Listener on click for all 3 options


// Fetch Data for Character Data: Images, Names, Species, Status
// Create dynamic html: img tag h3(name) and two p tags(species + status)



// Create removeImage tags for during each search



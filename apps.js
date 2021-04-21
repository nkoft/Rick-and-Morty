


async function getCharacterData() {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await axios.get(url)
    // console.log(response.data.results)

    getCharacterByName(response.data.results)
    getCharactersBySpecies(response.data.results)

    return response

  }
  catch (error) {
    console.error(error)
  }
}

getCharacterData()

function getCharacterByName(data) {
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

function getCharactersBySpecies(data) {
  const speciesSelect = document.querySelector('#select-species')
  data.forEach((species) => {
    console.log(species.species)
    const humanTag = document.querySelector('#human')
    humanTag.value = species.species
    speciesSelect.append(humanTag)
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
    removeChoice()
    getCharacterSection(response.data)

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




const getCharacterSection = (data) => {

  const characterName = document.createElement('h3')
  characterName.innerText = data.name
  document.querySelector('.character-profile').append(characterName)

  const characterImg = document.createElement('img')
  characterImg.src = data.image
  document.querySelector('.character-profile').append(characterImg)

  const characterSpecies = document.createElement('h4')
  characterSpecies.innerText = `Species: ${data.species}`
  document.querySelector('.character-profile').append(characterSpecies)

  const characterStatus = document.createElement('h4')
  characterStatus.innerText = `Status: ${data.status}`
  document.querySelector('.character-profile').append(characterStatus)

}

function removeChoice() {
  let oldChoice = document.querySelector('.character-profile')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}


// Get option tag values:
// Create tag value for characters



// Create tag value for species


// Create tag value for status dead or alive



// Create EventHandler for Forms
// Event Listener on click for all 3 options


// Fetch Data for Character Data: Images, Names, Species, Status
// Create dynamic html: img tag h3(name) and two p tags(species + status)



// Create removeImage tags for during each search



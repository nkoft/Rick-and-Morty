


async function getCharacterData() {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await axios.get(url)

    getCharacterByName(response.data.results)
    return response
  }
  catch (error) {
    console.error(error)
  }
}

getCharacterData()

// These functions kick off my page and append data to my select character form

function getCharacterByName(data) {

  const characterSelect = document.querySelector('#select-character')

  data.forEach((person) => {

    const personTag = document.createElement('option')
    personTag.textContent = person.name
    personTag.value = person.id
    characterSelect.append(personTag)
  })
}


// Invoke Function to get Character Profile By Name(ID):


async function getCharacterValue(id) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await axios.get(url)

    removeChoice()
    getCharacterByNameSection(response.data)


  }
  catch (error) {
    console.error(error)
  }
}

// Go to getCharacterByNameSection first. These functions follow.

async function getCharactersBySpecies(species) {
  try {
    const url = `https://rickandmortyapi.com/api/character/?species=${species}`
    const response = await axios.get(url)

    removeChoice()
    getCharacterSpeciesSection(response.data.results)
  }
  catch (error) {
    console.error(error)
  }
}

async function getCharactersByStatus(status) {
  try {
    const url = `https://rickandmortyapi.com/api/character/?status=${status}`
    const response = await axios.get(url)

    removeChoice()
    getCharacterStatusSection(response.data.results)
  }
  catch (error) {
    console.error(error)
  }
}

const statusForm = document.querySelector('#status-form')
statusForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const statusOption = document.querySelector('#select-status').value

  getCharactersByStatus(statusOption)
})


const speciesForm = document.querySelector('#species-form')
speciesForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const speciesOption = document.querySelector('#select-species').value

  getCharactersBySpecies(speciesOption)
})

// Event Listener to select individual characters:

const characterForm = document.querySelector('#person-form')
characterForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const selectCharacter = document.querySelector('#select-character').value

  getCharacterValue(selectCharacter)

})

// I created a character grid for the following invocations incorporating
// the getCharacterByNameSection function I already wrote:

const getCharacterSpeciesSection = (data) => {
  data.forEach((character) => {
    getCharacterByNameSection(character)
  })
}

const getCharacterStatusSection = (data) => {
  data.forEach((character) => {
    getCharacterByNameSection(character)
  })
}

// This is where we append the character profile elements to HTML DOM

const getCharacterByNameSection = (data) => {

  const section = document.createElement('section')
  section.className = 'character-profile'

  const characterImg = document.createElement('img')
  characterImg.src = data.image
  section.append(characterImg)

  const characterName = document.createElement('h3')
  characterName.innerText = data.name
  section.append(characterName)


  const characterSpecies = document.createElement('h4')
  characterSpecies.innerText = `Species: ${data.species}`
  section.append(characterSpecies)

  const characterStatus = document.createElement('h4')
  characterStatus.innerText = `Status: ${data.status}`
  section.append(characterStatus)

  document.querySelector('.characters').append(section)
}

// Clear character profile elements before conducting another search. 

function removeChoice() {
  let oldChoice = document.querySelector('.characters')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}





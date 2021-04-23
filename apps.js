


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



function getCharacterByName(data) {

  const characterSelect = document.querySelector('#select-character')

  data.forEach((person) => {

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

    removeChoice()
    getCharacterByNameSection(response.data)


  }
  catch (error) {
    console.error(error)
  }
}

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


const characterForm = document.querySelector('#person-form')
characterForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const selectCharacter = document.querySelector('#select-character').value

  getCharacterValue(selectCharacter)

})

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

function removeChoice() {
  let oldChoice = document.querySelector('.characters')
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



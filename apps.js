


async function getCharacterData() {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await axios.get(url)
    console.log(response.data.results)
    return response


    // for (let i = 0; i < response.data.results.length; i++) {
    //   console.log(characterList[i])
    // }


  }
  catch (error) {
    console.error(error)
  }
}

getCharacterData()



// Create the form option tags
// One for all characters, one for status(dead or alive), one for species
function setCharacterOptions(list) {
  // console.log(list)
  const selectCharacterTag = document.querySelector('#select-character')
  list.forEach((name) => {
    // console.log(name)
    const characterOptionTag = document.createElement('option')
    characterOptionTag.textContent = name
    characterOptionTag.value = name
    selectCharacterTag.append(characterOptionTag)
  });
  return list
}

// let characterList = Object.keys(response.data.results)
// console.log(characterList)
// setCharacterOptions(characterList)
// return characterList



// Get option tag values:
// Create tag value for characters
function getValue(e) {
  e.preventDefault()
  const characterOptionValue = document.querySelector('#select-character').value
  // console.log(characterOptionValue)
  getBreedImage(characterOptionValue)
}


// Create tag value for species


// Create tag value for status dead or alive



// Create EventHandler for Forms
// Event Listener on click for all 3 options


// Fetch Data for Character Data: Images, Names, Species, Status
// Create dynamic html: img tag h3(name) and two p tags(species + status)



// Create removeImage tags for during each search



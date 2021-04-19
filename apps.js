


async function getCharacterData() {

  const url = 'https://rickandmortyapi.com/api/character'

  try {
    const response = await axios.get(url)
    console.log(response.data.results)
    return response

  }
  catch (error) {
    console.error(error)
  }
}

getCharacterData()



// Create the form option tags
// One for all characters, one for status(dead or alive), one for species




// Get option tag values:
// Create tag value for characters


// Create tag value for species


// Create tag value for status dead or alive



// Create EventHandler for Forms
// Event Listener on click for all 3 options


// Fetch Data for Character Data: Images, Names, Species, Status
// Create dynamic html: img tag h3(name) and two p tags(species + status)



// Create removeImage tags for during each search



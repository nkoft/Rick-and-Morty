# Project Overview

## Project Name

**Rick and Morty**



## Project Description

**Users will be able to click on one of three drop down menus and search characters by name, species or status.**



## API and Data Sample

**https://rickandmortyapi.com/api/character**

```json
{
    "info": {
        "count": 671,
        "pages": 34,
        "next": "https://rickandmortyapi.com/api/character?page=2",
        "prev": null
    },
    "results": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
```


## Wireframes


![image](https://user-images.githubusercontent.com/82776561/115169038-edc56600-a08a-11eb-96e4-b7816e242b4c.png)




### MVP/PostMVP

  
#### MVP 
 
- Render character image, name, species and status
- Allow user to select and display character(s) by name status or species by drop down menu 
- Position drop downs on the left in a column. And style character cards in a grid-like layout.

#### PostMVP  

- Display alive status in green and dead in red
- Add additonal API calls to incease character list
- Add music to the main page

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 20| Core Application Structure (HTML, CSS, etc.) | Complete
|April 20| Pseudocode / actual code | Complete
|April 21| Initial Clickable Model  | Complete
|April 22| MVP | Complete
|April 23| Presentations | Incomplete

## Priority Matrix

[image](https://user-images.githubusercontent.com/82776561/115167328-35e18a00-a085-11eb-83a7-d187938988be.png)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML | H | 1 hrs | hrs | 1 hrs |
| HTML Drop Down Forms | H | 3 hrs | hrs | 2 hrs |
| HTML for Character Cards | H | 3 hrs | hrs | 0 hrs |
| Basic CSS | H | 3 hrs | hrs | 2 hrs |
| Use Axios to retrieve API data | H | 3 hrs | hrs | 5 hrs |
| Pseudo Code | H | 2 hrs | hrs | 1 hrs |
| Add 3 select-form eventListeners | H | 3 hrs | hrs | 4 hrs |
| Create HTML DOM elements through JS | H | 3 hrs | hrs | 4 hrs |
| Add removeElement function to clear grid when doing another search | H | 3 hrs | hrs | 1 hrs |
| CSS Flex Box Drop Down Menu | H | 3 hrs | hrs | 2 hrs |
| CSS Flex Box Character cards |H | 3 hrs | hrs | 4 hrs |
| Media Query Desktop to mobile | H | 4 hrs| hrs | 2 hrs |
| Total | H | 34 hrs| hrs | 28 hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

``` 
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
```

**I enjoyed creating these functions because they allowed me to save a lot of time. I essentially took
my getCharacterByNameSection() and invoked it as a forEach() inside these two parent functions to create a character profile grid instead of having to write everything out again.**

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
 
**Did not need to make Character Cards in my initial html write-up. Eventually in my JS code I created the necessary dynamic HTML DOM elements.** 
 
 

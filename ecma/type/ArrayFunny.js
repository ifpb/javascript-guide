// Map, filter, and reduce in Swift, explained with emoji
// https://gist.github.com/AccordionGuy/61716adbf706801e2a496a12ff19526e
// http://devhumor.com/media/map-filter-reduce-explained-with-emoji-s
// http://unicodey.com/emoji-data/table.htm

// Map
function cook(item) {
  let cookupTable = {
    "🐮": "🍔", // Cow face -> burger
    "🐄": "🍔", // Cow -> burger
    "🐂": "🍖", // Ox -> meat on bone
    "🐷": "🍖", // Pig face -> meat on bone
    "🐽": "🍖", // Pig nose -> meat on bone
    "🐖": "🍖", // Pig -> meat on bone
    "🐑": "🍖", // Sheep -> meat on bone
    "🐐": "🍖", // Goat -> meat on bone
    "🐔": "🍗", // Chicken -> poultry leg
    "🦃": "🍗", // Turkey -> poultry leg
    "🐸": "🍗", // Frog  -> poultry leg (no frog leg emoji...yet)
    "🐟": "🍣", // Fish -> sushi
    "🐠": "🍣", // Tropical fish -> sushi
    "🐡": "🍣", // Blowfish -> sushi
    "🐙": "🍣", // Octopus -> sushi
    "🍠": "🍟", // (Sweet) potato -> French fries
    "🌽": "🍿", // Corn -> popcorn
    "🌾": "🍚", // Rice -> cooked rice
    "🍓": "🍰", // Strawberry -> shortcake
    "🍂": "🍵", // Dried leaves -> tea
  }
  if(cookupTable[item] != undefined) {
    return cookupTable[item]
  }
  else {
    return "🍽" // Empty plate
  }
}


let cookedFood = ["🐮", "🍠", "⚽️", "🐔", "🌽"].map( item => cook(item) );
console.log(cookedFood) // ["🍔", "🍟", "🍽", "🍗", "🍿"]

[ "🌽" , "🐮" , "🐔"].map(item => cook(item)) // [ 🍿 , 🍔 , 🍳 ]

// Filter
function isVegetarian(item) {
  let vegetarianDishes = [
    "🍟", // French fries
    "🍿", // Popcorn
    "🍚", // Cooked rice
    "🍰", // Shortcake
    "🍵", // Tea
  ]
  return vegetarianDishes.includes(item)
}

let meatFree = ["🍔", "🍖", "🍟", "🍽", "🍗", "🍿", "🍰"].filter(item => isVegetarian(item))
console.log(meatFree) // ["🍟", "🍿", "🍰"]

["🍿", "🍔", "🍳"].filter(item => isVegetarian(item)) // [🍿, 🍳]


// Reduce
function eat(previous, current) {
  let qualifyingFood = [
    "🍔", // Burger
    "🍖", // Meat on bone
    "🍗", // Poultry leg
    "🍣", // Sushi
    "🍟", // French fries
    "🍿", // Popcorn
    "🍚", // Cooked rice
    "🍰", // Shortcake
  ]
  if ((previous == "" || previous == "💩") && qualifyingFood.includes(current)) {
    return "💩" // Poop
  }
  else {
    return ""
  }
}

let aftermath = ["🍔", "🍟", "🍗", "🍿"].reduce((previous, current) => eat(previous, current))
console.log(aftermath) // "💩"

["🍿", "🍳"].reduce((previous, current) => eat(previous, current)) // 💩

// http://nomadev.com.br/javascript-emoticons-emojis/
// :man-heart-man:
// :man-woman-boy:
// :man-woman-girl-boy:
'👨‍❤️‍👨'.replace(/👨/, 'JS') // "JS‍❤️‍👨"
'👨‍❤️‍👨'.match(/./ug) // ["👨", "‍", "❤", "️", "‍", "👨"]
'👩‍❤️‍👩'.match(/./ug) // ["👩", "‍", "❤", "️", "‍", "👩"]
'👨‍❤️‍👨'.replace(/👨/, '👩') // "👩‍❤️‍👨"
'👨‍❤️‍👨'.replace(/👨/g, '👩') // "👩‍❤️‍👩"
'👨‍👩‍👧‍👦'.match(/./ug) // ["👨", "‍", "👩", "‍", "👧", "‍", "👦"]
'👨‍👩‍👧‍👦'.replace(/👨/g, '👩') // "👩‍👩‍👧‍👦"

var puppyObject = [
  {
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
},
  {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
},
  {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}
]

for (var i = 0; i < puppyObject.length; i++) {  //includes starting point; conditional to end; and something to do at the end
  console.log(puppyObject[i].name)
}

var allToys = []
for (var i = 0; i < puppyObject.length; i++) {
  allToys = allToys.concat(puppyObject[i].toys)
}
console.log(allToys)

var findToy = function(dogs, toy) {
  for (var i = 0; i < dogs.length; i++) {
    for (t = 0; t < dogs[i].toys.length; t++)
    if(dogs[i].toys[t] === toy)
    return dogs[i].name;
  }
}

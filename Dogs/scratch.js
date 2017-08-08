/* var puppyObject = [
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
    picture: 'https://4.bp.blogspot.com/-DmTU2HW-m8U/TjFLaN43UxI/AAAAAAAABQw/B1C9EIRKhCI/s1600/Mutts.-Tops-dogs-for-families-of-twins..jpg'
},
  {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}
] */

/*for (var i = 0; i < puppyObject.length; i++) {  //includes starting point; conditional to end; and something to do at the end
  console.log(puppyObject[i].name)
}

var allToys = []
for (var i = 0; i < puppyObject.length; i++) {
  allToys = allToys.concat(puppyObject[i].toys)
}
console.log(allToys)

var findToy = function(dogs, toy) {
  for (var i = 0; i < dogs.length; i++) {
    for (t = 0; t < dogs[i].toys.length; t++) {
      if(dogs[i].toys[t] === toy)
        return dogs[i].name;
    }
  }
}
*/
 /**
var img = "http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg";
$("body").append("<img src='" + img + "'/>");
var img = "https://4.bp.blogspot.com/-DmTU2HW-m8U/TjFLaN43UxI/AAAAAAAABQw/B1C9EIRKhCI/s1600/Mutts.-Tops-dogs-for-families-of-twins..jpg";
$("body").append("<img src='" + img + "'/>");
var img ="http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg";
$("body").append("<img src='" + img + "'/>");
*/

/* for (var i = 0; i < puppyObject.length; i++) {
  $("body").append("<img src='" + puppyObject[i].picture + "'/>");
  $("body").append("<p>" + puppyObject[i].name + "</p>");
} */

// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3] without using `Array.concat` Problems from 8/1/17

/* var a = ["a", "b", "c"];
var b = [1, 2, 3];
a.push.apply(a, b); */

var a = ['a', 'b', 'c'];
var b = [1, 2, 3];

function merge(a, b) {
  if (a.length == b.length) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
      c.push([a[i], b[i]]);
    }
  return c;
  }
} 

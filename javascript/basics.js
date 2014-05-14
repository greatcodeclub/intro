// Variables
var name = 'value', num = 1

// var a === undefined
var a = null // Define it as having no value

// Conditionals
if (a) {
  console.log(a, 'is truthy')
} else {
  console.log(a, 'is falsy')
}
// => undefined is falsy
// => null is falsy
// => false is falsy
// => true is truthy
// => 1 is truthy


// Objects
var object = {}

object.name = 'Bob'
object['name'] = 'Bob'

object.name
// => Bob
object['name']
// => Bob

var object = {
  name: 'Bob',
  age: 33
}


// Arrays
var array = [1, 2, 3]

array.push(4)
array
// => [ 1, 2, 3, 4 ]

array.slice(1)
// => [ 2, 3, 4 ]

array.forEach(function(item) {
  // ...
})
array.map(function(item) { return item * 2 })
// => [ 2, 4, 6, 8 ]
array.filter(function(item) { return item % 2 == 0 })
// => [ 2, 4 ]

// delete array[2]
// array
// => [ 1, 2, , 4 ]
array.splice(2, 1)
array
// => [ 1, 2, 4 ]

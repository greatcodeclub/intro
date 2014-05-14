// Function declaration hoisting
var result = add(1, 2)

function add(a, b) {
  return a + b
}
result
// => 3

// Function expressions
var object = {}
object.add = function(a, b) {
  return a + b
}

object.name = 'object'
name = 'global'

// The value of `this`
object.getName = function() {
  return this.name
}
object.getName()
// => object

var getName = object.getName
getName()
// => global


// Binding `this`

object.printNameLater = function() {
  var self = this
  setTimeout(function() {
    console.log("Name is", self.name)
  }, 10)
}

object.printNameLater()
// Name is object
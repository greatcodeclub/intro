function User(name) {
  this.name = name
}
exports.User = User

var user = new User('Marc')
user.name
// => Marc

// user.save = ...
User.prototype.save = function() {
  return true
}

user.save()
// => true

User.prototype.maxNameLength = 100

user.maxNameLength
// => 100


function Admin(name) {
  User.call(this, name)
  this.admin = true
}

// Make Admin inherit from User
Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor
// => [Function: User]
Admin.prototype.constructor = Admin

var admin = new Admin('Bob')
admin
// => { name: 'Bob', admin: true }

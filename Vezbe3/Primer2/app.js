angular.module('controllerAsExample', [])
  .controller('TestController2', TestController2);

function TestController2() {
  this.name = 'John Smith';
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'john.smith@example.org'}
  ];
}

TestController2.prototype.greet = function() {
  alert(this.name);
};

TestController2.prototype.addContact = function() {
  this.contacts.push({type: 'email', value: 'yourname@example.org'});
};

TestController2.prototype.removeContact = function(contactToRemove) {
 var index = this.contacts.indexOf(contactToRemove);
  this.contacts.splice(index, 1);
};

TestController2.prototype.clearContact = function(contact) {
  contact.type = 'phone';
  contact.value = '';
};
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
// var todo = require('../../client/scripts/todo/todo');

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
      expect(todo.setup).to.be.an('function');
      expect(todo.init).to.be.an('function');
    });
  });
});

describe('the todo.util methods', function () {

  it('should have util property', function () {
    todo.should.have.property('util');
    expect(todo.util).to.be.an('object');
  });

  describe('the todo.util.trimTodoName method', function () {

    it('should have trimTodoName method', function () {
      todo.util.should.have.property('trimTodoName');
      assert.typeOf(todo.util.trimTodoName, 'function');
    });

    it('should trim a name', function () {
      var todoName = 'Trim trees      ';
      var trimmed = todo.util.trimTodoName(todoName);
      expect(trimmed).to.have.length(10);
      expect(trimmed).to.be.equal('Trim trees');
    });

  })

  describe('the todo.util.isValidTodoName method', function () {

    it('should have isValidTodoName', function () {
      todo.util.should.have.property('isValidTodoName');
      expect(todo.util.isValidTodoName).to.be.an('function');
    });
    
    it('should validate a valid name', function () {
      var validName = 'Fix bugs';
      var isValid = todo.util.isValidTodoName(validName);
      expect(isValid).to.be.true;
    });

    it('should invalidate an invalid name', function () {
      var inValidName = 'a      ';
      var isValid = todo.util.isValidTodoName(inValidName);
      expect(isValid).to.be.false;
    });

  });

  describe('the todo.util.getUniqueId method', function () {

    it('should have getUniqueId', function () {
      todo.util.should.have.property('getUniqueId');
      expect(todo.util.getUniqueId).to.be.an('function');
    });

    it('should return a unique id', function () {
      var firstId = todo.util.getUniqueId();
      var secondId = todo.util.getUniqueId();
      expect(firstId).to.not.equal(secondId);
    });

  });
});

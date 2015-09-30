/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Adds and removes todo items', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: 'Slay a dragon'
    }, true);
    test.assertElementCount('li.todo-item', 1, 'Should have 1 todo item');
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 0, 'Todo item should not exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Adds and removes multiple todo items', 4, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: 'Slay a dragon'
    }, true);
    this.fill('.todo-form', {
      todo: 'Ride a unicorn'
    }, true);
    this.fill('.todo-form', {
      todo: 'Pray to Cthulhu'
    }, true);
    test.assertElementCount('li.todo-item', 3, 'Should have 3 todo items');
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 2, 'Should have 2 todo items');
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 1, 'Should have 1 todo item');
    this.click('.todo-remove');
    test.assertElementCount('li.todo-item', 0, 'Todo item should not exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Marks todo items as done', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: 'Slay a dragon'
    }, true);
    test.assertElementCount('li.todo-item', 1, 'Should have 1 todo item');
    this.click('.todo-done');
    test.assertElementCount('li.todo-item--done', 1, 'Should have 1 todo item');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Ensures the user cannot add empty todo items', 1, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    this.fill('.todo-form', {
      todo: ''
    }, true);
    test.assertElementCount('li.todo-item', 0, 'Todo item should not exist');
  });

  casper.run(function() {
    test.done();
  });
});

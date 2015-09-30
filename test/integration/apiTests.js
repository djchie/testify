describe('API integration', function(){
  var server, setupStub, JSONresponse;

  before(function () {
    // Use Sinon to create a fake server to ensure we don't send real API requests
    server = sinon.fakeServer.create({
      respondImmediately: true
    });
    // Use Sinon to create a stub that will ensure todo.setup doesn't create a new todo.App
    setupStub = sinon.stub(todo, 'setup');
    // Create a sample JSON response that matches the way our server will respond and confirm your stub is called with that response
    JSONresponse = JSON.stringify({
      'todos': ['Slay a dragon', 'Ride a unicorn', 'Pray to Cthulhu']
    });
    server.respondWith('GET', 'http://localhost:3000/todos', [
      200, {
        'content-type': 'application/json'
      }, JSONresponse
    ]);
  });

  after(function () {
    // In the after block, make sure you restore anything you've modified
    server.restore();
    setupStub.restore();
  });


  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
    var responseArray = ['Slay a dragon', 'Ride a unicorn', 'Pray to Cthulhu'];
    expect(setupStub.calledWith(responseArray)).to.be.true;
  });
});

// Listing 5-2. Main Entry app.js for the TodoMVC Flux Application

var React = require('react');

var TodoApp = require('./components/TodoApp.react');

React.render(
  <TodoApp />,
  document.getElementById('todoapp')
);

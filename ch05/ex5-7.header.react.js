// Listing 5-7. header.react.js

var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTExtInput.react');

var Header = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTExtInput
          id="new-todo"
	  placeholder="What needs to be done?"
          onSave={this._onSave}
	/>
      </header>
    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in defferent ways.
   * @param {string} text
   */
  _onSave: function(text) {
    if (text.trim()) {
      TodoActions.create(text);
    }

  }

});

module.exports = Header;

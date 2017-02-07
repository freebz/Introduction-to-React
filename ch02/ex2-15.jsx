// Listing 2-15. Lifecycle During Change of State

var GenericComponent = React.createClass({

  // First
  shouldComponentUpdate: function() {
  },

  // Next
  componentWillUpdate: function() {
  },

  // render
  render: function() {
    return ( <h1>Hello World!</h1> );
  },

  // Finally
  componentDidUpdate: function() {
  }
});

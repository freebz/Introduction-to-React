// Listing 3-3. Original JSX Version of a Simple Hello World Application

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<Hello name="World" />, document.getElementById('container'));

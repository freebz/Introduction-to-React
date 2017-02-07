// Listing 2-3. Using React.Children.map

var MyComponent = React.createClass({
  render: function() {
    React.Children.map(this.props.children, function(child) {
      console.log(child)
    });
    return (
      <div>
      {this.props.name}
      </div>
    );
  }
});

React.render(<MyComponent name="frodo" >
  <p key="firsty">a child</p>
  <p key="2">another</p>
  </MyComponent, document.getElementById('container'));

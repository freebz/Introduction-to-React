// Listing 2-6. React.Children.only

var MyComponent = React.createClass({
  render: function() {
    var only = React.Children.only(this.props.children);
    console.log(only);

    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

React.render(<MyComponent name="frodo" >
  <p key="firsty">a child</p>
  </MyComponent>, document.getElementById('container'));

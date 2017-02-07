// Listing 2-12. getDefaultProps and getInitialState in Action

var GenericComponent = React.createClass({
  getInitialState: function() {
    return { thing: this.props.thingy };
  },

  getDefaultProps: function() {
    return { thingy: "cheese" }
  }
});

// ES6

class GenericComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thing: props.thingy };
  }
}

GenericComponent.defaultProps = { thingy: "cheese" };

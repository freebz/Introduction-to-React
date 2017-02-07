// Listing 3-7. Creating FormComponent

var React = require("react");

var FormComponent = React.createClass({
  render: function() {
    return <form>{this.props.children}</form>;
  }
});

FormComponent.Row = React.createClass({
  render: function() {
    return <fieldset>{this.props.children}</fieldset>;
  }
});

FormComponent.Label = React.createClass({
  render: function() {
    return <label htmlFor={this.props.for}>{this.props.text}
    {this.props.children}</label>;
  }
});

FormComponent.Input = React.createClass({
  render: function() {
    return <input type={this.props.type} id={this.props.id} />;
  }
});

var Form = FormComponent;
var App = (
	<Form>
  		<Form.Row>
  			<Form.Label text="label" for="txt">
  				<Form.Input id="txt" type="text" />
  			</Form.Label>
  		</Form.Row>
  		<Form.Row>
  			<Form.Label text="label" for="chx">
  				<Form.Input id="chx" type="checkbox" />
  			</Form.Label>
  		</Form.Row>
	  </Form>
);

React.render(App, document.getElementById("container"));

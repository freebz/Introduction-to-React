// Listing 3-8. JSX Transformed for the FormComponent

var React = require("react");

var FormComponent = React.createClass({
  displayName: "FormComponent",

  render: function render() {
    return React.createElement(
      "form",
      null,
      this.props.children
    );
  }
});

FormComponent.Row = React.createClass({
  displayName: "Row",

  render: function render() {
    return React.createElement(
      "fieldset",
      null,
      this.props.children
    );
  }
});

FormComponent.Label = React.createClass({
  displayName: "Label",

  render: function render() {
    return React.createElement(
      "label",
      { htmlFor: this.props["for"] },
      this.props.text,
      this.props.children
    );
  }
});

FormComponent.Input = React.createClass({
  displayName: "Input",

  render: function render() {
    return React.createElement("input", { type: this.props.type,
      id: this.props.id });
  }
});

var Form = FormComponent;
var App = React.createElement(
  Form,
  null,
  React.createElement(
    Form.Row,
    null,
    React.createElement(
      Form.Label,
      { text: "label", "for": "txt" },
      React.createElement(Form.Input, { id: "txt",
	type: "text" })
    )
  ),
  React.createElement(
    Form.Row,
    null,
    React.createElement(
      Form.Label,
      { text: "label", "for", "chx" },
      React.createElement(Form.Input, { id: "chx",
	type: "checkbox" })
    )
  )
);

React.render(App, document.getElementById("container"));

// Listing 3-13. Input Types and Spread Attributes

var input1 = {
  "type": "text",
  "text": "label",
  "id": "txt"
};

var input2 = {
  "type": "checkbox",
  "text": "label",
  "id": "chx"
};

var Form = FromComponent;
var App = (
  <Form>
    <Form.Row>
      <Form.Label {...input1} >
        <Form.Input {...input1} />
      </Form.Label>
    </Form.Row>
    <Form.Row>
      <Form.Label {...input2}>
        <Form.Input {...input2} />
      </Form.Label>
    </Form.Row>
  </Form>
);

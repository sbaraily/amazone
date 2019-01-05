import React from 'react';
import { Container, Header, Form } from 'semantic-ui-react';

class RevForm extends React.Component {
  defaultValues = { subject: '', body: '', stars: '', date: ''}
  state = { ...this.defaultValues }

  // componentDidMount() {
  //   if (this.props.id) {
  //     this.setState({...this.props})
  //   }
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state }
    this.props.submit(product)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value })
  }

  render() {
    const { subject, body, stars, date } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="subject"
          placeholder="subject"
          value={subject}
          onChange={this.handleChange}
          required
        /> <br/>
        <Form.TextArea
          name="body"
          placeholder="Body"
          value={body}
          onChange={this.handleChange}
        /> <br/>
        <Form.Input
          name="stars"
          placeholder="Stars"
          type="number"
          value={stars}
          onChange={this.handleChange}
        /> <br/>
        <Form.Input
          name="date"
          placeholder="Date"
          value={date}
          onChange={this.handleChange}
        /> 
        
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default RevForm;
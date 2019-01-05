import React from 'react';
import { Form } from 'semantic-ui-react';

class DeptForm extends React.Component {
  defaultValues = { title: '' }
  state = { ...this.defaultValues }

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

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
    const { title } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder="Enter the Department Title"
          value={title}
          onChange={this.handleChange}
          required
        /> <br/><br/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default DeptForm;
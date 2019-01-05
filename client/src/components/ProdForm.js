import React from 'react';
import { Container, Header, Form } from 'semantic-ui-react';


class ProdForm extends React.Component {
  defaultValues = { name: '', price: '', description: ''}
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
    const { name, description, price, stock } = this.state;
    return (
      <Container textAlign='center' style={{border:'1px dotted grey', 
      padding:'30px', margin:'50px', width: '50%', 
      background:'linear-gradient(to bottom right, white 0%, offwhite 84%)'}}>
      <Header as='h3'>Add a Product</Header>

      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Name of the Product"
          value={name}
          onChange={this.handleChange}
          required
        /> <br/>
        <Form.TextArea
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        /> <br/><br/>
        <Form.Input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        /> 
        <Form.Input
          name="stock"
          placeholder="Stock"
          value={stock}
          type="number"
          onChange={this.handleChange}
        /> <br/><br/>
        
        <Form.Button >Submit</Form.Button>
      </Form>
      </Container>
    )
  }
}

export default ProdForm;
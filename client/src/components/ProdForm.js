import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        /> <br/>
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        /> <br/>
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        /> <br/>
        <input
          name="stock"
          placeholder="Stock"
          value={stock}
          type="number"
          onChange={this.handleChange}
        /> 
        
        <button>Submit</button>
      </form>
    )
  }
}

export default ProdForm;
import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        />
{/*         
        // <input
        //   name="description"
        //   placeholder="Description"
        //   value={description}
        //   onChange={this.handleChange}
        // />
        // <input
        //   name="price"
        //   placeholder="Price"
        //   type="number"
        //   value={price}
        //   onChange={this.handleChange}
        // />
        // <input
        //   name="department"
        //   placeholder="Department"
        //   value={department}
        //   onChange={this.handleChange}
        // /> */
        }
        <button>Submit</button>
      </form>
    )
  }
}

export default DeptForm;
import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input
          name="subject"
          placeholder="subject"
          value={subject}
          onChange={this.handleChange}
          required
        /> <br/>
        <textarea
          name="body"
          placeholder="Body"
          value={body}
          onChange={this.handleChange}
        /> <br/>
        <input
          name="stars"
          placeholder="Stars"
          type="number"
          value={stars}
          onChange={this.handleChange}
        /> <br/>
        <input
          name="date"
          placeholder="Date"
          value={date}
          onChange={this.handleChange}
        /> 
        
        <button>Submit</button>
      </form>
    )
  }
}

export default RevForm;
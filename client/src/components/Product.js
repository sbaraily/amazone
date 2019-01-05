import React from 'react'
import axios from 'axios'


class Product extends React.Component {
  state = { product: {} }

  componentDidMount() {
    const url = this.props.match.url;
    axios.get(`/api/${url}`)
      .then(res => {
        this.setState({ product: res.data })
      })
  }


showProduct = () => {
    const { product: {name, description, price, stock} }  = this.state

    return (
        <div>
        <h1>{name}</h1>
        <h1>${price}</h1>
        <h3>{description}</h3>
        <h3>In Stock? {stock}</h3>
        </div>
    )
 
}

  render() {
    // const { edit } = this.state
    return (
      <div>
        {this.showProduct()}
      </div>
    )
  }

}

export default Product
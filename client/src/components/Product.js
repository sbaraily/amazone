import React from 'react'
import axios from 'axios'
import RevForm from './RevForm'
import { Link } from 'react-router-dom';
import {Container, Header, Button, Grid, Segment} from 'semantic-ui-react'



class Product extends React.Component {
  state = { product: {}, reviews: [] }
  

  componentDidMount() {
    const url = this.props.match.url;
    axios.get(`/api/${url}`)
      .then(res => {
        this.setState({ product: res.data })
      })

      axios.get(`/api/${url}/reviews`)
      .then(res => {
        this.setState({...this.state.reviews, reviews: res.data })
      })
  }

  submit = (review) => {
    const url = this.props.match.url;
    axios.post(`/api/${url}/reviews`, { review })
      .then(res => {
        this.setState({ reviews: [res.data ] })
      })
  }

  displayReviews = () => {
    const url = this.props.match.url;
    return this.state.reviews.map(r => {
        
      return (
  
        <ul key={r.id}>
          <li>
            <Link to={`${url}/reviews/${r.id}`}>{r.subject} || Stars:{r.stars}</Link>
          </li>
        </ul>
      )
    })
  }


  showProduct = () => {
    const { product: {name, description, price, stock} }  = this.state

    return (

      <Container textAlign='center' style={{border:'1px dotted grey',
      padding:'20px', margin:'10px', width: '50%', 
      background:'linear-gradient(to bottom right, white 0%, offwhite 84%)'}}>
        <h1>{name}</h1>
        <h1>${price}</h1>
        <h3>{description}</h3>
        <h3>Stock: {stock}</h3>
        <br />
        <h2>Reviews</h2>
        {this.displayReviews()}
        <h2>Leave a Review</h2>
        <RevForm submit={this.submit} />
        </Container>
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
import React from 'react'
import axios from 'axios'
import RevForm from './RevForm'
import { Link } from 'react-router-dom';
import { Comment } from 'semantic-ui-react';


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
        <Comment.Group>
          <Comment key={r.id}>
            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Header as='h3' dividing>
                <Link to={`${url}/reviews/${r.id}`}>{r.subject}</Link>
              </Comment.Header>
              <Comment.Metadata>
                {r.stars}
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
      </Comment.Group>
      )
    })
  }


  showProduct = () => {
    const { product: {name, description, price, stock} }  = this.state

    return (
        <div>
        <h1>{name}</h1>
        <h1>${price}</h1>
        <h3>{description}</h3>
        <h3>Stock: {stock}</h3>
        <br />
        <h2>Reviews</h2>
        {this.displayReviews()}
        <h2>Leave a Review</h2>
        <RevForm submit={this.submit} />
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
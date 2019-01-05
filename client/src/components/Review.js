import React from 'react'
import axios from 'axios'


class Review extends React.Component {
  state = { review: {} }
  

  componentDidMount() {
    const url = this.props.match.url;
    axios.get(`/api/${url}`)
      .then(res => {
        this.setState({ review: res.data })
      })
  }


  showReview = () => {
    const { review: {subject, body, stars, date} }  = this.state

    return (
        <div>
        <h1>{subject}</h1>
        <h3>{stars} stars</h3>
        <p>{body}</p>
        <h3>{date}</h3>
        </div>
    )
 
}

  render() {
    // const { edit } = this.state
    return (
      <div>
        {this.showReview()}
      </div>
    )
  }

}

export default Review
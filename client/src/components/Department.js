import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProdForm from './ProdForm';

class Department extends React.Component {
  state = { department: {}, products: [], edit: false }

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}/products`)
      .then(res => {
        this.setState({ products: res.data })
      })
  }

//   toggleEdit = () => {
//     this.setState(state => {
//       return { edit: !this.state.edit }
//     })
//   }


listProducts = () => {

    return this.state.products.map(p => {
        
        return (
    
          <ul key={p.id}>
            <li>
              <Link to={`/products/${p.id}`}>{p.name}  : ${p.price}</Link>

            </li>
          </ul>
        )
      })
}




//   listProducts = () => {
//     const { products: { name, price } } = this.state
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h3>{price}</h3>

//       </div>
//     )
//   }

//   edit = () => {
//     return <Form {...this.state.department} submit={this.submit} />
//   }

  submit = (product) => {
    axios.post(`/api/departments/${this.props.match.params.id}/products/`, { product })
      .then(res => {
        this.setState({ products: [res.data, ...this.state.products ] })
      })
  }

  render() {
    // const { edit } = this.state
    return (
      <div>
        {this.listProducts()}
        <ProdForm submit={this.submit} /> 
      </div>
    )
  }

}

export default Department
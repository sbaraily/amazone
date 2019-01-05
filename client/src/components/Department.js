import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import ProdForm from './ProdForm';
import DeptForm from './DeptForm';

class Department extends React.Component {
  state = { department: {}, products: [], edit: false}

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}/products`)
      .then(res => {
        this.setState({ products: res.data })
      })
      axios.get(`/api/departments/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ department: res.data })
      })
  }




listProducts = () => {

    return this.state.products.map(p => {
        
        return (
    
          <ul key={p.id}>
            <li>
              <Link to={`/departments/${this.props.match.params.id}/products/${p.id}`}>{p.name}  : ${p.price}</Link>

            </li>
          </ul>
        )
      })
}

  deleteDept = (id) => {
      axios.delete(`/api/departments/${id}`)
          .then(res => {
          });   
      return  (
      window.location.href = "/departments"
      )
  }

  toggleEdit = () => {
    this.setState(state => {
      return (
          {edit: !this.state.edit}
        )
      }
    )
  }

  editDept = (id, e) => {
    return (
      <div>
      <DeptForm {...this.state.department} editSubmit={this.editSubmit}/>
      </div>
    )
  }


  submit = (product) => {
    axios.post(`/api/departments/${this.props.match.params.id}/products/`, { product })
      .then(res => {
        this.setState({ products: [res.data, ...this.state.products ] })
      })
  }

  editSubmit = (department) => {
    
    axios.put(`/api/departments/${this.props.match.params.id}`, { department })
      .then(res => {
        this.setState({ department: res.data })
      })
  }

  render() {
    // const { edit } = this.state
    return (
      <div>
        <h1>Department: {this.state.department.title}</h1>
        {this.listProducts()}
        <ProdForm submit={this.submit} /> 
        <br />
        <Link to={"#"} onClick={(e) => this.deleteDept(this.props.match.params.id)}>Delete</Link> || <Link to={"#"} onClick={(e) => this.toggleEdit(this.props.match.params.id, e)}>Edit</Link>
        {this.state.edit ? this.editDept() : <div></div> }
      </div>
    )
  }

}

export default Department
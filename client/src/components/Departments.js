import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeptForm from './DeptForm'


class Departments extends React.Component {
    state = { departments: [] }


    componentDidMount() {
        axios.get('/api/departments')
          .then(res => {
            this.setState({ departments: res.data })
          })
      }

    submit = (department) => {
        axios.post('/api/departments', { department })
        .then(res => {
        this.setState({ departments: [...this.state.departments, res.data]})
      })
    }

    listDepartments = () => {

        return this.state.departments.map(d => {
            
            return (
        
              <ul key={d.id}>
                <li>
                  <Link to={`/departments/${d.id}`}>{d.title}</Link>

                </li>
              </ul>
            )
          })
    }




    render() {
        return(
            <div>
                {this.listDepartments()}
                <h2>Add Departments</h2>
                <DeptForm submit={this.submit} /> 
            </div>
                
        )
    }
}




export default Departments 
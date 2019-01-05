import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeptForm from './DeptForm'
import {Container, Header, Button, Grid, Segment} from 'semantic-ui-react'


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
            <Button inverted color='red' key={d.id}>
                  <Link to={`/departments/${d.id}`}>{d.title}
                  </Link>
            </Button>
            )
          })
    }

    render() {
        return(
          <Container textAlign='center' style={{border:'1px dotted grey', 
      padding:'20px', margin:'10px', width: '50%', 
      background:'linear-gradient(to bottom right, white 0%, offwhite 84%)'}}>
        <Header as='h1'>Please Choose a Department</Header>
                {this.listDepartments()}
                <Header as='h3'>Add a Department</Header>
                <DeptForm submit={this.submit} /> 
            </Container>
                
        );
    }

    
}




export default Departments 
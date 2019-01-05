import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, List } from 'semantic-ui-react';


class Products extends React.Component {
    state = { products: [] }

    listProducts = () => {
        return this.state.products.map(p => {
            return (

      <Container textAlign='center' style={{border:'1px dotted grey',
      padding:'20px', margin:'10px', width: '50%', 
      background:'linear-gradient(to bottom right, white 0%, offwhite 84%)'}}>

              <ul key={p.id}>
                <List.Item>
                  <Link to={`/products/${p.id}`}>{p.name}</Link>
                </List.Item>
              </ul>
        </Container>
            )
          })
    }

    render() {
        return(
            <div></div>
        )
    }
}




export default Products 
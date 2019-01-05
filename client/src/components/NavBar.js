import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu, Divider, Segment, Dropdown, Button } from 'semantic-ui-react';

const NavBar = () => (
  <Segment basic textAlign='center'>
    <Header textAlign='center' color='teal'>
      <Header.Content as='h1'>
        Amazone
        <Header.Subheader>the place to buy anything and everything!</Header.Subheader>
      </Header.Content>
    </Header>
    <nav>
      <Menu>
        <Menu.Item name='home'>
        <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink>
      </Menu.Item>
      <Menu.Item name='department'>
        <NavLink activeStyle={styles.active} exact to='/departments'>Department</NavLink>
      </Menu.Item>
      <Menu.Menu position='right'>
      <Dropdown item text='Shopping Cart'>
        <Dropdown.Menu>
          <Dropdown.Item>Cart</Dropdown.Item>
          <Dropdown.Item>Checkout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Button primary>Sign In</Button>
      </Menu.Item>
      </Menu.Menu>
      </Menu>
    </nav>
  <Divider />
  </Segment>
)

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}
export default NavBar;
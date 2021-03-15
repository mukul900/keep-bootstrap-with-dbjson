import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Keep Note</Navbar.Brand>
          </Navbar>
        )
    }
}

 export default Header
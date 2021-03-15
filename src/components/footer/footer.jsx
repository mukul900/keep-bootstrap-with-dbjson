import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
            <Navbar.Text >Keep Note @2020</Navbar.Text>
          </Navbar>
        )
    }
}

 export default Footer
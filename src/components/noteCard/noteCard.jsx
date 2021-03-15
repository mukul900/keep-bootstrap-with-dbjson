import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class NoteCard extends React.Component{
    
    render(){        
        return (
            <Card style={{ width: '18rem' }}>          
            <Card.Body>
              <Card.Title>{this.props.note.noteTitle}</Card.Title>
              <Card.Text>
               {this.props.note.noteDesc}
              </Card.Text>
              <Button variant="primary">Like</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default NoteCard
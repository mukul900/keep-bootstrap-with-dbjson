import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Note from '../../model/note'
import './noteTaker.css'
class NoteTaker extends React.Component {
    constructor() {
        super();
        this.notes= new Note();
        this.state = {
            noteTitle: "",
            noteDesc: ""
        }
        this.handleOnChange= this.handleOnChange.bind(this);
        this.handleOnClick= this.handleOnClick.bind(this);
    }

    handleOnChange(event) {
        event.preventDefault();
        if (event.target.id == "txtText") {
            this.setState({
                noteTitle: event.target.value
            })
        }
        else {
            this.setState({
                noteDesc: event.target.value
            })
        }
    }

    handleOnClick(event) {
        event.preventDefault()
        this.notes.noteTitle= this.state.noteTitle;
        this.notes.noteDesc= this.state.noteDesc;
        this.props.saveNotes(this.notes);
        this.setState({
            noteTitle:"",
            noteDesc:""
        })
    }
    render() {
        return (
            <div>
                <Form >
                    <Form.Group >
                        <Form.Label>Note Tittle</Form.Label>
                        <Form.Control id="txtText" type="text" value={this.state.noteTitle} placeholder="Enter Note Text" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control id="txtDesc" type="text" value={this.state.noteDesc} placeholder="Eneter Note Description" onChange={this.handleOnChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.handleOnClick}>
                        Submit
                </Button>
                </Form>
            </div>
        )
    }
}

export default NoteTaker
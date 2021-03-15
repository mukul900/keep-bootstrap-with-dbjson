import React, { Component } from 'react'
import NoteCard from '../noteCard/noteCard'

import CardDesk from 'react-bootstrap/CardDeck'

class NoteViewer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        const notesDetails = this.props.notes.map((item) =>
            <NoteCard key={item.noteId} note={item}></NoteCard>
        );

        return (
            <div>
                <h1>List Of Available Notes</h1>
                <CardDesk>{notesDetails}</CardDesk>

            </div>
        )
    }
}

export default NoteViewer
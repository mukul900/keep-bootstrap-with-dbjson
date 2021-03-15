import React from 'react';
import NoteTaker from '../noteTaker/noteTaker'
import NoteViewer from '../noteViewer/noteViewer';

// import { addNotes, getAllNotes } from '../../services/noteService'
import NotesService from  '../../services/noteService'


class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            notesList: []
        }
        this.ntsService= new NotesService();
        this.saveNotes = this.saveNotes.bind(this);
      this.getAllNotes= this.getAllNotes.bind(this);
    }
    componentDidMount(){
       this.ntsService.getAllNotes()
    }

    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    // one method to store Notes
    saveNotes(data) {
        // Store Values in NoteList of Arrays
        let notesList = this.state.notesList;
        data.noteId = notesList.length + 1;
        notesList.push(data);
        this.setState({
            notesList
        })

        // Store Values in db.json
        //addNotes(data);
        // this.NotesService.addNotes(data);
        this.ntsService.getAllNotes(data);
       
    }

    //getAllNotes(){
        this.NotesService.getAllNotes()
    //    this.notesList= getAllNotes();
    tthis
    getAllNotes().then(data=>{
        console.log(data);
        this.setState({
            notesList:data
        })
    })
    }
    render() {
        return (
            <div className="justify-content-center">
                <NoteTaker saveNotes={this.saveNotes}></NoteTaker>
                <NoteViewer notes={this.state.notesList}></NoteViewer>
            </div>
        )
    }
}

export default Dashboard    
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios.get('http://localhost:5000/notes')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err)
      });
  }


  const addNote = newNote => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const deleteNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="fullPage">
      <Header />

      <div className="listArea">
        <Grid container>
          <CreateArea onAdd={addNote} />
        </Grid>

        <Grid container spacing={0}>
          {notes.map((noteItem, index) => (
            <Grid container item xs={12} sm={6} md={3} spacing={0} key={index}>
              <Note
                key={"noteKey" + index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default App;
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

  // READ
  const getList = () => {
    axios.get('http://localhost:5000/notes')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err)
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
          <CreateArea onAdd={getList} />
        </Grid>

        <Grid container spacing={0}>
          {notes.map(noteItem => (
            <Grid container item xs={12} sm={6} md={3} spacing={0} key={"gridKey" + noteItem._id}>
              <Note
                key={"noteKey" + noteItem._id}
                id={noteItem._id}
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
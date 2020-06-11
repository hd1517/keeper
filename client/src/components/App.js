import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import EditModal from "./EditModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(0);

  const getModal = (id) => {
    setShowModal(id);
  };

  // Update
  const hideModal = (id, data) => {
    if (data.title === "" && data.content === "") {
      deleteNote(id);
    } else {
      axios.patch(`http://localhost:5000/notes/update/${id}`, data).then(() => {
        getList();
      });
    }
    setShowModal(0);
  };

  useEffect(() => {
    getList();
  }, []);

  // READ
  const getList = () => {
    axios
      .get("http://localhost:5000/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE
  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/notes/${id}`).then(() => {
      setNotes((prevNotes) => {
        return prevNotes.filter((note) => note._id !== id);
      });
    });
  };

  return (
    <div className="fullPage">
      <Header />

      <div className="listArea">
        <Grid container>
          <CreateArea onAdd={getList} />
        </Grid>

        <Grid container spacing={0}>
          {notes.map((noteItem) => {
            return (
              <Grid
                container
                item
                xs={12}
                sm={6}
                md={3}
                spacing={0}
                key={"gridKey" + noteItem._id}
              >
                <Note
                  key={"noteKey" + noteItem._id}
                  id={noteItem._id}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                  onEdit={() => getModal(noteItem._id)}
                />
                <EditModal
                  key={"modalKey" + noteItem._id}
                  id={noteItem._id}
                  openState={showModal === noteItem._id}
                  handleOnClose={hideModal}
                  title={noteItem.title}
                  content={noteItem.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <Footer />
    </div>
  );
}

export default App;

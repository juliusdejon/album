import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import Header from './Header';
import Upload from './Upload';

function App() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Header toggleModal={toggleModal} />
      <Upload modal={modal} toggleModal={toggleModal} />
      <Gallery />
    </div>
  );
}

export default App;
